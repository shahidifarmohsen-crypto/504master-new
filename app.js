// ===================== English 504 Master — App Logic =====================
const STORAGE_KEY = "e504_progress_v1";
const TOTAL_WORDS = ALL_WORDS.length;

function todayStr(){
  const d = new Date();
  return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
}
function daysBetween(a,b){
  const d1 = new Date(a), d2 = new Date(b);
  return Math.round((d2-d1)/86400000);
}

function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) throw new Error("empty");
    const p = JSON.parse(raw);
    p.learnedWords = p.learnedWords || {};
    p.lessonScores = p.lessonScores || {};
    p.streak = p.streak || {count:0, lastDate:null};
    p.history = p.history || {};
    return p;
  }catch(e){
    return { learnedWords:{}, lessonScores:{}, streak:{count:0,lastDate:null}, history:{} };
  }
}
function saveProgress(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

let state = {
  progress: loadProgress(),
  currentLessonIdx: 0,
  currentCardIdx: 0,
  quiz: { questions:[], idx:0, score:0, source:null, lessonId:null, locked:false }
};

// ---------------- Toast ----------------
let toastTimer = null;
function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove("show"), 2200);
}

// ---------------- TTS ----------------
function speak(text, lang){
  if(!("speechSynthesis" in window)){
    toast("پخش صدا در این مرورگر پشتیبانی نمی‌شود");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.92;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

// ---------------- Navigation ----------------
function navigate(name){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById("screen-"+name).classList.add("active");
  document.querySelectorAll(".nav-item").forEach(b=>{
    b.classList.toggle("active", b.dataset.nav === name);
  });
  window.scrollTo(0,0);
  if(name==="home") renderHome();
  if(name==="lessons") renderLessonGrid();
  if(name==="dictionary") renderDictionary();
  if(name==="progress") renderProgressScreen();
  if(name==="daily") renderDailyScreen();
}
document.querySelectorAll("[data-nav]").forEach(el=>{
  el.addEventListener("click", ()=> navigate(el.dataset.nav));
});

// ---------------- Helpers ----------------
function lessonProgress(lesson){
  const learned = lesson.words.filter(w=>state.progress.learnedWords[w.en]).length;
  return Math.round((learned/lesson.words.length)*100);
}
function overallPercent(){
  const learned = Object.keys(state.progress.learnedWords).length;
  return Math.round((learned/TOTAL_WORDS)*100);
}
function findNextLesson(){
  for(const l of WORDS){
    if(lessonProgress(l) < 100) return l;
  }
  return WORDS[WORDS.length-1];
}

// ---------------- HOME ----------------
function renderHome(){
  const hour = new Date().getHours();
  const greet = hour < 12 ? "صبح بخیر! ☀️" : hour < 18 ? "عصر بخیر! 🌤" : "شب بخیر! 🌙";
  document.getElementById("homeGreeting").textContent = greet;

  document.getElementById("statStreak").textContent = state.progress.streak.count;
  document.getElementById("statLearned").textContent = Object.keys(state.progress.learnedWords).length;
  document.getElementById("statPercent").textContent = overallPercent()+"٪";
  document.getElementById("streakTopNum").textContent = state.progress.streak.count;

  const next = findNextLesson();
  const idx = WORDS.findIndex(l=>l.id===next.id);
  const prog = lessonProgress(next);
  document.getElementById("continueLessonCard").innerHTML = `
    <div class="lesson-card" style="text-align:right;" onclick="openLesson(${idx})">
      <div class="num">${next.title}</div>
      <h3>${next.theme}</h3>
      <div class="theme">${next.words.length} واژه</div>
      <div class="progress-track mini-progress"><div class="progress-fill" style="width:${prog}%"></div></div>
    </div>`;

  const preview = WORDS.slice(0,4);
  document.getElementById("homeLessonPreview").innerHTML = preview.map(l=>{
    const i = WORDS.findIndex(x=>x.id===l.id);
    const p = lessonProgress(l);
    return `<div class="lesson-card" onclick="openLesson(${i})">
      <div class="num">${l.title}</div>
      <h3>${l.theme}</h3>
      <div class="theme">${l.words.length} واژه</div>
      <div class="progress-track mini-progress"><div class="progress-fill" style="width:${p}%"></div></div>
      ${p===100?'<span class="badge">✅</span>':''}
    </div>`;
  }).join("");
}
document.getElementById("btnStartDaily").addEventListener("click", ()=> startDailyPractice());

// ---------------- LESSONS GRID ----------------
function renderLessonGrid(){
  document.getElementById("lessonGrid").innerHTML = WORDS.map((l,i)=>{
    const p = lessonProgress(l);
    return `<div class="lesson-card" onclick="openLesson(${i})">
      <div class="num">${l.title}</div>
      <h3>${l.theme}</h3>
      <div class="theme">${l.words.length} واژه</div>
      <div class="progress-track mini-progress"><div class="progress-fill" style="width:${p}%"></div></div>
      ${p===100?'<span class="badge">✅</span>':''}
    </div>`;
  }).join("");
}

// ---------------- LESSON DETAIL / FLASHCARDS ----------------
function openLesson(idx){
  state.currentLessonIdx = idx;
  state.currentCardIdx = 0;
  navigate("lesson-detail");
  renderFlashcard();
}
function renderFlashcard(){
  const lesson = WORDS[state.currentLessonIdx];
  const word = lesson.words[state.currentCardIdx];
  document.getElementById("lessonDetailTitle").textContent = lesson.title + " · " + lesson.theme;
  document.getElementById("cardIndex").textContent = state.currentCardIdx+1;
  document.getElementById("cardTotal").textContent = lesson.words.length;
  document.getElementById("cardPos").textContent = word.pos;
  document.getElementById("cardWordEn").textContent = word.en;
  document.getElementById("cardWordFa").textContent = word.fa;
  document.getElementById("cardExEn").textContent = word.exEn;
  document.getElementById("cardExFa").textContent = word.exFa;

  document.getElementById("cardDots").innerHTML = lesson.words.map((_,i)=>
    `<span class="dot ${i===state.currentCardIdx?'active':''}"></span>`).join("");

  // mark as "viewed/learned" once seen
  state.progress.learnedWords[word.en] = true;
  saveProgress();
}
document.getElementById("btnNextCard").addEventListener("click", ()=>{
  const lesson = WORDS[state.currentLessonIdx];
  state.currentCardIdx = (state.currentCardIdx+1) % lesson.words.length;
  renderFlashcard();
});
document.getElementById("btnPrevCard").addEventListener("click", ()=>{
  const lesson = WORDS[state.currentLessonIdx];
  state.currentCardIdx = (state.currentCardIdx-1+lesson.words.length) % lesson.words.length;
  renderFlashcard();
});
document.getElementById("btnSpeakEn").addEventListener("click", ()=>{
  const word = WORDS[state.currentLessonIdx].words[state.currentCardIdx];
  speak(word.en + ". " + word.exEn, "en-US");
});
document.getElementById("btnSpeakFa").addEventListener("click", ()=>{
  const word = WORDS[state.currentLessonIdx].words[state.currentCardIdx];
  speak(word.fa, "fa-IR");
});
document.getElementById("btnGoQuiz").addEventListener("click", ()=>{
  startLessonQuiz(state.currentLessonIdx);
});

// ---------------- QUIZ ENGINE ----------------
function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function buildQuestions(pool, count){
  const chosen = shuffle(pool).slice(0, Math.min(count, pool.length));
  return chosen.map(word=>{
    const direction = Math.random() < 0.5 ? "en2fa" : "fa2en";
    const distractors = shuffle(ALL_WORDS.filter(w=>w.en!==word.en)).slice(0,3);
    const options = shuffle([word, ...distractors]);
    return { word, direction, options };
  });
}
function startLessonQuiz(lessonIdx){
  const lesson = WORDS[lessonIdx];
  state.quiz = {
    questions: buildQuestions(lesson.words, lesson.words.length),
    idx:0, score:0, source:"lesson", lessonId: lesson.id, locked:false
  };
  document.getElementById("quizTitle").textContent = "تمرین: " + lesson.theme;
  navigate("quiz");
  renderQuizQuestion();
}
function startDailyPractice(){
  const learnedEntries = ALL_WORDS.filter(w=>state.progress.learnedWords[w.en]);
  const pool = learnedEntries.length >= 6 ? learnedEntries : ALL_WORDS;
  state.quiz = {
    questions: buildQuestions(pool, 6),
    idx:0, score:0, source:"daily", lessonId:null, locked:false
  };
  document.getElementById("quizTitle").textContent = "تمرین روزانه";
  navigate("quiz");
  renderQuizQuestion();
}
document.getElementById("btnDailyStart").addEventListener("click", startDailyPractice);

function renderQuizQuestion(){
  const q = state.quiz;
  if(q.idx >= q.questions.length){ renderQuizResult(); return; }
  const item = q.questions[q.idx];
  q.locked = false;
  const pct = Math.round((q.idx/q.questions.length)*100);
  document.getElementById("quizProgressFill").style.width = pct+"%";
  document.getElementById("quizProgressLabel").textContent = (q.idx+1)+"/"+q.questions.length;

  const promptLabel = item.direction==="en2fa" ? "معنی این واژه چیست؟" : "این معنی مربوط به کدام واژه است؟";
  const promptWord = item.direction==="en2fa" ? `<span class="en">${item.word.en}</span>` : item.word.fa;

  const optsHtml = item.options.map((opt,i)=>{
    const label = item.direction==="en2fa" ? opt.fa : `<span class="en">${opt.en}</span>`;
    return `<button class="opt" data-i="${i}">${label}</button>`;
  }).join("");

  document.getElementById("quizArea").innerHTML = `
    <div class="quiz-q">
      <div class="prompt-label">${promptLabel}</div>
      <div class="prompt-word">${promptWord}</div>
      <button class="speak-btn en-btn" id="btnQuizSpeak" style="margin-top:10px;">🔊</button>
      <div class="quiz-options">${optsHtml}</div>
    </div>`;

  document.getElementById("btnQuizSpeak").addEventListener("click", ()=>{
    if(item.direction==="en2fa") speak(item.word.en, "en-US");
    else speak(item.word.fa, "fa-IR");
  });

  document.querySelectorAll(".opt").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      if(q.locked) return;
      q.locked = true;
      const chosen = item.options[+btn.dataset.i];
      const correct = chosen.en === item.word.en;
      if(correct) q.score++;
      document.querySelectorAll(".opt").forEach(b=>{
        const optWord = item.options[+b.dataset.i];
        if(optWord.en === item.word.en) b.classList.add("correct");
        else if(b===btn) b.classList.add("wrong");
      });
      if(correct) state.progress.learnedWords[item.word.en] = true;
      saveProgress();
      setTimeout(()=>{ q.idx++; renderQuizQuestion(); }, 850);
    });
  });
}
function renderQuizResult(){
  const q = state.quiz;
  const pct = Math.round((q.score/q.questions.length)*100);
  document.getElementById("quizProgressFill").style.width = "100%";
  document.getElementById("quizProgressLabel").textContent = q.questions.length+"/"+q.questions.length;
  const stars = pct>=90?"⭐⭐⭐":pct>=70?"⭐⭐":pct>=40?"⭐":"";

  if(q.source==="lesson" && q.lessonId){
    state.progress.lessonScores[q.lessonId] = Math.max(state.progress.lessonScores[q.lessonId]||0, pct);
    saveProgress();
  }
  if(q.source==="daily"){
    registerDailyCompletion();
  }

  document.getElementById("quizArea").innerHTML = `
    <div class="quiz-q result-card">
      <div class="stars">${stars}</div>
      <div>امتیاز شما</div>
      <div class="big-score">${pct}٪</div>
      <div style="color:var(--text-mute);font-size:13px;">${q.score} از ${q.questions.length} پاسخ درست</div>
      <button class="btn" id="btnQuizAgain">🔁 تمرین دوباره</button>
      <button class="btn secondary" id="btnQuizHome">🏠 بازگشت به خانه</button>
    </div>`;
  document.getElementById("btnQuizAgain").addEventListener("click", ()=>{
    if(q.source==="lesson"){
      const idx = WORDS.findIndex(l=>l.id===q.lessonId);
      startLessonQuiz(idx);
    } else {
      startDailyPractice();
    }
  });
  document.getElementById("btnQuizHome").addEventListener("click", ()=> navigate("home"));
}

// ---------------- STREAK ----------------
function registerDailyCompletion(){
  const t = todayStr();
  const s = state.progress.streak;
  if(s.lastDate === t){ /* already counted today */ }
  else if(s.lastDate && daysBetween(s.lastDate, t) === 1){
    s.count += 1;
    s.lastDate = t;
  } else {
    s.count = 1;
    s.lastDate = t;
  }
  state.progress.history[t] = true;
  saveProgress();
  toast("🔥 تمرین امروز ثبت شد! رکورد: "+s.count+" روز");
}

// ---------------- DAILY SCREEN ----------------
function renderDailyScreen(){
  const days = ["ی","د","س","چ","پ","ج","ش"];
  const today = new Date();
  let html = "";
  for(let i=6;i>=0;i--){
    const d = new Date(today);
    d.setDate(d.getDate()-i);
    const key = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    const done = !!state.progress.history[key];
    html += `<div style="text-align:center;flex:1;">
      <div style="font-size:11px;color:var(--text-mute);margin-bottom:4px;">${days[d.getDay()]}</div>
      <div style="width:32px;height:32px;border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center;
        background:${done?'var(--gold)':'var(--bg-alt)'};color:${done?'#fff':'var(--text-mute)'};font-size:13px;">
        ${done?'✓':d.getDate()}
      </div>
    </div>`;
  }
  document.getElementById("weekStreakRow").innerHTML = html;
}

// ---------------- DICTIONARY ----------------
function renderDictionary(filter=""){
  const f = filter.trim().toLowerCase();
  const list = ALL_WORDS.filter(w=>
    !f || w.en.toLowerCase().includes(f) || w.fa.includes(f)
  );
  if(list.length===0){
    document.getElementById("wordList").innerHTML = `<div class="empty-state"><span class="ic">🔍</span>واژه‌ای پیدا نشد</div>`;
    return;
  }
  document.getElementById("wordList").innerHTML = list.map(w=>`
    <div class="word-row">
      <div class="info">
        <span class="en">${w.en}</span>
        <span class="fa">${w.fa}</span>
      </div>
      <button class="speak-btn en-btn" onclick="speak('${w.en.replace(/'/g,"")}','en-US')">🔊</button>
    </div>`).join("");
}
document.getElementById("searchInput").addEventListener("input", (e)=> renderDictionary(e.target.value));

// ---------------- PROGRESS SCREEN ----------------
function renderProgressScreen(){
  const pct = overallPercent();
  document.getElementById("progressPercentBig").textContent = pct+"٪";
  document.getElementById("progressBarBig").style.width = pct+"%";
  document.getElementById("lessonProgressList").innerHTML = WORDS.map(l=>{
    const p = lessonProgress(l);
    const score = state.progress.lessonScores[l.id];
    return `<div class="word-row">
      <div class="info">
        <span class="en" style="font-family:inherit;">${l.title} — ${l.theme}</span>
        <span class="fa">${p}٪ آموخته شده ${score!==undefined?(' · بهترین امتیاز آزمون: '+score+'٪'):''}</span>
      </div>
    </div>`;
  }).join("");
}
document.getElementById("btnResetProgress").addEventListener("click", ()=>{
  if(confirm("آیا مطمئن هستید؟ تمام پیشرفت شما پاک خواهد شد.")){
    localStorage.removeItem(STORAGE_KEY);
    state.progress = loadProgress();
    toast("پیشرفت پاک شد");
    navigate("home");
  }
});
document.getElementById("btnStreakTop").addEventListener("click", ()=> navigate("progress"));

// ---------------- INIT ----------------
renderHome();

// Register service worker for offline support
if("serviceWorker" in navigator){
  window.addEventListener("load", ()=>{
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  });
}