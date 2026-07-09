/* =========================================================
   モード1: セラピー現場でよく使う英語フレーズ 50問 (短文)
   ========================================================= */
const QUESTION_BANK = [
    // ---- 体位・姿勢 (position) ----
    { en: "Please lie on your back.", ja: "仰向けになってください", cat: "position" },
    { en: "Please lie on your stomach.", ja: "うつ伏せになってください", cat: "position" },
    { en: "Please lie on your side.", ja: "横向きになってください", cat: "position" },
    { en: "Please sit up straight.", ja: "背筋を伸ばして座ってください", cat: "position" },
    { en: "Please stand up slowly.", ja: "ゆっくり立ち上がってください", cat: "position" },
    { en: "Please bend your knees.", ja: "膝を曲げてください", cat: "position" },
    { en: "Please straighten your leg.", ja: "脚をまっすぐ伸ばしてください", cat: "position" },
    { en: "Please turn your head to the left.", ja: "頭を左に向けてください", cat: "position" },
    { en: "Please roll onto your side.", ja: "横向きに転がってください", cat: "position" },
    { en: "Please keep this position.", ja: "この姿勢を保ってください", cat: "position" },
  
    // ---- 動作 (movement) ----
    { en: "Please raise your arm.", ja: "腕を上げてください", cat: "movement" },
    { en: "Please lower your arm slowly.", ja: "腕をゆっくり下げてください", cat: "movement" },
    { en: "Please make a fist.", ja: "拳を握ってください", cat: "movement" },
    { en: "Please open your hand.", ja: "手を開いてください", cat: "movement" },
    { en: "Please push against my hand.", ja: "私の手を押してください", cat: "movement" },
    { en: "Please pull your knee toward your chest.", ja: "膝を胸に引き寄せてください", cat: "movement" },
    { en: "Try to touch your toes.", ja: "つま先に触れてみてください", cat: "movement" },
    { en: "Please walk slowly toward me.", ja: "ゆっくり私の方に歩いてください", cat: "movement" },
    { en: "Please take a small step forward.", ja: "小さく一歩前に出てください", cat: "movement" },
    { en: "Please relax your shoulders.", ja: "肩の力を抜してください", cat: "movement" },
  
    // ---- 痛み・感覚の確認 (assessment) ----
    { en: "Does it hurt here?", ja: "ここは痛みますか?", cat: "assessment" },
    { en: "Can you feel this?", ja: "これを感じますか?", cat: "assessment" },
    { en: "Is this area numb?", ja: "この部分はしびれていますか?", cat: "assessment" },
    { en: "How would you rate your pain from one to ten?", ja: "痛みを1から10で評価してください", cat: "assessment" },
    { en: "Does this movement cause pain?", ja: "この動きで痛みはありますか?", cat: "assessment" },
    { en: "Is the pain sharp or dull?", ja: "痛みは鋭いですか、鈍いですか?", cat: "assessment" },
    { en: "When did the pain start?", ja: "痛みはいつから始まりましたか?", cat: "assessment" },
    { en: "Does it hurt when I press here?", ja: "ここを押すと痛みますか?", cat: "assessment" },
    { en: "Is this more painful in the morning or at night?", ja: "朝と夜、どちらが痛みますか?", cat: "assessment" },
    { en: "Can you point to where it hurts?", ja: "どこが痛むか指してもらえますか?", cat: "assessment" },
  
    // ---- バイタル・検査 (vitals) ----
    { en: "I'm going to check your blood pressure.", ja: "血圧を測ります", cat: "vitals" },
    { en: "Please take a deep breath.", ja: "深呼吸をしてください", cat: "vitals" },
    { en: "I'm going to check your pulse.", ja: "脈拍を測ります", cat: "vitals" },
    { en: "Please hold your breath for a moment.", ja: "少しの間、息を止めてください", cat: "vitals" },
    { en: "I'm going to measure your temperature.", ja: "体温を測ります", cat: "vitals" },
    { en: "Please breathe normally.", ja: "普通に呼吸してください", cat: "vitals" },
    { en: "I need to check your reflexes.", ja: "反射を確認します", cat: "vitals" },
    { en: "Please cough for me.", ja: "咳をしてもらえますか", cat: "vitals" },
    { en: "I'm going to listen to your chest.", ja: "胸の音を聞きます", cat: "vitals" },
    { en: "Please relax your whole body.", ja: "全身の力を抜いてください", cat: "vitals" },
  
    // ---- 対話・カウンセリング (counseling) ----
    { en: "How are you feeling today?", ja: "今日の気分はいかがですか?", cat: "counseling" },
    { en: "Can you tell me more about that?", ja: "それについてもう少し教えてください", cat: "counseling" },
    { en: "Are you feeling stressed lately?", ja: "最近ストレスを感じていますか?", cat: "counseling" },
    { en: "What brings you here today?", ja: "今日はどうされましたか?", cat: "counseling" },
    { en: "Take your time, there's no rush.", ja: "焦らなくて大丈夫ですよ", cat: "counseling" },
    { en: "Do you have any concerns about the treatment?", ja: "治療について何か心配なことはありますか?", cat: "counseling" },
    { en: "Let's set a goal for next week.", ja: "来週までの目標を決めましょう", cat: "counseling" },
    { en: "You're doing great, keep going.", ja: "よくできています、続けましょう", cat: "counseling" },
    { en: "Please let me know if it becomes too painful.", ja: "痛みが強くなったら教えてください", cat: "counseling" },
    { en: "We'll take it step by step.", ja: "一歩ずつ進めていきましょう", cat: "counseling" },
];

/* =========================================================
   【新設】モード2: 臨床現場必須の重要英単語 50問 (解剖学・症状表現)
   ========================================================= */
const WORD_BANK = [
    // -- 筋肉・骨・部位 (anatomy) --
    { en: "Trapezius", ja: "僧帽筋", cat: "anatomy" },
    { en: "Scapula", ja: "肩甲骨", cat: "anatomy" },
    { en: "Lumbar", ja: "腰椎・腰の", cat: "anatomy" },
    { en: "Gluteus maximus", ja: "大臀筋", cat: "anatomy" },
    { en: "Hamstrings", ja: "ハムストリングス（大腿二頭筋群）", cat: "anatomy" },
    { en: "Piriformis", ja: "梨状筋", cat: "anatomy" },
    { en: "Rotator cuff", ja: "回旋筋腱板（ローテーターカフ）", cat: "anatomy" },
    { en: "Cervical", ja: "頸椎・首の", cat: "anatomy" },
    { en: "Pelvis", ja: "骨盤", cat: "anatomy" },
    { en: "Clavicle", ja: "鎖骨", cat: "anatomy" },
    { en: "Gastrocnemius", ja: "腓腹筋（ふくらはぎ）", cat: "anatomy" },
    { en: "Quadriceps", ja: "大腿四頭筋", cat: "anatomy" },
    { en: "Spine", ja: "脊椎（背骨）", cat: "anatomy" },
    { en: "Psoas major", ja: "大腰筋", cat: "anatomy" },
    { en: "Latissimus dorsi", ja: "広背筋", cat: "anatomy" },

    // -- 症状・状態 (symptoms) --
    { en: "Throbbing pain", ja: "ズキズキする波のある痛み", cat: "symptoms" },
    { en: "Dull ache", ja: "重い痛み・鈍痛", cat: "symptoms" },
    { en: "Sharp pain", ja: "ピキッとする鋭い痛み", cat: "symptoms" },
    { en: "Numbness", ja: "しびれ・感覚麻痺", cat: "symptoms" },
    { en: "Stiffness", ja: "凝り・張り・強張（こわば）り", cat: "symptoms" },
    { en: "Muscle cramp", ja: "筋肉の痙攣・足のつり", cat: "symptoms" },
    { en: "Sprain", ja: "捻挫（ねんざ）", cat: "symptoms" },
    { en: "Strain", ja: "肉離れ・筋違え", cat: "symptoms" },
    { en: "Knot", ja: "凝りのかたまり・結節", cat: "symptoms" },
    { en: "Swelling", ja: "腫れ・浮腫（むくみ）", cat: "symptoms" },
    { en: "Soreness", ja: "筋肉痛・（使いすぎによる）ジンジンする痛み", cat: "symptoms" },
    { en: "Inflammation", ja: "炎症", cat: "symptoms" },
    { en: "Chronic pain", ja: "慢性的な痛み", cat: "symptoms" },
    { en: "Acute pain", ja: "急性の痛み", cat: "symptoms" },
    { en: "Tightness", ja: "突っ張り・緊張感", cat: "symptoms" },

    // -- 施術・アクション (techniques) --
    { en: "Palpate", ja: "触診する・手で触って診る", cat: "techniques" },
    { en: "Apply pressure", ja: "圧をかける・指圧する", cat: "techniques" },
    { en: "Effleurage", ja: "軽擦法（なでさする基本動作）", cat: "techniques" },
    { en: "Kneading", ja: "揉捏法（こねるように揉む動作）", cat: "techniques" },
    { en: "Deep tissue", ja: "深層組織（への強いアプローチ）", cat: "techniques" },
    { en: "Stretch", ja: "ストレッチする・伸ばす", cat: "techniques" },
    { en: "Flex", ja: "（関節などを）曲げる・屈曲させる", cat: "techniques" },
    { en: "Extend", ja: "（関節などを）伸ばす・伸展させる", cat: "techniques" },
    { en: "Rotate", ja: "回旋させる・回す", cat: "techniques" },
    { en: "Release", ja: "（緊張を）解放する・緩める", cat: "techniques" },

    // -- 院内会話・運営 (clinic) --
    { en: "Draping", ja: "ドレーピング（シーツで露出部以外を覆う技術）", cat: "clinic" },
    { en: "Consent form", ja: "同意書・インフォームドコンセント", cat: "clinic" },
    { en: "Intake form", ja: "問診票・初診カルテ", cat: "clinic" },
    { en: "Medical history", ja: "既往歴・病歴", cat: "clinic" },
    { en: "Insurance claim", ja: "保険請求", cat: "clinic" },
    { en: "Contraindication", ja: "禁忌（施術を行ってはいけない状態）", cat: "clinic" },
    { en: "Referral", ja: "（医師からの）紹介状", cat: "clinic" },
    { en: "Appointment", ja: "予約", cat: "clinic" },
    { en: "Prone position", ja: "腹臥位（うつ伏せ姿勢）", cat: "clinic" },
    { en: "Supine position", ja: "仰臥位（仰向け姿勢）", cat: "clinic" }
];

/* Fisher–Yates shuffle (共通シャッフルロジック) */
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * クイズセットを構築する関数
 * @param {string} mode - "phrase" (短文) または "word" (単語単体)
 * @param {number} n - 出題問数 (デフォルト10問)
 */
function buildQuizSet(mode = "phrase", n = 10) {
  // モードに応じて使用するデータバンクを切り替え
  const currentBank = (mode === "word") ? WORD_BANK : QUESTION_BANK;
  
  const picked = shuffleArray(currentBank).slice(0, n);
  return picked.map((q) => {
    // 誤答(ディストラクター)を同じデータバンクの同カテゴリから抽出
    const sameCategoryOthers = currentBank.filter(
      (item) => item.cat === q.cat && item.ja !== q.ja
    );
    
    const distractors = shuffleArray(sameCategoryOthers)
      .slice(0, 3)
      .map((d) => d.ja);
      
    // 4つの選択肢をシャッフル
    const choices = shuffleArray([q.ja, ...distractors]);
    return { en: q.en, answer: q.ja, choices };
  });
}
