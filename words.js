// English 504 Master — Complete 504 Words (42 Lessons)
// Based on the book "504 Absolutely Essential Words" (6th Edition)

const WORDS = [
  // ==================== LESSON 1 ====================
  {
    id: 1,
    title: "درس ۱",
    theme: "شروع قدرتمند",
    words: [
      { en: "abandon", pos: "v", fa: "رها کردن، ترک کردن", exEn: "The sailors had to abandon the sinking ship.", exFa: "ملوان‌ها مجبور شدند کشتی در حال غرق شدن را رها کنند." },
      { en: "ability", pos: "n", fa: "توانایی", exEn: "She has the ability to speak five languages.", exFa: "او توانایی صحبت به پنج زبان را دارد." },
      { en: "absurd", pos: "adj", fa: "مسخره، پوچ", exEn: "It seemed absurd to walk ten miles in the rain.", exFa: "به نظر مسخره می‌رسید که ده مایل زیر باران راه بروی." },
      { en: "abundant", pos: "adj", fa: "فراوان", exEn: "Fresh fruit is abundant in this region.", exFa: "میوه‌ی تازه در این منطقه فراوان است." },
      { en: "accompany", pos: "v", fa: "همراهی کردن", exEn: "My brother will accompany me to the airport.", exFa: "برادرم مرا تا فرودگاه همراهی خواهد کرد." },
      { en: "accurate", pos: "adj", fa: "دقیق", exEn: "The report gave an accurate description of the accident.", exFa: "گزارش توصیف دقیقی از حادثه ارائه داد." },
      { en: "achieve", pos: "v", fa: "به دست آوردن، موفق شدن", exEn: "She worked hard to achieve her goals.", exFa: "او سخت تلاش کرد تا به اهدافش برسد." },
      { en: "acknowledge", pos: "v", fa: "تصدیق کردن، اذعان کردن", exEn: "He acknowledged his mistake in front of everyone.", exFa: "او اشتباهش را جلوی همه تصدیق کرد." },
      { en: "adapt", pos: "v", fa: "سازگار شدن", exEn: "Animals must adapt to survive in the wild.", exFa: "حیوانات باید برای بقا در طبیعت سازگار شوند." },
      { en: "adequate", pos: "adj", fa: "کافی", exEn: "We didn't have adequate time to finish the project.", exFa: "ما زمان کافی برای اتمام پروژه نداشتیم." },
      { en: "admire", pos: "v", fa: "تحسین کردن", exEn: "I admire her courage and honesty.", exFa: "من شجاعت و صداقت او را تحسین می‌کنم." },
      { en: "advantage", pos: "n", fa: "مزیت", exEn: "Speaking two languages gives her an advantage at work.", exFa: "صحبت به دو زبان برای او در محل کار یک مزیت است." }
    ]
  },
  // ==================== LESSON 2 ====================
  {
    id: 2,
    title: "درس ۲",
    theme: "ماجراجویی و نگرش",
    words: [
      { en: "adventure", pos: "n", fa: "ماجراجویی", exEn: "Climbing the mountain was a thrilling adventure.", exFa: "صعود از کوه یک ماجراجویی هیجان‌انگیز بود." },
      { en: "advice", pos: "n", fa: "نصیحت", exEn: "My teacher gave me useful advice about studying.", exFa: "معلمم نصیحت مفیدی درباره‌ی درس خواندن به من داد." },
      { en: "afford", pos: "v", fa: "از عهده‌ی مالی برآمدن", exEn: "We can't afford a new car this year.", exFa: "ما نمی‌توانیم امسال از عهده‌ی خرید ماشین جدید برآییم." },
      { en: "aggressive", pos: "adj", fa: "پرخاشگر", exEn: "The dog became aggressive when strangers approached.", exFa: "سگ وقتی غریبه‌ها نزدیک شدند پرخاشگر شد." },
      { en: "alter", pos: "v", fa: "تغییر دادن", exEn: "They had to alter their plans because of the storm.", exFa: "آن‌ها به دلیل طوفان مجبور شدند برنامه‌هایشان را تغییر دهند." },
      { en: "ambiguous", pos: "adj", fa: "مبهم", exEn: "His answer was ambiguous and confused everyone.", exFa: "پاسخ او مبهم بود و همه را گیج کرد." },
      { en: "ambitious", pos: "adj", fa: "جاه‌طلب", exEn: "She is an ambitious young engineer.", exFa: "او یک مهندس جوان و جاه‌طلب است." },
      { en: "ancient", pos: "adj", fa: "باستانی", exEn: "They discovered an ancient temple in the jungle.", exFa: "آن‌ها یک معبد باستانی در جنگل کشف کردند." },
      { en: "anxious", pos: "adj", fa: "نگران، مضطرب", exEn: "He felt anxious before the job interview.", exFa: "او قبل از مصاحبه‌ی شغلی مضطرب بود." },
      { en: "apparent", pos: "adj", fa: "آشکار، ظاهری", exEn: "It became apparent that he was lying.", exFa: "آشکار شد که او دروغ می‌گفت." },
      { en: "appreciate", pos: "v", fa: "قدردانی کردن", exEn: "I really appreciate your help today.", exFa: "من واقعاً از کمک شما امروز قدردانی می‌کنم." },
      { en: "approach", pos: "n/v", fa: "رویکرد، نزدیک شدن", exEn: "The teacher used a new approach to teaching grammar.", exFa: "معلم رویکرد جدیدی برای آموزش گرامر استفاده کرد." }
    ]
  },
  // ==================== LESSON 3 ====================
  {
    id: 3,
    title: "درس ۳",
    theme: "رفتار و تصمیم",
    words: [
      { en: "appropriate", pos: "adj", fa: "مناسب", exEn: "Please wear appropriate clothes for the interview.", exFa: "لطفاً برای مصاحبه لباس مناسب بپوشید." },
      { en: "approve", pos: "v", fa: "تأیید کردن", exEn: "The manager approved our vacation request.", exFa: "مدیر درخواست مرخصی ما را تأیید کرد." },
      { en: "arrogant", pos: "adj", fa: "مغرور", exEn: "Nobody likes his arrogant behavior.", exFa: "هیچ‌کس رفتار مغرورانه‌ی او را دوست ندارد." },
      { en: "artificial", pos: "adj", fa: "مصنوعی", exEn: "This drink contains artificial flavors.", exFa: "این نوشیدنی حاوی طعم‌دهنده‌های مصنوعی است." },
      { en: "assume", pos: "v", fa: "فرض کردن", exEn: "Don't assume he is guilty without proof.", exFa: "بدون مدرک فرض نکن که او مقصر است." },
      { en: "assure", pos: "v", fa: "اطمینان دادن", exEn: "I assure you everything will be fine.", exFa: "به شما اطمینان می‌دهم همه چیز خوب خواهد شد." },
      { en: "attempt", pos: "v/n", fa: "تلاش کردن", exEn: "She made another attempt to pass the exam.", exFa: "او تلاش دیگری برای قبولی در امتحان کرد." },
      { en: "attitude", pos: "n", fa: "نگرش", exEn: "His positive attitude helps him succeed.", exFa: "نگرش مثبت او به موفقیتش کمک می‌کند." },
      { en: "attract", pos: "v", fa: "جذب کردن", exEn: "Bright colors attract bees to flowers.", exFa: "رنگ‌های روشن زنبورها را به گل‌ها جذب می‌کنند." },
      { en: "authentic", pos: "adj", fa: "اصیل، واقعی", exEn: "This restaurant serves authentic Italian food.", exFa: "این رستوران غذای اصیل ایتالیایی سرو می‌کند." },
      { en: "available", pos: "adj", fa: "در دسترس", exEn: "The manager is not available right now.", exFa: "مدیر در حال حاضر در دسترس نیست." },
      { en: "aware", pos: "adj", fa: "آگاه", exEn: "Are you aware of the new rules?", exFa: "آیا از قوانین جدید آگاه هستید؟" }
    ]
  },
  // ==================== LESSON 4 ====================
  {
    id: 4,
    title: "درس ۴",
    theme: "مهارت و اعتماد",
    words: [
      { en: "awkward", pos: "adj", fa: "ناجور، بی‌دست‌وپا", exEn: "There was an awkward silence after his joke.", exFa: "بعد از شوخی او یک سکوت ناجور برقرار شد." },
      { en: "benefit", pos: "n/v", fa: "سود، فایده", exEn: "Regular exercise benefits your health.", exFa: "ورزش منظم به سلامتی شما سود می‌رساند." },
      { en: "bold", pos: "adj", fa: "جسور", exEn: "It was a bold decision to start her own business.", exFa: "تصمیم جسورانه‌ای بود که کسب‌وکار خودش را راه بیندازد." },
      { en: "brief", pos: "adj", fa: "مختصر", exEn: "He gave a brief summary of the meeting.", exFa: "او خلاصه‌ی مختصری از جلسه ارائه داد." },
      { en: "brilliant", pos: "adj", fa: "درخشان، باهوش", exEn: "She had a brilliant idea for the project.", exFa: "او ایده‌ی درخشانی برای پروژه داشت." },
      { en: "capable", pos: "adj", fa: "توانا", exEn: "He is capable of solving difficult problems.", exFa: "او توانایی حل مسائل دشوار را دارد." },
      { en: "capacity", pos: "n", fa: "ظرفیت", exEn: "The stadium has a capacity of fifty thousand people.", exFa: "این استادیوم ظرفیت پنجاه هزار نفر را دارد." },
      { en: "casual", pos: "adj", fa: "غیررسمی", exEn: "You can wear casual clothes to the party.", exFa: "می‌توانید لباس غیررسمی به مهمانی بپوشید." },
      { en: "category", pos: "n", fa: "دسته، رده", exEn: "Books are organized into different categories.", exFa: "کتاب‌ها در دسته‌های مختلف سازمان‌دهی شده‌اند." },
      { en: "cautious", pos: "adj", fa: "محتاط", exEn: "Be cautious when driving in the snow.", exFa: "هنگام رانندگی در برف محتاط باشید." },
      { en: "challenge", pos: "n", fa: "چالش", exEn: "Learning a new language is a big challenge.", exFa: "یادگیری یک زبان جدید چالش بزرگی است." },
      { en: "characteristic", pos: "n", fa: "ویژگی", exEn: "Patience is one of her best characteristics.", exFa: "صبر یکی از بهترین ویژگی‌های اوست." }
    ]
  },
  // ==================== LESSON 5 ====================
  {
    id: 5,
    title: "درس ۵",
    theme: "چالش و بحران",
    words: [
      { en: "chaos", pos: "n", fa: "آشوب", exEn: "The power outage caused chaos in the city.", exFa: "قطع برق باعث آشوب در شهر شد." },
      { en: "circumstance", pos: "n", fa: "شرایط، وضعیت", exEn: "Under normal circumstances, we would agree.", exFa: "در شرایط عادی، ما موافقت می‌کردیم." },
      { en: "claim", pos: "v", fa: "ادعا کردن", exEn: "She claims that she saw the accident happen.", exFa: "او ادعا می‌کند که شاهد وقوع حادثه بوده است." },
      { en: "clarify", pos: "v", fa: "روشن کردن", exEn: "Could you clarify what you mean?", exFa: "می‌توانید منظورتان را روشن کنید؟" },
      { en: "collapse", pos: "v", fa: "فروپاشیدن، سقوط کردن", exEn: "The old bridge collapsed during the flood.", exFa: "پل قدیمی در سیل فروپاشید." },
      { en: "combine", pos: "v", fa: "ترکیب کردن", exEn: "Combine the flour and sugar in a bowl.", exFa: "آرد و شکر را در یک کاسه ترکیب کنید." },
      { en: "comfort", pos: "n", fa: "آسایش، آرامش", exEn: "Her words gave him great comfort.", exFa: "حرف‌های او آرامش زیادی به او داد." },
      { en: "commit", pos: "v", fa: "متعهد شدن", exEn: "He committed himself to finishing the marathon.", exFa: "او خودش را متعهد کرد که ماراتن را تمام کند." },
      { en: "compassion", pos: "n", fa: "دلسوزی، شفقت", exEn: "The nurse treated every patient with compassion.", exFa: "پرستار با هر بیمار با دلسوزی رفتار می‌کرد." },
      { en: "compensate", pos: "v", fa: "جبران کردن", exEn: "The company compensated us for the delay.", exFa: "شرکت به‌خاطر تأخیر به ما جبران خسارت کرد." },
      { en: "competent", pos: "adj", fa: "شایسته، لایق", exEn: "She is a competent and reliable manager.", exFa: "او مدیری شایسته و قابل‌اعتماد است." },
      { en: "complex", pos: "adj", fa: "پیچیده", exEn: "The math problem was too complex for me.", exFa: "مسئله‌ی ریاضی برای من خیلی پیچیده بود." }
    ]
  },
  // ==================== LESSON 6 ====================
  {
    id: 6,
    title: "درس ۶",
    theme: "تمرکز و درگیری",
    words: [
      { en: "comprehensive", pos: "adj", fa: "جامع", exEn: "The book gives a comprehensive overview of history.", exFa: "کتاب یک مرور جامع از تاریخ ارائه می‌دهد." },
      { en: "conceal", pos: "v", fa: "پنهان کردن", exEn: "She tried to conceal her disappointment.", exFa: "او سعی کرد ناامیدی‌اش را پنهان کند." },
      { en: "concentrate", pos: "v", fa: "تمرکز کردن", exEn: "It's hard to concentrate with all this noise.", exFa: "با این همه سروصدا تمرکز کردن سخت است." },
      { en: "concern", pos: "n", fa: "نگرانی", exEn: "Pollution is a growing concern for the city.", exFa: "آلودگی نگرانی رو به رشدی برای شهر است." },
      { en: "conclude", pos: "v", fa: "نتیجه‌گیری کردن", exEn: "The judge concluded that the man was innocent.", exFa: "قاضی نتیجه گرفت که آن مرد بی‌گناه است." },
      { en: "confident", pos: "adj", fa: "مطمئن", exEn: "She felt confident about the exam results.", exFa: "او نسبت به نتایج امتحان مطمئن بود." },
      { en: "conflict", pos: "n", fa: "تعارض، درگیری", exEn: "There was a conflict between the two teams.", exFa: "بین دو تیم تعارضی وجود داشت." },
      { en: "confront", pos: "v", fa: "رویارویی کردن", exEn: "He decided to confront his fears.", exFa: "او تصمیم گرفت با ترس‌هایش روبه‌رو شود." },
      { en: "confuse", pos: "v", fa: "گیج کردن", exEn: "The instructions confused most of the students.", exFa: "دستورالعمل‌ها بیشتر دانش‌آموزان را گیج کرد." },
      { en: "consequence", pos: "n", fa: "پیامد", exEn: "Every action has a consequence.", exFa: "هر عملی پیامدی دارد." },
      { en: "considerable", pos: "adj", fa: "قابل‌توجه", exEn: "They spent a considerable amount of money.", exFa: "آن‌ها مقدار قابل‌توجهی پول خرج کردند." },
      { en: "consist", pos: "v", fa: "تشکیل شدن از", exEn: "The team consists of ten members.", exFa: "تیم از ده عضو تشکیل شده است." }
    ]
  },
  // ==================== LESSON 7 ====================
  {
    id: 7,
    title: "درس ۷",
    theme: "همکاری و شجاعت",
    words: [
      { en: "constant", pos: "adj", fa: "ثابت، پیوسته", exEn: "The constant noise from the street kept me awake.", exFa: "سروصدای پیوسته‌ی خیابان مرا بیدار نگه داشت." },
      { en: "contribute", pos: "v", fa: "کمک کردن، سهیم شدن", exEn: "Everyone should contribute to protecting the environment.", exFa: "همه باید به حفاظت از محیط زیست کمک کنند." },
      { en: "convenient", pos: "adj", fa: "مناسب، راحت", exEn: "This location is very convenient for shopping.", exFa: "این مکان برای خرید بسیار مناسب است." },
      { en: "convince", pos: "v", fa: "متقاعد کردن", exEn: "It took time to convince her to join us.", exFa: "متقاعد کردن او برای پیوستن به ما زمان برد." },
      { en: "cooperate", pos: "v", fa: "همکاری کردن", exEn: "The two countries agreed to cooperate on the project.", exFa: "دو کشور موافقت کردند که در این پروژه همکاری کنند." },
      { en: "courage", pos: "n", fa: "شجاعت", exEn: "It takes courage to admit your mistakes.", exFa: "پذیرفتن اشتباهات نیاز به شجاعت دارد." },
      { en: "crucial", pos: "adj", fa: "حیاتی", exEn: "Sleep is crucial for good health.", exFa: "خواب برای سلامتی حیاتی است." },
      { en: "curious", pos: "adj", fa: "کنجکاو", exEn: "Children are naturally curious about the world.", exFa: "کودکان به‌طور طبیعی درباره‌ی دنیا کنجکاو هستند." },
      { en: "decline", pos: "v", fa: "کاهش یافتن، رد کردن", exEn: "Sales declined sharply last month.", exFa: "فروش ماه گذشته به‌شدت کاهش یافت." },
      { en: "dedicate", pos: "v", fa: "وقف کردن", exEn: "She dedicated her life to teaching.", exFa: "او زندگی‌اش را وقف تدریس کرد." },
      { en: "defeat", pos: "v", fa: "شکست دادن", exEn: "Our team defeated the champions last night.", exFa: "تیم ما دیشب قهرمانان را شکست داد." },
      { en: "define", pos: "v", fa: "تعریف کردن", exEn: "Can you define this word for me?", exFa: "می‌توانید این کلمه را برای من تعریف کنید؟" }
    ]
  },
  // ==================== LESSON 8 ====================
  {
    id: 8,
    title: "درس ۸",
    theme: "وابستگی و تصمیم‌گیری",
    words: [
      { en: "delicate", pos: "adj", fa: "ظریف", exEn: "Handle the glass vase with delicate care.", exFa: "با گلدان شیشه‌ای با ظرافت رفتار کنید." },
      { en: "demonstrate", pos: "v", fa: "نشان دادن", exEn: "The teacher demonstrated how to solve the equation.", exFa: "معلم نشان داد که چطور معادله را حل کند." },
      { en: "deny", pos: "v", fa: "انکار کردن", exEn: "He denied breaking the window.", exFa: "او انکار کرد که پنجره را شکسته است." },
      { en: "dependent", pos: "adj", fa: "وابسته", exEn: "Children are dependent on their parents.", exFa: "کودکان به والدینشان وابسته هستند." },
      { en: "desperate", pos: "adj", fa: "ناامید", exEn: "She was desperate to find a job.", exFa: "او برای پیدا کردن شغل ناامیدانه تلاش می‌کرد." },
      { en: "determine", pos: "v", fa: "تعیین کردن", exEn: "The test will determine your final grade.", exFa: "این آزمون نمره‌ی نهایی شما را تعیین خواهد کرد." },
      { en: "devote", pos: "v", fa: "وقف کردن", exEn: "He devotes his weekends to volunteer work.", exFa: "او آخر هفته‌هایش را وقف کارهای داوطلبانه می‌کند." },
      { en: "diligent", pos: "adj", fa: "کوشا، پرتلاش", exEn: "She is a diligent student who never misses class.", exFa: "او دانش‌آموزی کوشا است که هرگز کلاس را از دست نمی‌دهد." },
      { en: "dilemma", pos: "n", fa: "دوراهی، معضل", exEn: "He faced a difficult dilemma at work.", exFa: "او در محل کار با یک دوراهی دشوار روبه‌رو شد." },
      { en: "disappoint", pos: "v", fa: "ناامید کردن", exEn: "The movie disappointed most of the critics.", exFa: "فیلم بیشتر منتقدان را ناامید کرد." },
      { en: "discipline", pos: "n", fa: "نظم، انضباط", exEn: "Discipline is important for success in sports.", exFa: "نظم و انضباط برای موفقیت در ورزش مهم است." },
      { en: "discourage", pos: "v", fa: "دلسرد کردن", exEn: "Don't let one failure discourage you.", exFa: "نگذار یک شکست تو را دلسرد کند." }
    ]
  },
  // ==================== LESSON 9 ====================
  {
    id: 9,
    title: "درس ۹",
    theme: "تنوع و برتری",
    words: [
      { en: "distinct", pos: "adj", fa: "متمایز", exEn: "The two cities have very distinct cultures.", exFa: "این دو شهر فرهنگ‌های کاملاً متمایزی دارند." },
      { en: "diverse", pos: "adj", fa: "متنوع", exEn: "The city has a diverse population.", exFa: "این شهر جمعیت متنوعی دارد." },
      { en: "dominant", pos: "adj", fa: "مسلط", exEn: "English is the dominant language in business.", exFa: "انگلیسی زبان مسلط در تجارت است." },
      { en: "doubt", pos: "n", fa: "شک", exEn: "I have no doubt that she will succeed.", exFa: "هیچ شکی ندارم که او موفق خواهد شد." },
      { en: "eager", pos: "adj", fa: "مشتاق", exEn: "The students were eager to start the trip.", exFa: "دانش‌آموزان مشتاق شروع سفر بودند." },
      { en: "efficient", pos: "adj", fa: "کارآمد", exEn: "This new machine is more efficient than the old one.", exFa: "این ماشین جدید کارآمدتر از ماشین قدیمی است." },
      { en: "elaborate", pos: "v", fa: "مفصل توضیح دادن", exEn: "Could you elaborate on your plan?", exFa: "می‌توانید درباره‌ی برنامه‌تان بیشتر توضیح دهید؟" },
      { en: "element", pos: "n", fa: "عنصر", exEn: "Trust is a key element of any relationship.", exFa: "اعتماد یک عنصر کلیدی در هر رابطه‌ای است." },
      { en: "eliminate", pos: "v", fa: "حذف کردن", exEn: "We need to eliminate unnecessary expenses.", exFa: "باید هزینه‌های غیرضروری را حذف کنیم." },
      { en: "embrace", pos: "v", fa: "در آغوش گرفتن، پذیرفتن", exEn: "She embraced the new challenge with excitement.", exFa: "او چالش جدید را با هیجان پذیرفت." },
      { en: "emerge", pos: "v", fa: "پدیدار شدن", exEn: "A new leader emerged after the election.", exFa: "یک رهبر جدید بعد از انتخابات پدیدار شد." },
      { en: "emphasize", pos: "v", fa: "تأکید کردن", exEn: "The doctor emphasized the importance of sleep.", exFa: "دکتر بر اهمیت خواب تأکید کرد." }
    ]
  },
  // ==================== LESSON 10 ====================
  {
    id: 10,
    title: "درس ۱۰",
    theme: "پایداری و تأثیر",
    words: [
      { en: "encounter", pos: "v", fa: "مواجه شدن", exEn: "We encountered many problems during the trip.", exFa: "ما در طول سفر با مشکلات زیادی مواجه شدیم." },
      { en: "endure", pos: "v", fa: "تحمل کردن", exEn: "The old building has endured many storms.", exFa: "این ساختمان قدیمی طوفان‌های زیادی را تحمل کرده است." },
      { en: "enormous", pos: "adj", fa: "عظیم", exEn: "They live in an enormous house near the lake.", exFa: "آن‌ها در خانه‌ای عظیم نزدیک دریاچه زندگی می‌کنند." },
      { en: "ensure", pos: "v", fa: "اطمینان حاصل کردن", exEn: "Please ensure the door is locked before leaving.", exFa: "لطفاً پیش از رفتن اطمینان حاصل کنید که در قفل است." },
      { en: "enthusiastic", pos: "adj", fa: "مشتاق، پرشور", exEn: "The fans were enthusiastic about the new season.", exFa: "طرفداران درباره‌ی فصل جدید پرشور بودند." },
      { en: "environment", pos: "n", fa: "محیط", exEn: "We must protect the environment for future generations.", exFa: "ما باید محیط زیست را برای نسل‌های آینده حفظ کنیم." },
      { en: "essential", pos: "adj", fa: "ضروری", exEn: "Water is essential for life.", exFa: "آب برای زندگی ضروری است." },
      { en: "establish", pos: "v", fa: "تأسیس کردن", exEn: "The company was established in 1990.", exFa: "این شرکت در سال ۱۹۹۰ تأسیس شد." },
      { en: "estimate", pos: "v", fa: "تخمین زدن", exEn: "Experts estimate the cost at one million dollars.", exFa: "کارشناسان هزینه را یک میلیون دلار تخمین می‌زنند." },
      { en: "evaluate", pos: "v", fa: "ارزیابی کردن", exEn: "Teachers evaluate students at the end of each term.", exFa: "معلمان در پایان هر ترم دانش‌آموزان را ارزیابی می‌کنند." },
      { en: "evident", pos: "adj", fa: "آشکار", exEn: "It was evident that she was tired.", exFa: "آشکار بود که او خسته است." },
      { en: "evolve", pos: "v", fa: "تکامل یافتن", exEn: "Language evolves over time.", exFa: "زبان در طول زمان تکامل می‌یابد." }
    ]
  },
  // ==================== LESSON 11 ====================
  {
    id: 11,
    title: "درس ۱۱",
    theme: "توسعه و افشا",
    words: [
      { en: "exaggerate", pos: "v", fa: "اغراق کردن", exEn: "Don't exaggerate the size of the problem.", exFa: "اندازه‌ی مشکل را اغراق نکن." },
      { en: "exceed", pos: "v", fa: "فراتر رفتن از", exEn: "The results exceeded our expectations.", exFa: "نتایج از انتظارات ما فراتر رفت." },
      { en: "exclude", pos: "v", fa: "مستثنی کردن", exEn: "This price excludes tax and delivery.", exFa: "این قیمت مالیات و هزینه‌ی ارسال را شامل نمی‌شود." },
      { en: "exhaust", pos: "v", fa: "خسته کردن", exEn: "The long hike exhausted all of us.", exFa: "پیاده‌روی طولانی همه‌ی ما را خسته کرد." },
      { en: "expand", pos: "v", fa: "گسترش دادن", exEn: "The company plans to expand into new markets.", exFa: "شرکت قصد دارد به بازارهای جدید گسترش یابد." },
      { en: "expose", pos: "v", fa: "در معرض قرار دادن، افشا کردن", exEn: "The report exposed corruption in the government.", exFa: "گزارش فساد در دولت را افشا کرد." },
      { en: "extreme", pos: "adj", fa: "افراطی، شدید", exEn: "They live in extreme poverty.", exFa: "آن‌ها در فقر شدید زندگی می‌کنند." },
      { en: "fabulous", pos: "adj", fa: "شگفت‌انگیز", exEn: "We had a fabulous time at the beach.", exFa: "ما وقت فوق‌العاده‌ای در ساحل داشتیم." },
      { en: "fascinate", pos: "v", fa: "مجذوب کردن", exEn: "The story fascinated all the children.", exFa: "داستان همه‌ی بچه‌ها را مجذوب کرد." },
      { en: "fatigue", pos: "n", fa: "خستگی", exEn: "She felt fatigue after the long flight.", exFa: "او بعد از پرواز طولانی احساس خستگی کرد." },
      { en: "flexible", pos: "adj", fa: "انعطاف‌پذیر", exEn: "My work schedule is very flexible.", exFa: "برنامه‌ی کاری من بسیار انعطاف‌پذیر است." },
      { en: "fluent", pos: "adj", fa: "مسلط، روان", exEn: "He is fluent in three languages.", exFa: "او به سه زبان مسلط و روان صحبت می‌کند." }
    ]
  },
  // ==================== LESSON 12 ====================
  {
    id: 12,
    title: "درس ۱۲",
    theme: "شکنندگی و سپاسگزاری",
    words: [
      { en: "fortunate", pos: "adj", fa: "خوش‌شانس", exEn: "We were fortunate to find a great apartment.", exFa: "ما خوش‌شانس بودیم که یک آپارتمان عالی پیدا کردیم." },
      { en: "fragile", pos: "adj", fa: "شکننده", exEn: "Please handle these glasses carefully; they are fragile.", exFa: "لطفاً با این لیوان‌ها با احتیاط رفتار کنید؛ آن‌ها شکننده هستند." },
      { en: "frequent", pos: "adj", fa: "مکرر", exEn: "Heavy traffic is a frequent problem in this city.", exFa: "ترافیک سنگین مشکلی مکرر در این شهر است." },
      { en: "frustrate", pos: "v", fa: "کلافه کردن", exEn: "The slow internet frustrates everyone in the office.", exFa: "اینترنت کند همه را در دفتر کلافه می‌کند." },
      { en: "fundamental", pos: "adj", fa: "اساسی", exEn: "Honesty is a fundamental value in our family.", exFa: "صداقت یک ارزش اساسی در خانواده‌ی ماست." },
      { en: "generous", pos: "adj", fa: "سخاوتمند", exEn: "He is generous with his time and money.", exFa: "او در وقت و پولش سخاوتمند است." },
      { en: "genuine", pos: "adj", fa: "واقعی، اصیل", exEn: "She gave a genuine smile of thanks.", exFa: "او یک لبخند واقعی از روی تشکر زد." },
      { en: "gradual", pos: "adj", fa: "تدریجی", exEn: "There has been a gradual increase in prices.", exFa: "افزایش تدریجی در قیمت‌ها وجود داشته است." },
      { en: "grateful", pos: "adj", fa: "سپاسگزار", exEn: "I am grateful for your support.", exFa: "من از حمایت شما سپاسگزارم." },
      { en: "hesitate", pos: "v", fa: "تردید کردن", exEn: "Don't hesitate to call me if you need help.", exFa: "اگر کمک لازم داشتی، تردید نکن که به من زنگ بزنی." },
      { en: "hostile", pos: "adj", fa: "خصمانه", exEn: "The crowd became hostile toward the referee.", exFa: "جمعیت نسبت به داور خصمانه شدند." },
      { en: "humble", pos: "adj", fa: "فروتن", exEn: "Despite his success, he remains humble.", exFa: "با وجود موفقیتش، او همچنان فروتن است." }
    ]
  },
  // ==================== LESSON 13 ====================
  {
    id: 13,
    title: "درس ۱۳",
    theme: "تأثیر و باور",
    words: [
      { en: "identical", pos: "adj", fa: "یکسان", exEn: "The twins wore identical dresses.", exFa: "دوقلوها لباس‌های یکسان پوشیده بودند." },
      { en: "ignore", pos: "v", fa: "نادیده گرفتن", exEn: "It's rude to ignore someone's question.", exFa: "نادیده گرفتن سؤال کسی بی‌ادبانه است." },
      { en: "illustrate", pos: "v", fa: "نشان دادن، تصویر کردن", exEn: "The chart illustrates the company's growth.", exFa: "نمودار رشد شرکت را نشان می‌دهد." },
      { en: "imaginary", pos: "adj", fa: "خیالی", exEn: "Children often have imaginary friends.", exFa: "کودکان اغلب دوستان خیالی دارند." },
      { en: "immense", pos: "adj", fa: "عظیم", exEn: "The desert covers an immense area.", exFa: "این کویر مساحت عظیمی را پوشش می‌دهد." },
      { en: "impact", pos: "n", fa: "تأثیر", exEn: "Social media has a big impact on teenagers.", exFa: "شبکه‌های اجتماعی تأثیر زیادی روی نوجوانان دارند." },
      { en: "imply", pos: "v", fa: "دلالت داشتن بر", exEn: "Her silence seemed to imply agreement.", exFa: "سکوت او به نظر می‌رسید دلالت بر موافقت داشته باشد." },
      { en: "impose", pos: "v", fa: "تحمیل کردن", exEn: "The government imposed new taxes on fuel.", exFa: "دولت مالیات‌های جدیدی بر سوخت تحمیل کرد." },
      { en: "impress", pos: "v", fa: "تحت‌تأثیر قرار دادن", exEn: "Her performance impressed the judges.", exFa: "اجرای او داوران را تحت‌تأثیر قرار داد." },
      { en: "inevitable", pos: "adj", fa: "اجتناب‌ناپذیر", exEn: "Change is inevitable in life.", exFa: "تغییر در زندگی اجتناب‌ناپذیر است." },
      { en: "influence", pos: "v/n", fa: "تأثیرگذاشتن، نفوذ", exEn: "Parents strongly influence their children's habits.", exFa: "والدین به‌شدت روی عادات فرزندانشان تأثیر می‌گذارند." },
      { en: "initial", pos: "adj", fa: "اولیه", exEn: "My initial reaction was surprise.", exFa: "واکنش اولیه‌ی من تعجب بود." }
    ]
  },
  // ==================== LESSON 14 ====================
  {
    id: 14,
    title: "درس ۱۴",
    theme: "الهام و تفسیر",
    words: [
      { en: "innovative", pos: "adj", fa: "نوآورانه", exEn: "The company is known for its innovative products.", exFa: "این شرکت به‌خاطر محصولات نوآورانه‌اش شناخته شده است." },
      { en: "insist", pos: "v", fa: "اصرار کردن", exEn: "She insisted on paying for dinner.", exFa: "او اصرار کرد که هزینه‌ی شام را بپردازد." },
      { en: "inspire", pos: "v", fa: "الهام بخشیدن", exEn: "Her story inspired thousands of people.", exFa: "داستان او هزاران نفر را الهام بخشید." },
      { en: "intense", pos: "adj", fa: "شدید", exEn: "The competition between the two teams was intense.", exFa: "رقابت بین دو تیم شدید بود." },
      { en: "interpret", pos: "v", fa: "تفسیر کردن", exEn: "How do you interpret this poem?", exFa: "این شعر را چطور تفسیر می‌کنی؟" },
      { en: "investigate", pos: "v", fa: "بررسی کردن", exEn: "Police are investigating the cause of the fire.", exFa: "پلیس در حال بررسی علت آتش‌سوزی است." },
      { en: "isolate", pos: "v", fa: "جدا کردن", exEn: "The village was isolated by the heavy snow.", exFa: "روستا به‌دلیل برف سنگین جدا افتاده بود." },
      { en: "justify", pos: "v", fa: "توجیه کردن", exEn: "He couldn't justify the high price of the product.", exFa: "او نتوانست قیمت بالای محصول را توجیه کند." },
      { en: "keen", pos: "adj", fa: "مشتاق", exEn: "She is keen to learn new languages.", exFa: "او مشتاق یادگیری زبان‌های جدید است." },
      { en: "lenient", pos: "adj", fa: "بخشنده، آسان‌گیر", exEn: "The judge was lenient with the young offender.", exFa: "قاضی نسبت به مجرم جوان ملایم بود." },
      { en: "legitimate", pos: "adj", fa: "قانونی، مشروع", exEn: "He has a legitimate reason for being late.", exFa: "او دلیل قانونی برای دیر آمدنش دارد." },
      { en: "likely", pos: "adj", fa: "محتمل", exEn: "It's likely to rain tomorrow.", exFa: "احتمالاً فردا باران می‌بارد." }
    ]
  },
  // ==================== LESSON 15 ====================
  {
    id: 15,
    title: "درس ۱۵",
    theme: "منطق و بلوغ",
    words: [
      { en: "logical", pos: "adj", fa: "منطقی", exEn: "Her argument was clear and logical.", exFa: "استدلال او واضح و منطقی بود." },
      { en: "maintain", pos: "v", fa: "حفظ کردن", exEn: "It's important to maintain a healthy diet.", exFa: "حفظ یک رژیم غذایی سالم مهم است." },
      { en: "manipulate", pos: "v", fa: "دستکاری کردن", exEn: "He tried to manipulate the results of the survey.", exFa: "او سعی کرد نتایج نظرسنجی را دستکاری کند." },
      { en: "mature", pos: "adj", fa: "بالغ", exEn: "She has become more mature since starting college.", exFa: "او از زمان شروع دانشگاه بالغ‌تر شده است." },
      { en: "maximum", pos: "n/adj", fa: "حداکثر", exEn: "The elevator has a maximum capacity of ten people.", exFa: "آسانسور حداکثر ظرفیت ده نفر را دارد." },
      { en: "mention", pos: "v", fa: "اشاره کردن", exEn: "She didn't mention the meeting to me.", exFa: "او درباره‌ی جلسه چیزی به من نگفت." },
      { en: "minimal", pos: "adj", fa: "حداقلی", exEn: "The damage from the storm was minimal.", exFa: "خسارت ناشی از طوفان حداقلی بود." },
      { en: "modest", pos: "adj", fa: "متواضع", exEn: "Despite his wealth, he lives a modest life.", exFa: "با وجود ثروتش، او زندگی متواضعانه‌ای دارد." },
      { en: "motivate", pos: "v", fa: "انگیزه دادن", exEn: "Good teachers motivate their students to learn.", exFa: "معلمان خوب دانش‌آموزانشان را برای یادگیری تشویق و ترغیب می‌کنند." },
      { en: "mutual", pos: "adj", fa: "متقابل", exEn: "They have mutual respect for each other.", exFa: "آن‌ها احترام متقابلی برای یکدیگر قائل هستند." },
      { en: "naive", pos: "adj", fa: "ساده‌لوح", exEn: "It was naive of him to trust a stranger.", exFa: "ساده‌لوحانه بود که او به یک غریبه اعتماد کرد." },
      { en: "neglect", pos: "v", fa: "نادیده گرفتن، غفلت کردن", exEn: "Don't neglect your health while working hard.", exFa: "در حین کار سخت، سلامتی‌ات را نادیده نگیر." }
    ]
  },
  // ==================== LESSON 16 ====================
  {
    id: 16,
    title: "درس ۱۶",
    theme: "شکست و پشتکار",
    words: [
      { en: "obstacle", pos: "n", fa: "مانع، مشکل", exEn: "Lack of money was a major obstacle.", exFa: "کمبود پول یک مانع بزرگ بود." },
      { en: "occupy", pos: "v", fa: "اشغال کردن، مشغول بودن", exEn: "She occupies herself with reading.", exFa: "او خودش را با خواندن مشغول می‌کند." },
      { en: "oppose", pos: "v", fa: "مخالفت کردن", exEn: "Many people oppose the new law.", exFa: "بسیاری از مردم با قانون جدید مخالف هستند." },
      { en: "optimistic", pos: "adj", fa: "خوش‌بین", exEn: "He remains optimistic about the future.", exFa: "او نسبت به آینده خوش‌بین باقی می‌ماند." },
      { en: "originate", pos: "v", fa: "سرچشمه گرفتن", exEn: "The idea originated from his research.", exFa: "این ایده از تحقیقات او سرچشمه گرفت." },
      { en: "overcome", pos: "v", fa: "غلبه کردن", exEn: "She overcame many difficulties.", exFa: "او بر مشکلات زیادی غلبه کرد." },
      { en: "overlook", pos: "v", fa: "نادیده گرفتن، چشم‌پوشی کردن", exEn: "Don't overlook the details.", exFa: "جزئیات را نادیده نگیر." },
      { en: "persist", pos: "v", fa: "پافشاری کردن، استمرار", exEn: "He persisted in his efforts.", exFa: "او در تلاش‌هایش پافشاری کرد." },
      { en: "pessimistic", pos: "adj", fa: "بدبین", exEn: "Don't be so pessimistic.", exFa: "اینقدر بدبین نباش." },
      { en: "postpone", pos: "v", fa: "به تعویق انداختن", exEn: "We postponed the meeting.", exFa: "ما جلسه را به تعویق انداختیم." },
      { en: "precious", pos: "adj", fa: "ارزشمند، گرانبها", exEn: "Time is precious.", exFa: "زمان ارزشمند است." },
      { en: "prejudice", pos: "n", fa: "پیش‌داوری، تعصب", exEn: "He has no prejudice against anyone.", exFa: "او نسبت به هیچ‌کس تعصب ندارد." }
    ]
  },
  // ==================== LESSON 17 ====================
  {
    id: 17,
    title: "درس ۱۷",
    theme: "دانش و آگاهی",
    words: [
      { en: "privilege", pos: "n", fa: "امتیاز، مزیت", exEn: "It's a privilege to work here.", exFa: "کار کردن اینجا یک امتیاز است." },
      { en: "profession", pos: "n", fa: "حرفه", exEn: "Teaching is a noble profession.", exFa: "تدریس یک حرفه‌ی شرافتمندانه است." },
      { en: "promote", pos: "v", fa: "ترویج کردن، ارتقا دادن", exEn: "They promoted him to manager.", exFa: "آن‌ها او را به مدیر ارتقا دادند." },
      { en: "prospect", pos: "n", fa: "چشم‌انداز، چشم‌داشت", exEn: "The job has great prospects.", exFa: "این شغل چشم‌اندازهای خوبی دارد." },
      { en: "prosperous", pos: "adj", fa: "مرفه، شکوفا", exEn: "They live in a prosperous city.", exFa: "آن‌ها در یک شهر مرفه زندگی می‌کنند." },
      { en: "pursue", pos: "v", fa: "دنبال کردن، پیگیری کردن", exEn: "She pursued her dream.", exFa: "او رویای خود را دنبال کرد." },
      { en: "realistic", pos: "adj", fa: "واقع‌گرایانه", exEn: "Set realistic goals.", exFa: "اهداف واقع‌گرایانه تعیین کن." },
      { en: "recognize", pos: "v", fa: "تشخیص دادن، شناسایی کردن", exEn: "I recognized him immediately.", exFa: "من او را بلافاصله تشخیص دادم." },
      { en: "recommend", pos: "v", fa: "توصیه کردن", exEn: "I recommend this book.", exFa: "من این کتاب را توصیه می‌کنم." },
      { en: "recover", pos: "v", fa: "بهبود یافتن، بازیابی کردن", exEn: "She recovered from her illness.", exFa: "او از بیماری‌اش بهبود یافت." },
      { en: "reduce", pos: "v", fa: "کاهش دادن", exEn: "We need to reduce costs.", exFa: "باید هزینه‌ها را کاهش دهیم." },
      { en: "reform", pos: "n/v", fa: "اصلاح کردن", exEn: "The government introduced reforms.", exFa: "دولت اصلاحاتی را معرفی کرد." }
    ]
  },
  // ==================== LESSON 18 ====================
  {
    id: 18,
    title: "درس ۱۸",
    theme: "تحول و پیشرفت",
    words: [
      { en: "regulate", pos: "v", fa: "تنظیم کردن، کنترل کردن", exEn: "Rules regulate the traffic.", exFa: "قوانین ترافیک را تنظیم می‌کنند." },
      { en: "reject", pos: "v", fa: "رد کردن", exEn: "She rejected his offer.", exFa: "او پیشنهاد او را رد کرد." },
      { en: "release", pos: "v", fa: "آزاد کردن، انتشار دادن", exEn: "They released the prisoners.", exFa: "آن‌ها زندانیان را آزاد کردند." },
      { en: "rely", pos: "v", fa: "اعتماد کردن، تکیه کردن", exEn: "You can rely on me.", exFa: "تو می‌توانی به من اعتماد کنی." },
      { en: "resolve", pos: "v", fa: "حل کردن، تصمیم گرفتن", exEn: "We resolved the problem.", exFa: "ما مشکل را حل کردیم." },
      { en: "resource", pos: "n", fa: "منبع", exEn: "Water is a natural resource.", exFa: "آب یک منبع طبیعی است." },
      { en: "respect", pos: "n/v", fa: "احترام", exEn: "Show respect to others.", exFa: "به دیگران احترام بگذار." },
      { en: "respond", pos: "v", fa: "پاسخ دادن", exEn: "She responded quickly.", exFa: "او سریع پاسخ داد." },
      { en: "restore", pos: "v", fa: "بازگرداندن، احیا کردن", exEn: "They restored the old building.", exFa: "آن‌ها ساختمان قدیمی را بازگرداندند." },
      { en: "restrict", pos: "v", fa: "محدود کردن", exEn: "Speed is restricted here.", exFa: "سرعت در اینجا محدود است." },
      { en: "revolution", pos: "n", fa: "انقلاب", exEn: "The industrial revolution changed the world.", exFa: "انقلاب صنعتی جهان را تغییر داد." },
      { en: "reward", pos: "n/v", fa: "پاداش", exEn: "Hard work brings rewards.", exFa: "کار سخت پاداش دارد." }
    ]
  },
  // ==================== LESSON 19 ====================
  {
    id: 19,
    title: "درس ۱۹",
    theme: "نظم و قانون",
    words: [
      { en: "rigid", pos: "adj", fa: "سخت، انعطاف‌ناپذیر", exEn: "The rules are rigid.", exFa: "قوانین سخت‌گیرانه هستند." },
      { en: "sacrifice", pos: "n/v", fa: "فداکاری، قربانی کردن", exEn: "Parents make sacrifices for their children.", exFa: "والدین برای فرزندانشان فداکاری می‌کنند." },
      { en: "secure", pos: "adj/v", fa: "امن، ایمن", exEn: "Make sure your house is secure.", exFa: "مطمئن شوید خانه‌تان امن است." },
      { en: "severe", pos: "adj", fa: "شدید، سخت", exEn: "The storm was severe.", exFa: "طوفان شدید بود." },
      { en: "significance", pos: "n", fa: "اهمیت", exEn: "This has great significance.", exFa: "این اهمیت زیادی دارد." },
      { en: "sincere", pos: "adj", fa: "صادق، خالص", exEn: "He gave a sincere apology.", exFa: "او عذرخواهی صادقانه‌ای کرد." },
      { en: "sole", pos: "adj", fa: "تنها، یگانه", exEn: "He was the sole survivor.", exFa: "او تنها بازمانده بود." },
      { en: "spontaneous", pos: "adj", fa: "خودجوش", exEn: "It was a spontaneous decision.", exFa: "این یک تصمیم خودجوش بود." },
      { en: "stable", pos: "adj", fa: "پایدار", exEn: "The economy is stable.", exFa: "اقتصاد پایدار است." },
      { en: "stimulate", pos: "v", fa: "تحریک کردن، برانگیختن", exEn: "Coffee stimulates the brain.", exFa: "قهوه مغز را تحریک می‌کند." },
      { en: "strategy", pos: "n", fa: "راهبرد، استراتژی", exEn: "We need a new strategy.", exFa: "ما به یک راهبرد جدید نیاز داریم." },
      { en: "substitute", pos: "n/v", fa: "جایگزین", exEn: "You can substitute sugar with honey.", exFa: "می‌توانی شکر را با عسل جایگزین کنی." }
    ]
  },
  // ==================== LESSON 20 ====================
  {
    id: 20,
    title: "درس ۲۰",
    theme: "تأمل و رشد",
    words: [
      { en: "sufficient", pos: "adj", fa: "کافی", exEn: "We have sufficient evidence.", exFa: "ما شواهد کافی داریم." },
      { en: "superior", pos: "adj", fa: "برتر", exEn: "This product is superior to others.", exFa: "این محصول نسبت به دیگران برتر است." },
      { en: "survive", pos: "v", fa: "زنده ماندن", exEn: "No one survived the crash.", exFa: "هیچ‌کس از تصادف جان سالم به در نبرد." },
      { en: "suspect", pos: "v/n", fa: "مظنون بودن، مظنون", exEn: "I suspect he is lying.", exFa: "من شک دارم که او دروغ می‌گوید." },
      { en: "suspend", pos: "v", fa: "معلق کردن", exEn: "Classes were suspended due to snow.", exFa: "کلاس‌ها به دلیل برف تعطیل شدند." },
      { en: "symbol", pos: "n", fa: "نماد", exEn: "The dove is a symbol of peace.", exFa: "کبوتر نماد صلح است." },
      { en: "temporary", pos: "adj", fa: "موقت", exEn: "This is a temporary job.", exFa: "این یک شغل موقت است." },
      { en: "tender", pos: "adj", fa: "نرم، لطیف", exEn: "She has a tender heart.", exFa: "او قلبی لطیف دارد." },
      { en: "thorough", pos: "adj", fa: "کامل، دقیق", exEn: "Do a thorough research.", exFa: "تحقیق کاملی انجام بده." },
      { en: "tolerance", pos: "n", fa: "تحمل، بردباری", exEn: "Tolerance is important in society.", exFa: "بردباری در جامعه مهم است." },
      { en: "transform", pos: "v", fa: "دگرگون کردن", exEn: "The city has been transformed.", exFa: "شهر دگرگون شده است." },
      { en: "unique", pos: "adj", fa: "منحصر‌به‌فرد", exEn: "This is a unique opportunity.", exFa: "این یک فرصت منحصر‌به‌فرد است." }
    ]
  },
  // ==================== LESSON 21 ====================
  {
    id: 21,
    title: "درس ۲۱",
    theme: "هماهنگی و توسعه",
    words: [
      { en: "universal", pos: "adj", fa: "جهانی", exEn: "English has universal appeal.", exFa: "انگلیسی جذابیت جهانی دارد." },
      { en: "urban", pos: "adj", fa: "شهری", exEn: "Urban life is fast-paced.", exFa: "زندگی شهری پرسرعت است." },
      { en: "urgent", pos: "adj", fa: "فوری", exEn: "This is an urgent matter.", exFa: "این یک موضوع فوری است." },
      { en: "utilize", pos: "v", fa: "استفاده کردن، به کار بردن", exEn: "Utilize your resources wisely.", exFa: "از منابع خود به‌خوبی استفاده کن." },
      { en: "vague", pos: "adj", fa: "مبهم، نامشخص", exEn: "His answer was vague.", exFa: "پاسخ او مبهم بود." },
      { en: "valid", pos: "adj", fa: "معتبر", exEn: "This ticket is valid for today.", exFa: "این بلیط برای امروز معتبر است." },
      { en: "vanish", pos: "v", fa: "ناپدید شدن", exEn: "The sun vanished behind the clouds.", exFa: "خورشید پشت ابرها ناپدید شد." },
      { en: "variety", pos: "n", fa: "تنوع", exEn: "They offer a variety of choices.", exFa: "آن‌ها تنوعی از انتخاب‌ها را ارائه می‌دهند." },
      { en: "venture", pos: "n/v", fa: "سرمایه‌گذاری، ریسک کردن", exEn: "She ventured into a new business.", exFa: "او وارد یک کسب‌وکار جدید شد." },
      { en: "vital", pos: "adj", fa: "حیاتی", exEn: "Water is vital for life.", exFa: "آب برای زندگی حیاتی است." },
      { en: "voluntary", pos: "adj", fa: "داوطلبانه", exEn: "He did voluntary work.", exFa: "او کار داوطلبانه انجام داد." },
      { en: "welfare", pos: "n", fa: "رفاه", exEn: "The government cares about public welfare.", exFa: "دولت به رفاه عمومی اهمیت می‌دهد." }
    ]
  },
  // ==================== LESSON 22 ====================
  {
    id: 22,
    title: "درس ۲۲",
    theme: "توسعه فردی",
    words: [
      { en: "withdraw", pos: "v", fa: "برداشت کردن، خارج شدن", exEn: "He withdrew all his money.", exFa: "او تمام پولش را برداشت کرد." },
      { en: "witness", pos: "n/v", fa: "شاهد، شاهد بودن", exEn: "She witnessed the accident.", exFa: "او شاهد حادثه بود." },
      { en: "abrupt", pos: "adj", fa: "ناگهانی", exEn: "He made an abrupt stop.", exFa: "او توقف ناگهانی کرد." },
      { en: "accelerate", pos: "v", fa: "شتاب دادن", exEn: "The car accelerated quickly.", exFa: "ماشین به سرعت شتاب گرفت." },
      { en: "accommodate", pos: "v", fa: "جای دادن، سازگاری دادن", exEn: "The hotel can accommodate 500 guests.", exFa: "هتل می‌تواند ۵۰۰ مهمان را جای دهد." },
      { en: "accumulate", pos: "v", fa: "انباشته کردن", exEn: "Dust accumulated on the shelf.", exFa: "گرد و غبار روی قفسه انباشته شد." },
      { en: "accurate", pos: "adj", fa: "دقیق", exEn: "His prediction was accurate.", exFa: "پیش‌بینی او دقیق بود." },
      { en: "acquire", pos: "v", fa: "به دست آوردن", exEn: "She acquired a new skill.", exFa: "او مهارت جدیدی به دست آورد." },
      { en: "adapt", pos: "v", fa: "سازگار شدن", exEn: "He adapted quickly to the new environment.", exFa: "او به سرعت با محیط جدید سازگار شد." },
      { en: "adequate", pos: "adj", fa: "کافی", exEn: "Is the salary adequate?", exFa: "آیا حقوق کافی است؟" },
      { en: "adjust", pos: "v", fa: "تنظیم کردن", exEn: "Adjust the volume.", exFa: "صدا را تنظیم کن." },
      { en: "adopt", pos: "v", fa: "پذیرفتن، به فرزندی گرفتن", exEn: "They adopted a child.", exFa: "آن‌ها یک کودک را به فرزندی گرفتند." }
    ]
  },
  // ==================== LESSON 23 ====================
  {
    id: 23,
    title: "درس ۲۳",
    theme: "تعامل اجتماعی",
    words: [
      { en: "advance", pos: "v/n", fa: "پیشرفت کردن", exEn: "Technology advances rapidly.", exFa: "فناوری به سرعت پیشرفت می‌کند." },
      { en: "advantage", pos: "n", fa: "مزیت", exEn: "This gives us an advantage.", exFa: "این به ما یک مزیت می‌دهد." },
      { en: "adverse", pos: "adj", fa: "نامطلوب، بد", exEn: "Adverse weather caused delays.", exFa: "هوای نامطلوب باعث تأخیر شد." },
      { en: "advocate", pos: "v", fa: "حمایت کردن", exEn: "She advocates for human rights.", exFa: "او از حقوق بشر حمایت می‌کند." },
      { en: "affect", pos: "v", fa: "تأثیر گذاشتن", exEn: "Smoking affects your health.", exFa: "سیگار بر سلامتی شما تأثیر می‌گذارد." },
      { en: "alternative", pos: "n/adj", fa: "جایگزین", exEn: "We need an alternative plan.", exFa: "ما به یک برنامه‌ی جایگزین نیاز داریم." },
      { en: "ambitious", pos: "adj", fa: "جاه‌طلب", exEn: "He is very ambitious.", exFa: "او بسیار جاه‌طلب است." },
      { en: "anticipate", pos: "v", fa: "پیش‌بینی کردن", exEn: "We anticipated the problem.", exFa: "ما مشکل را پیش‌بینی کردیم." },
      { en: "apparent", pos: "adj", fa: "آشکار", exEn: "It was apparent to everyone.", exFa: "برای همه آشکار بود." },
      { en: "appreciate", pos: "v", fa: "قدردانی کردن", exEn: "I appreciate your help.", exFa: "من از کمک شما قدردانی می‌کنم." },
      { en: "approach", pos: "v/n", fa: "نزدیک شدن، رویکرد", exEn: "Winter is approaching.", exFa: "زمستان در حال نزدیک شدن است." },
      { en: "aspect", pos: "n", fa: "جنبه", exEn: "Consider all aspects of the problem.", exFa: "همه جنبه‌های مشکل را در نظر بگیر." }
    ]
  },
  // ==================== LESSON 24 ====================
  {
    id: 24,
    title: "درس ۲۴",
    theme: "تفکر و خلاقیت",
    words: [
      { en: "assess", pos: "v", fa: "ارزیابی کردن", exEn: "Assess the situation carefully.", exFa: "وضعیت را به دقت ارزیابی کن." },
      { en: "assign", pos: "v", fa: "اختصاص دادن، تعیین کردن", exEn: "The teacher assigned homework.", exFa: "معلم تکلیف تعیین کرد." },
      { en: "assist", pos: "v", fa: "کمک کردن", exEn: "She assisted me with the project.", exFa: "او در پروژه به من کمک کرد." },
      { en: "assume", pos: "v", fa: "فرض کردن", exEn: "I assumed he was here.", exFa: "من فرض کردم که او اینجاست." },
      { en: "attach", pos: "v", fa: "متصل کردن", exEn: "Attach the file to the email.", exFa: "فایل را به ایمیل متصل کن." },
      { en: "attempt", pos: "v/n", fa: "تلاش کردن", exEn: "I will attempt to fix it.", exFa: "من سعی می‌کنم آن را تعمیر کنم." },
      { en: "attitude", pos: "n", fa: "نگرش", exEn: "Your attitude matters.", exFa: "نگرش شما مهم است." },
      { en: "attract", pos: "v", fa: "جذب کردن", exEn: "Flowers attract bees.", exFa: "گل‌ها زنبورها را جذب می‌کنند." },
      { en: "aware", pos: "adj", fa: "آگاه", exEn: "Be aware of the dangers.", exFa: "از خطرات آگاه باش." },
      { en: "benefit", pos: "n/v", fa: "سود، فایده", exEn: "Exercise benefits your health.", exFa: "ورزش به سلامتی شما سود می‌رساند." },
      { en: "brief", pos: "adj", fa: "مختصر", exEn: "Give a brief explanation.", exFa: "توضیح مختصری بده." },
      { en: "capable", pos: "adj", fa: "توانا", exEn: "She is capable of doing it.", exFa: "او توانایی انجام آن را دارد." }
    ]
  },
  // ==================== LESSON 25 ====================
  {
    id: 25,
    title: "درس ۲۵",
    theme: "مدیریت و برنامه‌ریزی",
    words: [
      { en: "caution", pos: "n", fa: "احتیاط", exEn: "Drive with caution.", exFa: "با احتیاط رانندگی کن." },
      { en: "circumstance", pos: "n", fa: "شرایط", exEn: "Under the circumstances, I agree.", exFa: "در شرایط فعلی، موافقم." },
      { en: "civil", pos: "adj", fa: "مدنی", exEn: "Civil rights are important.", exFa: "حقوق مدنی مهم است." },
      { en: "clarify", pos: "v", fa: "روشن کردن", exEn: "Clarify your point.", exFa: "نظرت را روشن کن." },
      { en: "coincide", pos: "v", fa: "همزمان اتفاق افتادن", exEn: "Our schedules coincide.", exFa: "برنامه‌های ما همزمان است." },
      { en: "collapse", pos: "v", fa: "فروپاشیدن", exEn: "The bridge collapsed.", exFa: "پل فروپاشید." },
      { en: "combine", pos: "v", fa: "ترکیب کردن", exEn: "Combine the ingredients.", exFa: "مواد را ترکیب کن." },
      { en: "comfort", pos: "n", fa: "آسایش", exEn: "She found comfort in music.", exFa: "او در موسیقی آرامش یافت." },
      { en: "commit", pos: "v", fa: "متعهد شدن", exEn: "He committed to the project.", exFa: "او به پروژه متعهد شد." },
      { en: "compel", pos: "v", fa: "مجبور کردن", exEn: "Circumstances compelled him to leave.", exFa: "شرایط او را مجبور به ترک کرد." },
      { en: "competent", pos: "adj", fa: "شایسته", exEn: "She is competent.", exFa: "او شایسته است." },
      { en: "complex", pos: "adj", fa: "پیچیده", exEn: "This is a complex problem.", exFa: "این یک مشکل پیچیده است." }
    ]
  },
  // ==================== LESSON 26 ====================
  {
    id: 26,
    title: "درس ۲۶",
    theme: "ارتباطات",
    words: [
      { en: "comply", pos: "v", fa: "تطابق کردن، رعایت کردن", exEn: "You must comply with the rules.", exFa: "باید قوانین را رعایت کنی." },
      { en: "compose", pos: "v", fa: "تشکیل دادن، سرودن", exEn: "She composed a poem.", exFa: "او یک شعر سرود." },
      { en: "comprehensive", pos: "adj", fa: "جامع", exEn: "This is a comprehensive guide.", exFa: "این یک راهنمای جامع است." },
      { en: "concentrate", pos: "v", fa: "تمرکز کردن", exEn: "Concentrate on your work.", exFa: "روی کارت تمرکز کن." },
      { en: "conclude", pos: "v", fa: "نتیجه گرفتن", exEn: "I conclude that he is right.", exFa: "من نتیجه می‌گیرم که او درست می‌گوید." },
      { en: "conduct", pos: "v", fa: "انجام دادن", exEn: "They conducted an experiment.", exFa: "آن‌ها یک آزمایش انجام دادند." },
      { en: "confident", pos: "adj", fa: "مطمئن", exEn: "Be confident.", exFa: "مطمئن باش." },
      { en: "confirm", pos: "v", fa: "تأیید کردن", exEn: "Confirm the appointment.", exFa: "قرار ملاقات را تأیید کن." },
      { en: "conflict", pos: "n", fa: "تعارض", exEn: "There is a conflict.", exFa: "یک تعارض وجود دارد." },
      { en: "confuse", pos: "v", fa: "گیج کردن", exEn: "This confuses me.", exFa: "این منو گیج می‌کند." },
      { en: "consequence", pos: "n", fa: "پیامد", exEn: "Consequences matter.", exFa: "پیامدها مهم هستند." },
      { en: "conservative", pos: "adj", fa: "محافظه‌کار", exEn: "He has conservative views.", exFa: "او دیدگاه‌های محافظه‌کارانه دارد." }
    ]
  },
  // ==================== LESSON 27 ====================
  {
    id: 27,
    title: "درس ۲۷",
    theme: "تغییر و پایداری",
    words: [
      { en: "consider", pos: "v", fa: "در نظر گرفتن", exEn: "Consider all options.", exFa: "همه گزینه‌ها را در نظر بگیر." },
      { en: "consistent", pos: "adj", fa: "سازگار، پیوسته", exEn: "He is consistent in his work.", exFa: "او در کارش پیوسته است." },
      { en: "contribute", pos: "v", fa: "کمک کردن", exEn: "Everyone contributed.", exFa: "همه کمک کردند." },
      { en: "controversial", pos: "adj", fa: "جنجالی", exEn: "It's a controversial topic.", exFa: "این یک موضوع جنجالی است." },
      { en: "convenient", pos: "adj", fa: "راحت", exEn: "This is convenient.", exFa: "این راحت است." },
      { en: "convince", pos: "v", fa: "متقاعد کردن", exEn: "I convinced him.", exFa: "من او را متقاعد کردم." },
      { en: "cooperate", pos: "v", fa: "همکاری کردن", exEn: "We cooperate on this project.", exFa: "ما در این پروژه همکاری می‌کنیم." },
      { en: "correspond", pos: "v", fa: "مطابقت داشتن", exEn: "The report corresponds with the facts.", exFa: "گزارش با حقایق مطابقت دارد." },
      { en: "courage", pos: "n", fa: "شجاعت", exEn: "He showed courage.", exFa: "او شجاعت نشان داد." },
      { en: "creative", pos: "adj", fa: "خلاقانه", exEn: "Be creative.", exFa: "خلاق باش." },
      { en: "crisis", pos: "n", fa: "بحران", exEn: "We face a crisis.", exFa: "ما با یک بحران روبرو هستیم." },
      { en: "crucial", pos: "adj", fa: "حیاتی", exEn: "This is crucial.", exFa: "این حیاتی است." }
    ]
  },
  // ==================== LESSON 28 ====================
  {
    id: 28,
    title: "درس ۲۸",
    theme: "پایداری و ثبات",
    words: [
      { en: "curious", pos: "adj", fa: "کنجکاو", exEn: "He was curious.", exFa: "او کنجکاو بود." },
      { en: "declare", pos: "v", fa: "اعلام کردن", exEn: "They declared war.", exFa: "آن‌ها اعلام جنگ کردند." },
      { en: "decline", pos: "v", fa: "کاهش یافتن", exEn: "Prices declined.", exFa: "قیمت‌ها کاهش یافت." },
      { en: "dedicate", pos: "v", fa: "وقف کردن", exEn: "He dedicated his life.", exFa: "او زندگی‌اش را وقف کرد." },
      { en: "defeat", pos: "v", fa: "شکست دادن", exEn: "We defeated them.", exFa: "ما آن‌ها را شکست دادیم." },
      { en: "defend", pos: "v", fa: "دفاع کردن", exEn: "Defend your rights.", exFa: "از حقوق خود دفاع کن." },
      { en: "define", pos: "v", fa: "تعریف کردن", exEn: "Define this word.", exFa: "این کلمه را تعریف کن." },
      { en: "delicate", pos: "adj", fa: "ظریف", exEn: "Handle it delicately.", exFa: "با ظرافت رفتار کن." },
      { en: "demand", pos: "n/v", fa: "تقاضا", exEn: "High demand.", exFa: "تقاضای بالا." },
      { en: "deny", pos: "v", fa: "انکار کردن", exEn: "He denied it.", exFa: "او آن را انکار کرد." },
      { en: "deserve", pos: "v", fa: "سزاوار بودن", exEn: "You deserve it.", exFa: "تو شایسته‌ای." },
      { en: "determine", pos: "v", fa: "تعیین کردن", exEn: "Determine the cause.", exFa: "علت را تعیین کن." }
    ]
  },
  // ==================== LESSON 29 ====================
  {
    id: 29,
    title: "درس ۲۹",
    theme: "پیشرفت و نوآوری",
    words: [
      { en: "devote", pos: "v", fa: "وقف کردن", exEn: "She devoted her time.", exFa: "او وقتش را وقف کرد." },
      { en: "dignity", pos: "n", fa: "وقار", exEn: "Treat people with dignity.", exFa: "با مردم با وقار رفتار کن." },
      { en: "dilemma", pos: "n", fa: "دوراهی", exEn: "He faced a dilemma.", exFa: "او با یک دوراهی روبرو شد." },
      { en: "diminish", pos: "v", fa: "کاهش یافتن", exEn: "The pain diminished.", exFa: "درد کاهش یافت." },
      { en: "discipline", pos: "n", fa: "نظم", exEn: "Discipline is important.", exFa: "نظم مهم است." },
      { en: "discount", pos: "n/v", fa: "تخفیف", exEn: "They gave a discount.", exFa: "آن‌ها تخفیف دادند." },
      { en: "discover", pos: "v", fa: "کشف کردن", exEn: "He discovered America.", exFa: "او آمریکا را کشف کرد." },
      { en: "display", pos: "v/n", fa: "نمایش دادن", exEn: "Display your work.", exFa: "کارت را نمایش بده." },
      { en: "distinct", pos: "adj", fa: "متمایز", exEn: "It is distinct.", exFa: "متمایز است." },
      { en: "distinguish", pos: "v", fa: "تشخیص دادن", exEn: "Distinguish between them.", exFa: "بین آن‌ها تشخیص بده." },
      { en: "distribute", pos: "v", fa: "توزیع کردن", exEn: "Distribute the food.", exFa: "غذا را توزیع کن." },
      { en: "diverse", pos: "adj", fa: "متنوع", exEn: "A diverse group.", exFa: "یک گروه متنوع." }
    ]
  },
  // ==================== LESSON 30 ====================
  {
    id: 30,
    title: "درس ۳۰",
    theme: "عزم و اراده",
    words: [
      { en: "document", pos: "n/v", fa: "سند، مستند کردن", exEn: "Keep documents safe.", exFa: "اسناد را ایمن نگه دار." },
      { en: "domestic", pos: "adj", fa: "داخلی, خانگی", exEn: "Domestic animals.", exFa: "حیوانات خانگی." },
      { en: "dominant", pos: "adj", fa: "مسلط", exEn: "He is dominant.", exFa: "او مسلط است." },
      { en: "doubt", pos: "n/v", fa: "شک", exEn: "I doubt it.", exFa: "من شک دارم." },
      { en: "dramatic", pos: "adj", fa: "نمایشی، چشمگیر", exEn: "A dramatic change.", exFa: "یک تغییر چشمگیر." },
      { en: "duration", pos: "n", fa: "مدت", exEn: "Duration of the course.", exFa: "مدت دوره." },
      { en: "eager", pos: "adj", fa: "مشتاق", exEn: "He is eager.", exFa: "او مشتاق است." },
      { en: "economy", pos: "n", fa: "اقتصاد", exEn: "The global economy.", exFa: "اقتصاد جهانی." },
      { en: "effective", pos: "adj", fa: "موثر", exEn: "It is effective.", exFa: "موثر است." },
      { en: "efficient", pos: "adj", fa: "کارآمد", exEn: "It's efficient.", exFa: "کارآمد است." },
      { en: "elaborate", pos: "v/adj", fa: "مفصل", exEn: "An elaborate plan.", exFa: "یک برنامه‌ی مفصل." },
      { en: "eliminate", pos: "v", fa: "حذف کردن", exEn: "Eliminate errors.", exFa: "خطاها را حذف کن." }
    ]
  },
  // ==================== LESSON 31 ====================
  {
    id: 31,
    title: "درس ۳۱",
    theme: "خلاقیت و نوآوری",
    words: [
      { en: "embrace", pos: "v", fa: "در آغوش گرفتن", exEn: "Embrace change.", exFa: "تغییر را بپذیر." },
      { en: "emerge", pos: "v", fa: "پدیدار شدن", exEn: "A new leader emerged.", exFa: "یک رهبر جدید پدیدار شد." },
      { en: "emphasis", pos: "n", fa: "تأکید", exEn: "Put emphasis on this.", exFa: "روی این تأکید کن." },
      { en: "encounter", pos: "v", fa: "مواجه شدن", exEn: "I encountered him.", exFa: "با او مواجه شدم." },
      { en: "endure", pos: "v", fa: "تحمل کردن", exEn: "Endure the pain.", exFa: "درد را تحمل کن." },
      { en: "enormous", pos: "adj", fa: "عظیم", exEn: "An enormous task.", exFa: "یک کار عظیم." },
      { en: "ensure", pos: "v", fa: "اطمینان حاصل کردن", exEn: "Ensure safety.", exFa: "از ایمنی مطمئن شو." },
      { en: "enthusiastic", pos: "adj", fa: "مشتاق", exEn: "He is enthusiastic.", exFa: "او مشتاق است." },
      { en: "environment", pos: "n", fa: "محیط", exEn: "Protect the environment.", exFa: "از محیط زیست محافظت کن." },
      { en: "essential", pos: "adj", fa: "ضروری", exEn: "It is essential.", exFa: "ضروری است." },
      { en: "establish", pos: "v", fa: "تأسیس کردن", exEn: "Establish a company.", exFa: "یک شرکت تأسیس کن." },
      { en: "estimate", pos: "v/n", fa: "تخمین", exEn: "Estimate the cost.", exFa: "هزینه را تخمین بزن." }
    ]
  },
  // ==================== LESSON 32 ====================
  {
    id: 32,
    title: "درس ۳۲",
    theme: "مسئولیت‌پذیری",
    words: [
      { en: "evaluate", pos: "v", fa: "ارزیابی کردن", exEn: "Evaluate the results.", exFa: "نتایج را ارزیابی کن." },
      { en: "evident", pos: "adj", fa: "آشکار", exEn: "It is evident.", exFa: "آشکار است." },
      { en: "evolve", pos: "v", fa: "تکامل یافتن", exEn: "Species evolve.", exFa: "گونه‌ها تکامل می‌یابند." },
      { en: "examine", pos: "v", fa: "بررسی کردن", exEn: "Examine the evidence.", exFa: "شواهد را بررسی کن." },
      { en: "exceed", pos: "v", fa: "فراتر رفتن", exEn: "Exceed expectations.", exFa: "از انتظارات فراتر برو." },
      { en: "exclude", pos: "v", fa: "مستثنی کردن", exEn: "Exclude him.", exFa: "او را مستثنی کن." },
      { en: "execute", pos: "v", fa: "اجرا کردن", exEn: "Execute the plan.", exFa: "برنامه را اجرا کن." },
      { en: "exhaust", pos: "v", fa: "خسته کردن", exEn: "It exhausted me.", exFa: "مرا خسته کرد." },
      { en: "expand", pos: "v", fa: "گسترش دادن", exEn: "Expand your business.", exFa: "کسب‌وکارت را گسترش بده." },
      { en: "exploit", pos: "v", fa: "استفاده‌ی نادرست کردن", exEn: "Don't exploit others.", exFa: "از دیگران سوءاستفاده نکن." },
      { en: "explore", pos: "v", fa: "کشف کردن", exEn: "Explore new places.", exFa: "مکان‌های جدید را کشف کن." },
      { en: "expose", pos: "v", fa: "در معرض قرار دادن", exEn: "Expose the truth.", exFa: "حقیقت را فاش کن." }
    ]
  },
  // ==================== LESSON 33 ====================
  {
    id: 33,
    title: "درس ۳۳",
    theme: "توسعه و پیشرفت",
    words: [
      { en: "extend", pos: "v", fa: "گسترش دادن", exEn: "Extend your stay.", exFa: "اقامتت را طولانی کن." },
      { en: "extensive", pos: "adj", fa: "گسترده", exEn: "Extensive research.", exFa: "تحقیق گسترده." },
      { en: "external", pos: "adj", fa: "خارجی", exEn: "External factors.", exFa: "عوامل خارجی." },
      { en: "extraordinary", pos: "adj", fa: "خارق‌العاده", exEn: "Extraordinary efforts.", exFa: "تلاش‌های خارق‌العاده." },
      { en: "fabricate", pos: "v", fa: "ساختن، جعل کردن", exEn: "Fabricate evidence.", exFa: "شواهد را جعل کن." },
      { en: "facilitate", pos: "v", fa: "تسهیل کردن", exEn: "Facilitate the process.", exFa: "فرآیند را تسهیل کن." },
      { en: "factor", pos: "n", fa: "عامل", exEn: "A key factor.", exFa: "یک عامل کلیدی." },
      { en: "faith", pos: "n", fa: "ایمان, اعتقاد", exEn: "Have faith.", exFa: "ایمان داشته باش." },
      { en: "fate", pos: "n", fa: "سرنوشت", exEn: "Fate brought us together.", exFa: "سرنوشت ما را به هم رساند." },
      { en: "feasible", pos: "adj", fa: "شدنی, عملی", exEn: "Is it feasible?", exFa: "آیا عملی است؟" },
      { en: "flexible", pos: "adj", fa: "انعطاف‌پذیر", exEn: "Be flexible.", exFa: "انعطاف‌پذیر باش." },
      { en: "fluctuate", pos: "v", fa: "نوسان کردن", exEn: "Prices fluctuate.", exFa: "قیمت‌ها نوسان می‌کنند." }
    ]
  },
  // ==================== LESSON 34 ====================
  {
    id: 34,
    title: "درس ۳۴",
    theme: "مسئولیت اجتماعی",
    words: [
      { en: "focus", pos: "v/n", fa: "تمرکز", exEn: "Focus on your goal.", exFa: "روی هدفت تمرکز کن." },
      { en: "fragile", pos: "adj", fa: "شکننده", exEn: "Fragile glass.", exFa: "شیشه‌ی شکننده." },
      { en: "freedom", pos: "n", fa: "آزادی", exEn: "Freedom of speech.", exFa: "آزادی بیان." },
      { en: "frequent", pos: "adj", fa: "مکرر", exEn: "Frequent visits.", exFa: "بازدیدهای مکرر." },
      { en: "frustrate", pos: "v", fa: "ناامید کردن", exEn: "Don't frustrate me.", exFa: "منو ناامید نکن." },
      { en: "fundamental", pos: "adj", fa: "اساسی", exEn: "Fundamental rights.", exFa: "حقوق اساسی." },
      { en: "further", pos: "adj/v", fa: "بیشتر, پیشرفت کردن", exEn: "Further your career.", exFa: "حرفه‌ات را پیشرفت بده." },
      { en: "generous", pos: "adj", fa: "سخاوتمند", exEn: "He is generous.", exFa: "او سخاوتمند است." },
      { en: "genuine", pos: "adj", fa: "واقعی", exEn: "Genuine concern.", exFa: "نگرانی واقعی." },
      { en: "global", pos: "adj", fa: "جهانی", exEn: "Global issues.", exFa: "مسائل جهانی." },
      { en: "gradual", pos: "adj", fa: "تدریجی", exEn: "Gradual progress.", exFa: "پیشرفت تدریجی." },
      { en: "grateful", pos: "adj", fa: "سپاسگزار", exEn: "I am grateful.", exFa: "من سپاسگزارم." }
    ]
  },
  // ==================== LESSON 35 ====================
  {
    id: 35,
    title: "درس ۳۵",
    theme: "سلامت و تندرستی",
    words: [
      { en: "guarantee", pos: "v/n", fa: "تضمین", exEn: "We guarantee it.", exFa: "ما آن را تضمین می‌کنیم." },
      { en: "hesitate", pos: "v", fa: "تردید کردن", exEn: "Don't hesitate.", exFa: "تردید نکن." },
      { en: "hostile", pos: "adj", fa: "خصمانه", exEn: "Hostile behavior.", exFa: "رفتار خصمانه." },
      { en: "humble", pos: "adj", fa: "فروتن", exEn: "He is humble.", exFa: "او فروتن است." },
      { en: "identical", pos: "adj", fa: "یکسان", exEn: "Identical twins.", exFa: "دوقلوهای یکسان." },
      { en: "ignore", pos: "v", fa: "نادیده گرفتن", exEn: "Ignore the noise.", exFa: "سروصدا را نادیده بگیر." },
      { en: "illustrate", pos: "v", fa: "نشان دادن", exEn: "Illustrate the point.", exFa: "نکته را نشان بده." },
      { en: "impact", pos: "n", fa: "تأثیر", exEn: "Big impact.", exFa: "تأثیر بزرگ." },
      { en: "impair", pos: "v", fa: "مختل کردن", exEn: "Impair your health.", exFa: "سلامتی‌ات را مختل کن." },
      { en: "implement", pos: "v", fa: "اجرا کردن", exEn: "Implement the plan.", exFa: "برنامه را اجرا کن." },
      { en: "imply", pos: "v", fa: "دلالت داشتن", exEn: "What does it imply?", exFa: "این به چه معناست؟" },
      { en: "impose", pos: "v", fa: "تحمیل کردن", exEn: "Impose a tax.", exFa: "مالیات وضع کن." }
    ]
  },
  // ==================== LESSON 36 ====================
  {
    id: 36,
    title: "درس ۳۶",
    theme: "اعتماد و همکاری",
    words: [
      { en: "impress", pos: "v", fa: "تحت تأثیر قرار دادن", exEn: "She impressed me.", exFa: "او مرا تحت تأثیر قرار داد." },
      { en: "inevitable", pos: "adj", fa: "اجتناب‌ناپذیر", exEn: "It is inevitable.", exFa: "اجتناب‌ناپذیر است." },
      { en: "influence", pos: "v/n", fa: "تأثیرگذاشتن", exEn: "Influence others.", exFa: "روی دیگران تأثیر بگذار." },
      { en: "initial", pos: "adj", fa: "اولیه", exEn: "Initial stage.", exFa: "مرحله‌ی اولیه." },
      { en: "innovative", pos: "adj", fa: "نوآورانه", exEn: "Innovative ideas.", exFa: "ایده‌های نوآورانه." },
      { en: "insist", pos: "v", fa: "اصرار کردن", exEn: "I insist on it.", exFa: "من روی آن اصرار دارم." },
      { en: "inspire", pos: "v", fa: "الهام بخشیدن", exEn: "She inspired me.", exFa: "او به من الهام بخشید." },
      { en: "intense", pos: "adj", fa: "شدید", exEn: "Intense heat.", exFa: "گرمای شدید." },
      { en: "interpret", pos: "v", fa: "تفسیر کردن", exEn: "Interpret the data.", exFa: "داده‌ها را تفسیر کن." },
      { en: "investigate", pos: "v", fa: "بررسی کردن", exEn: "Investigate the case.", exFa: "پرونده را بررسی کن." },
      { en: "isolate", pos: "v", fa: "جدا کردن", exEn: "Isolate the patient.", exFa: "بیمار را جدا کن." },
      { en: "justify", pos: "v", fa: "توجیه کردن", exEn: "Justify your decision.", exFa: "تصمیمت را توجیه کن." }
    ]
  },
  // ==================== LESSON 37 ====================
  {
    id: 37,
    title: "درس ۳۷",
    theme: "پایداری و پیشرفت",
    words: [
      { en: "keen", pos: "adj", fa: "مشتاق", exEn: "I am keen to learn.", exFa: "من مشتاق یادگیری هستم." },
      { en: "legitimate", pos: "adj", fa: "قانونی", exEn: "It is legitimate.", exFa: "قانونی است." },
      { en: "lenient", pos: "adj", fa: "ملایم", exEn: "The judge was lenient.", exFa: "قاضی ملایم بود." },
      { en: "likely", pos: "adj", fa: "محتمل", exEn: "It is likely.", exFa: "محتمل است." },
      { en: "logical", pos: "adj", fa: "منطقی", exEn: "That is logical.", exFa: "منطقی است." },
      { en: "maintain", pos: "v", fa: "حفظ کردن", exEn: "Maintain your health.", exFa: "سلامتی‌ات را حفظ کن." },
      { en: "manipulate", pos: "v", fa: "دستکاری کردن", exEn: "He manipulates people.", exFa: "او مردم را دستکاری می‌کند." },
      { en: "mature", pos: "adj", fa: "بالغ", exEn: "He is mature.", exFa: "او بالغ است." },
      { en: "maximum", pos: "adj/n", fa: "حداکثر", exEn: "The maximum speed.", exFa: "حداکثر سرعت." },
      { en: "mention", pos: "v", fa: "اشاره کردن", exEn: "He mentioned it.", exFa: "او به آن اشاره کرد." },
      { en: "minimal", pos: "adj", fa: "حداقلی", exEn: "Minimal damage.", exFa: "خسارت حداقلی." },
      { en: "modest", pos: "adj", fa: "متواضع", exEn: "He is modest.", exFa: "او متواضع است." }
    ]
  },
  // ==================== LESSON 38 ====================
  {
    id: 38,
    title: "درس ۳۸",
    theme: "همکاری و پیشرفت",
    words: [
      { en: "motivate", pos: "v", fa: "انگیزه دادن", exEn: "Motivate your team.", exFa: "به تیمت انگیزه بده." },
      { en: "mutual", pos: "adj", fa: "متقابل", exEn: "Mutual respect.", exFa: "احترام متقابل." },
      { en: "naive", pos: "adj", fa: "ساده‌لوح", exEn: "Don't be naive.", exFa: "ساده‌لوح نباش." },
      { en: "neglect", pos: "v", fa: "نادیده گرفتن", exEn: "Neglect your duties.", exFa: "وظایفت را نادیده نگیر." },
      { en: "obstacle", pos: "n", fa: "مانع", exEn: "Overcome obstacles.", exFa: "بر موانع غلبه کن." },
      { en: "occupy", pos: "v", fa: "مشغول بودن", exEn: "She is occupied.", exFa: "او مشغول است." },
      { en: "oppose", pos: "v", fa: "مخالفت کردن", exEn: "I oppose that.", exFa: "من با آن مخالفم." },
      { en: "optimistic", pos: "adj", fa: "خوش‌بین", exEn: "Be optimistic.", exFa: "خوش‌بین باش." },
      { en: "originate", pos: "v", fa: "سرچشمه گرفتن", exEn: "It originated there.", exFa: "آنجا سرچشمه گرفت." },
      { en: "overcome", pos: "v", fa: "غلبه کردن", exEn: "Overcome fears.", exFa: "بر ترس‌ها غلبه کن." },
      { en: "overlook", pos: "v", fa: "نادیده گرفتن", exEn: "Don't overlook details.", exFa: "جزئیات را نادیده نگیر." },
      { en: "persist", pos: "v", fa: "پافشاری کردن", exEn: "Persist in your efforts.", exFa: "در تلاش‌هایت پافشاری کن." }
    ]
  },
  // ==================== LESSON 39 ====================
  {
    id: 39,
    title: "درس ۳۹",
    theme: "پایداری و تاب‌آوری",
    words: [
      { en: "pessimistic", pos: "adj", fa: "بدبین", exEn: "Don't be pessimistic.", exFa: "بدبین نباش." },
      { en: "postpone", pos: "v", fa: "به تعویق انداختن", exEn: "Postpone the meeting.", exFa: "جلسه را به تعویق بینداز." },
      { en: "precious", pos: "adj", fa: "ارزشمند", exEn: "Time is precious.", exFa: "زمان ارزشمند است." },
      { en: "prejudice", pos: "n", fa: "تعصب", exEn: "Prejudice is wrong.", exFa: "تعصب اشتباه است." },
      { en: "privilege", pos: "n", fa: "امتیاز", exEn: "It's a privilege.", exFa: "این یک امتیاز است." },
      { en: "profession", pos: "n", fa: "حرفه", exEn: "Choose a profession.", exFa: "یک حرفه انتخاب کن." },
      { en: "promote", pos: "v", fa: "ترویج کردن", exEn: "Promote peace.", exFa: "صلح را ترویج کن." },
      { en: "prospect", pos: "n", fa: "چشم‌انداز", exEn: "A bright prospect.", exFa: "یک چشم‌انداز روشن." },
      { en: "prosperous", pos: "adj", fa: "مرفه", exEn: "A prosperous city.", exFa: "یک شهر مرفه." },
      { en: "pursue", pos: "v", fa: "دنبال کردن", exEn: "Pursue your dreams.", exFa: "رویاهایت را دنبال کن." },
      { en: "realistic", pos: "adj", fa: "واقع‌گرایانه", exEn: "Set realistic goals.", exFa: "اهداف واقع‌گرایانه تعیین کن." },
      { en: "recognize", pos: "v", fa: "تشخیص دادن", exEn: "I recognized him.", exFa: "من او را تشخیص دادم." }
    ]
  },
  // ==================== LESSON 40 ====================
  {
    id: 40,
    title: "درس ۴۰",
    theme: "مسئولیت و تعهد",
    words: [
      { en: "recommend", pos: "v", fa: "توصیه کردن", exEn: "I recommend it.", exFa: "من آن را توصیه می‌کنم." },
      { en: "recover", pos: "v", fa: "بهبود یافتن", exEn: "He recovered quickly.", exFa: "او سریع بهبود یافت." },
      { en: "reduce", pos: "v", fa: "کاهش دادن", exEn: "Reduce waste.", exFa: "زباله را کاهش بده." },
      { en: "reform", pos: "v/n", fa: "اصلاح کردن", exEn: "Reform the system.", exFa: "سیستم را اصلاح کن." },
      { en: "regulate", pos: "v", fa: "تنظیم کردن", exEn: "Regulate the traffic.", exFa: "ترافیک را تنظیم کن." },
      { en: "reject", pos: "v", fa: "رد کردن", exEn: "She rejected him.", exFa: "او او را رد کرد." },
      { en: "release", pos: "v", fa: "آزاد کردن", exEn: "Release the prisoner.", exFa: "زندانی را آزاد کن." },
      { en: "rely", pos: "v", fa: "اعتماد کردن", exEn: "I rely on you.", exFa: "من به تو اعتماد دارم." },
      { en: "resolve", pos: "v", fa: "حل کردن", exEn: "Resolve the issue.", exFa: "مشکل را حل کن." },
      { en: "resource", pos: "n", fa: "منبع", exEn: "Natural resources.", exFa: "منابع طبیعی." },
      { en: "respect", pos: "v/n", fa: "احترام", exEn: "Respect others.", exFa: "به دیگران احترام بگذار." },
      { en: "respond", pos: "v", fa: "پاسخ دادن", exEn: "I will respond.", exFa: "من پاسخ خواهم داد." }
    ]
  },
  // ==================== LESSON 41 ====================
  {
    id: 41,
    title: "درس ۴۱",
    theme: "توسعه پایدار",
    words: [
      { en: "restore", pos: "v", fa: "بازگرداندن", exEn: "Restore the building.", exFa: "ساختمان را بازگردان." },
      { en: "restrict", pos: "v", fa: "محدود کردن", exEn: "Restrict access.", exFa: "دسترسی را محدود کن." },
      { en: "revolution", pos: "n", fa: "انقلاب", exEn: "A revolution in technology.", exFa: "انقلابی در فناوری." },
      { en: "reward", pos: "v/n", fa: "پاداش", exEn: "Hard work is rewarded.", exFa: "کار سخت پاداش دارد." },
      { en: "rigid", pos: "adj", fa: "سخت‌گیر", exEn: "Rigid rules.", exFa: "قوانین سخت‌گیرانه." },
      { en: "sacrifice", pos: "v/n", fa: "فداکاری", exEn: "She made sacrifices.", exFa: "او فداکاری کرد." },
      { en: "secure", pos: "v/adj", fa: "ایمن کردن", exEn: "Secure the area.", exFa: "منطقه را ایمن کن." },
      { en: "severe", pos: "adj", fa: "شدید", exEn: "Severe weather.", exFa: "هوای شدید." },
      { en: "significance", pos: "n", fa: "اهمیت", exEn: "It has significance.", exFa: "اهمیت دارد." },
      { en: "sincere", pos: "adj", fa: "صادق", exEn: "A sincere apology.", exFa: "یک عذرخواهی صادقانه." },
      { en: "sole", pos: "adj", fa: "تنها", exEn: "The sole survivor.", exFa: "تنها بازمانده." },
      { en: "spontaneous", pos: "adj", fa: "خودجوش", exEn: "A spontaneous act.", exFa: "یک عمل خودجوش." }
    ]
  },
  // ==================== LESSON 42 ====================
  {
    id: 42,
    title: "درس ۴۲",
    theme: "پایان و موفقیت",
    words: [
      { en: "stable", pos: "adj", fa: "پایدار", exEn: "A stable economy.", exFa: "یک اقتصاد پایدار." },
      { en: "stimulate", pos: "v", fa: "تحریک کردن", exEn: "Stimulate growth.", exFa: "رشد را تحریک کن." },
      { en: "strategy", pos: "n", fa: "استراتژی", exEn: "A good strategy.", exFa: "یک استراتژی خوب." },
      { en: "substitute", pos: "v/n", fa: "جایگزین کردن", exEn: "Substitute sugar with honey.", exFa: "شکر را با عسل جایگزین کن." },
      { en: "sufficient", pos: "adj", fa: "کافی", exEn: "Sufficient evidence.", exFa: "شواهد کافی." },
      { en: "superior", pos: "adj", fa: "برتر", exEn: "Superior quality.", exFa: "کیفیت برتر." },
      { en: "survive", pos: "v", fa: "زنده ماندن", exEn: "Survive the crash.", exFa: "از سقوط جان سالم به در ببر." },
      { en: "suspect", pos: "v/n", fa: "مظنون بودن", exEn: "I suspect him.", exFa: "من به او مشکوکم." },
      { en: "suspend", pos: "v", fa: "معلق کردن", exEn: "Suspend classes.", exFa: "کلاس‌ها را تعطیل کن." },
      { en: "symbol", pos: "n", fa: "نماد", exEn: "A symbol of peace.", exFa: "نماد صلح." },
      { en: "temporary", pos: "adj", fa: "موقت", exEn: "A temporary solution.", exFa: "یک راه‌حل موقت." },
      { en: "tender", pos: "adj", fa: "لطیف", exEn: "A tender heart.", exFa: "دل لطیف." }
    ]
  }
];

// Flat list of all words for search and daily practice
const ALL_WORDS = WORDS.flatMap(l => l.words.map(w => ({ ...w, lessonId: l.id })));