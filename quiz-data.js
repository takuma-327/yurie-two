/* =========================================================
   セラピー現場でよく使う英語フレーズ 50問
   カテゴリごとに10問ずつ。誤答選択肢は同じカテゴリ内の
   他の正解からランダムに3つ選び、紛らわしさを保つ。
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
    { en: "Please relax your shoulders.", ja: "肩の力を抜いてください", cat: "movement" },
  
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
  
  /* Fisher–Yates shuffle */
  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  /**
   * n問をランダムに選び、各問に4択(正解1＋同カテゴリの誤答3)を付与して返す
   */
  function buildQuizSet(n = 10) {
    const picked = shuffleArray(QUESTION_BANK).slice(0, n);
    return picked.map((q) => {
      const sameCategoryOthers = QUESTION_BANK.filter(
        (item) => item.cat === q.cat && item.ja !== q.ja
      );
      const distractors = shuffleArray(sameCategoryOthers)
        .slice(0, 3)
        .map((d) => d.ja);
      const choices = shuffleArray([q.ja, ...distractors]);
      return { en: q.en, answer: q.ja, choices };
    });
  }
