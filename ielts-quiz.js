// 30代セラピスト向け IELTS必須英単語 50問マスターデータ
const allQuizData = [
  { word: "Alleviate", choices: ["悪化させる", "（痛みを）和らげる", "維持する", "診断する"], correct: 1 },
  { word: "Chronic", choices: ["急性の", "一時的な", "慢性の", "致命的な"], correct: 2 },
  { word: "Posture", choices: ["姿勢", "呼吸", "関節", "筋肉"], correct: 0 },
  { word: "Immigration", choices: ["観光", "移住・移住手続き", "留学", "就労手続き"], correct: 1 },
  { word: "Clavicle", choices: ["肩甲骨", "骨盤", "肋骨", "鎖骨"], correct: 3 },
  { word: "Acute", choices: ["急性の", "慢性の", "軽度の", "潜在的な"], correct: 0 },
  { word: "Inflammation", choices: ["骨折", "脱臼", "貧血", "炎症"], correct: 3 },
  { word: "Symptom", choices: ["原因", "治療法", "症状", "診断書"], correct: 2 },
  { word: "Therapist", choices: ["医師", "看護師", "薬剤師", "セラピスト・治療士"], correct: 3 },
  { word: "Permanent", choices: ["一時的な", "永久的な・永住の", "部分的な", "条件付きの"], correct: 1 },
  { word: "Residency", choices: ["旅行", "居住・永住権", "就労", "留学"], correct: 1 },
  { word: "Prerequisite", choices: ["必須条件", "選択科目", "禁止事項", "免除"], correct: 0 },
  { word: "Eligible", choices: ["資格のある", "不適格な", "経験豊富な", "一時的な"], correct: 0 },
  { word: "Spine", choices: ["鎖骨", "肋骨", "骨盤", "脊椎・背骨"], correct: 3 },
  { word: "Scapula", choices: ["肩甲骨", "頭蓋骨", "大腿骨", "骨盤"], correct: 0 },
  { word: "Pelvis", choices: ["背骨", "肋骨", "骨盤", "関節"], correct: 2 },
  { word: "Muscle", choices: ["腱", "筋肉", "骨", "皮膚"], correct: 1 },
  { word: "Joint", choices: ["関節", "筋肉", "神経", "血管"], correct: 0 },
  { word: "Ligament", choices: ["軟骨", "筋肉", "靭帯", "腱"], correct: 2 },
  { word: "Tendon", choices: ["腱", "靭帯", "神経", "血管"], correct: 0 },
  { word: "Numbness", choices: ["痛み", "痺れ", "腫れ", "痒み"], correct: 1 },
  { word: "Stiffness", choices: ["凝り・硬直", "弛緩", "疲労", "痙攣"], correct: 0 },
  { word: "Fatigue", choices: ["興奮", "緊張", "疲労", "回復"], correct: 2 },
  { word: "Prescription", choices: ["診断書", "処方箋", "紹介状", "領収書"], correct: 1 },
  { word: "Referral", choices: ["紹介（状）", "予約", "検査", "退院"], correct: 0 },
  { word: "Applicant", choices: ["面接官", "応募者・申請者", "雇用主", "労働者"], correct: 1 },
  { word: "Requirement", choices: ["推奨事項", "必要条件", "例外規定", "禁止事項"], correct: 1 },
  { word: "Certificate", choices: ["証明書・免許状", "契約書", "申請書", "履歴書"], correct: 0 },
  { word: "Assessment", choices: ["治療", "手術", "評価・査定", "リハビリ"], correct: 2 },
  { word: "Procedure", choices: ["手順・手続き", "結果", "原因", "中止"], correct: 0 },
  { word: "Therapeutic", choices: ["診断の", "予防の", "破壊的な", "治療上の・セラピー効果のある"], correct: 3 },
  { word: "Rehabilitation", choices: ["診察", "検査", "社会復帰・リハビリ", "カウンセリング"], correct: 2 },
  { word: "Spasm", choices: ["麻痺", "痙攣・引きつり", "炎症", "骨折"], correct: 1 },
  { word: "Tension", choices: ["弛緩", "疲労", "緊張・張り", "回復"], correct: 2 },
  { word: "Abdomen", choices: ["胸部", "背部", "臀部", "腹部"], correct: 3 },
  { word: "Lumbar", choices: ["頸部の", "胸部の", "腰椎の・腰の", "仙骨の"], correct: 2 },
  { word: "Cervical", choices: ["頸部の・首の", "腰の", "足の", "手の"], correct: 0 },
  { word: "Prone", choices: ["仰向けの", "横向きの", "うつ伏せの", "座位の"], correct: 2 },
  { word: "Supine", choices: ["うつ伏せの", "仰向けの", "横向きの", "倒立の"], correct: 1 },
  { word: "Lateral", choices: ["中央の", "側面の・横向きの", "垂直の", "斜めの"], correct: 1 },
  { word: "Consultation", choices: ["施術", "検査", "カウンセリング・診察", "支払い"], correct: 2 },
  { word: "Consent", choices: ["拒否", "同意", "保留", "契約"], correct: 1 },
  { word: "Liability", choices: ["利益", "権利", "免責", "法的責任"], correct: 3 },
  { word: "Insurance", choices: ["税金", "年金", "保険", "給与"], correct: 2 },
  { word: "Regulation", choices: ["自由化", "規制・規則", "提案", "推奨"], correct: 1 },
  { word: "Authorize", choices: ["禁止する", "延期する", "権限を与える・公認する", "調査する"], correct: 2 },
  { word: "Exempt", choices: ["必須の", "免除された", "禁止された", "追加された"], correct: 1 },
  { word: "Extension", choices: ["短縮", "中止", "変更", "延長"], correct: 3 },
  { word: "Valid", choices: ["期限切れの", "無効な", "有効な", "一時的な"], correct: 2 },
  { word: "Submit", choices: ["撤回する", "提出する", "保管する", "破棄する"], correct: 1 }
];

let quizData = []; // ここにランダムに選ばれた10問が入る
let currentIdx = 0;
let score = 0;
let answered = false;

// 50問から10問をランダムに抽出してクイズを初期化する関数
function initQuiz() {
  // 配列をシャッフル
  const shuffled = [...allQuizData].sort(() => 0.5 - Math.random());
  // 先頭の10問を今回のクイズデータとしてセット
  quizData = shuffled.slice(0, 10);
  
  currentIdx = 0;
  score = 0;
  document.getElementById("quiz-score-live").innerText = `正解: ${score}`;
  
  document.getElementById("quiz-card").classList.remove("hidden");
  document.getElementById("result-card").classList.add("hidden");
  
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const currentData = quizData[currentIdx];
  
  document.getElementById("quiz-count").innerText = `Question ${currentIdx + 1} of ${quizData.length}`;
  document.getElementById("progress-fill").style.width = `${(currentIdx / quizData.length) * 100}%`;
  document.getElementById("question-word").innerText = currentData.word;
  
  const container = document.getElementById("choices-container");
  container.innerHTML = "";
  
  currentData.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn-quiz-choice";
    btn.innerText = choice;
    btn.onclick = () => selectChoice(i);
    container.appendChild(btn);
  });

  document.getElementById("feedback").className = "quiz-feedback";
  document.getElementById("feedback").style.display = "none";
  document.getElementById("next-btn").classList.add("hidden");
}

function selectChoice(selectedIdx) {
  if (answered) return;
  answered = true;
  
  const currentData = quizData[currentIdx];
  const buttons = document.getElementById("choices-container").children;
  const feedback = document.getElementById("feedback");
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    if (i === currentData.correct) {
      buttons[i].classList.add("correct");
    }
  }

  if (selectedIdx === currentData.correct) {
    score++;
    document.getElementById("quiz-score-live").innerText = `正解: ${score}`;
    feedback.innerText = "✨ 正解です！";
    feedback.className = "quiz-feedback is-correct show";
  } else {
    buttons[selectedIdx].classList.add("incorrect");
    feedback.innerText = `😢 不正解（正解: ${currentData.choices[currentData.correct]}）`;
    feedback.className = "quiz-feedback is-incorrect show";
  }

  document.getElementById("next-btn").classList.remove("hidden");
}

function handleNext() {
  currentIdx++;
  if (currentIdx < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("progress-fill").style.width = "100%";
    document.getElementById("quiz-card").classList.add("hidden");
    document.getElementById("result-card").classList.remove("hidden");
    document.getElementById("final-score").innerText = `${score} / ${quizData.length}`;
  }
}

// ページ読み込み時にクイズを開始
window.onload = initQuiz;