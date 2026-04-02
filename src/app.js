const wordPairs = [
  { korean: "강아지", english: "puppy" },
  { korean: "고양이", english: "cat" },
  { korean: "토끼", english: "rabbit" },
  { korean: "호랑이", english: "tiger" },
  { korean: "사자", english: "lion" },
  { korean: "곰", english: "bear" },
  { korean: "여우", english: "fox" },
  { korean: "원숭이", english: "monkey" },
  { korean: "코끼리", english: "elephant" },
  { korean: "기린", english: "giraffe" },
  { korean: "얼룩말", english: "zebra" },
  { korean: "하마", english: "hippo" },
  { korean: "돼지", english: "pig" },
  { korean: "소", english: "cow" },
  { korean: "말", english: "horse" },
  { korean: "닭", english: "chicken" },
  { korean: "오리", english: "duck" },
  { korean: "참새", english: "sparrow" },
  { korean: "독수리", english: "eagle" },
  { korean: "펭귄", english: "penguin" },
  { korean: "돌고래", english: "dolphin" },
  { korean: "고래", english: "whale" },
  { korean: "상어", english: "shark" },
  { korean: "문어", english: "octopus" },
  { korean: "오징어", english: "squid" },
  { korean: "거북이", english: "turtle" },
  { korean: "개구리", english: "frog" },
  { korean: "뱀", english: "snake" },
  { korean: "악어", english: "crocodile" },
  { korean: "판다", english: "panda" },
  { korean: "해", english: "sun" },
  { korean: "달", english: "moon" },
  { korean: "별", english: "star" },
  { korean: "하늘", english: "sky" },
  { korean: "구름", english: "cloud" },
  { korean: "비", english: "rain" },
  { korean: "눈", english: "snow" },
  { korean: "바람", english: "wind" },
  { korean: "번개", english: "lightning" },
  { korean: "무지개", english: "rainbow" },
  { korean: "산", english: "mountain" },
  { korean: "강", english: "river" },
  { korean: "바다", english: "sea" },
  { korean: "폭포", english: "waterfall" },
  { korean: "나무", english: "tree" },
  { korean: "꽃", english: "flower" },
  { korean: "잎", english: "leaf" },
  { korean: "씨앗", english: "seed" },
  { korean: "숲", english: "forest" },
  { korean: "섬", english: "island" },
  { korean: "파도", english: "wave" },
  { korean: "노을", english: "sunset" },
  { korean: "아침", english: "morning" },
  { korean: "밤", english: "night" },
  { korean: "봄", english: "spring" },
  { korean: "여름", english: "summer" },
  { korean: "가을", english: "autumn" },
  { korean: "겨울", english: "winter" },
  { korean: "책", english: "book" },
  { korean: "공책", english: "notebook" },
  { korean: "연필", english: "pencil" },
  { korean: "지우개", english: "eraser" },
  { korean: "가방", english: "bag" },
  { korean: "책상", english: "desk" },
  { korean: "의자", english: "chair" },
  { korean: "시계", english: "clock" },
  { korean: "안경", english: "glasses" },
  { korean: "우산", english: "umbrella" },
  { korean: "신발", english: "shoes" },
  { korean: "모자", english: "hat" },
  { korean: "컵", english: "cup" },
  { korean: "접시", english: "plate" },
  { korean: "숟가락", english: "spoon" },
  { korean: "포크", english: "fork" },
  { korean: "냄비", english: "pot" },
  { korean: "거울", english: "mirror" },
  { korean: "빗", english: "comb" },
  { korean: "칫솔", english: "toothbrush" },
  { korean: "비누", english: "soap" },
  { korean: "수건", english: "towel" },
  { korean: "침대", english: "bed" },
  { korean: "베개", english: "pillow" },
  { korean: "문", english: "door" },
  { korean: "창문", english: "window" },
  { korean: "전화기", english: "telephone" },
  { korean: "리모컨", english: "remote control" },
  { korean: "공", english: "ball" },
  { korean: "인형", english: "doll" },
  { korean: "자전거", english: "bicycle" },
  { korean: "가위", english: "scissors" },
  { korean: "자", english: "ruler" },
  { korean: "물병", english: "water bottle" },
  { korean: "밥", english: "rice" },
  { korean: "김치", english: "kimchi" },
  { korean: "국수", english: "noodles" },
  { korean: "라면", english: "ramen" },
  { korean: "떡", english: "rice cake" },
  { korean: "빵", english: "bread" },
  { korean: "케이크", english: "cake" },
  { korean: "쿠키", english: "cookie" },
  { korean: "사과", english: "apple" },
  { korean: "바나나", english: "banana" },
  { korean: "딸기", english: "strawberry" },
  { korean: "포도", english: "grapes" },
  { korean: "수박", english: "watermelon" },
  { korean: "귤", english: "tangerine" },
  { korean: "복숭아", english: "peach" },
  { korean: "감자", english: "potato" },
  { korean: "고구마", english: "sweet potato" },
  { korean: "당근", english: "carrot" },
  { korean: "오이", english: "cucumber" },
  { korean: "토마토", english: "tomato" },
  { korean: "계란", english: "egg" },
  { korean: "우유", english: "milk" },
  { korean: "치즈", english: "cheese" },
  { korean: "피자", english: "pizza" },
  { korean: "햄버거", english: "hamburger" },
  { korean: "만두", english: "dumpling" },
  { korean: "김밥", english: "gimbap" },
  { korean: "초밥", english: "sushi" },
  { korean: "요구르트", english: "yogurt" },
  { korean: "아이스크림", english: "ice cream" },
  { korean: "초콜릿", english: "chocolate" },
  { korean: "팝콘", english: "popcorn" },
  { korean: "집", english: "house" },
  { korean: "학교", english: "school" },
  { korean: "교실", english: "classroom" },
  { korean: "운동장", english: "playground" },
  { korean: "놀이터", english: "play area" },
  { korean: "도서관", english: "library" },
  { korean: "공원", english: "park" },
  { korean: "동물원", english: "zoo" },
  { korean: "수영장", english: "swimming pool" },
  { korean: "마트", english: "supermarket" },
  { korean: "병원", english: "hospital" },
  { korean: "약국", english: "pharmacy" },
  { korean: "편의점", english: "convenience store" },
  { korean: "식당", english: "restaurant" },
  { korean: "카페", english: "cafe" },
  { korean: "영화관", english: "movie theater" },
  { korean: "우체국", english: "post office" },
  { korean: "은행", english: "bank" },
  { korean: "박물관", english: "museum" },
  { korean: "공항", english: "airport" },
  { korean: "자동차", english: "car" },
  { korean: "버스", english: "bus" },
  { korean: "택시", english: "taxi" },
  { korean: "경찰차", english: "police car" },
  { korean: "소방차", english: "fire truck" },
  { korean: "구급차", english: "ambulance" },
  { korean: "오토바이", english: "motorcycle" },
  { korean: "킥보드", english: "scooter" },
  { korean: "지하철", english: "subway" },
  { korean: "기차", english: "train" },
  { korean: "비행기", english: "airplane" },
  { korean: "헬리콥터", english: "helicopter" },
  { korean: "배", english: "boat" },
  { korean: "잠수함", english: "submarine" },
  { korean: "트럭", english: "truck" },
  { korean: "썰매", english: "sled" },
  { korean: "열기구", english: "hot air balloon" },
  { korean: "우주선", english: "spaceship" },
  { korean: "스케이트보드", english: "skateboard" },
  { korean: "선생님", english: "teacher" },
  { korean: "의사", english: "doctor" },
  { korean: "간호사", english: "nurse" },
  { korean: "경찰관", english: "police officer" },
  { korean: "소방관", english: "firefighter" },
  { korean: "요리사", english: "chef" },
  { korean: "농부", english: "farmer" },
  { korean: "화가", english: "painter" },
  { korean: "가수", english: "singer" },
  { korean: "배우", english: "actor" },
  { korean: "작가", english: "writer" },
  { korean: "과학자", english: "scientist" },
  { korean: "우주비행사", english: "astronaut" },
  { korean: "조종사", english: "pilot" },
  { korean: "기자", english: "reporter" },
  { korean: "약사", english: "pharmacist" },
  { korean: "건축가", english: "architect" },
  { korean: "프로그래머", english: "programmer" },
  { korean: "마술사", english: "magician" },
  { korean: "운동선수", english: "athlete" },
  { korean: "축구", english: "soccer" },
  { korean: "농구", english: "basketball" },
  { korean: "야구", english: "baseball" },
  { korean: "배구", english: "volleyball" },
  { korean: "수영", english: "swimming" },
  { korean: "달리기", english: "running" },
  { korean: "줄넘기", english: "jump rope" },
  { korean: "태권도", english: "taekwondo" },
  { korean: "탁구", english: "table tennis" },
  { korean: "배드민턴", english: "badminton" },
  { korean: "테니스", english: "tennis" },
  { korean: "골프", english: "golf" },
  { korean: "양궁", english: "archery" },
  { korean: "체조", english: "gymnastics" },
  { korean: "스케이트", english: "skating" },
  { korean: "스키", english: "skiing" },
  { korean: "등산", english: "hiking" },
  { korean: "요가", english: "yoga" },
  { korean: "마라톤", english: "marathon" },
  { korean: "권투", english: "boxing" },
];

const quizModes = [
  { key: "korean", label: "한국어 문제", description: "제시어가 한국어로 나와요." },
  { key: "english", label: "영어 문제", description: "제시어가 영어로 나와요." },
];

const timeOptions = [
  { key: "unlimited", label: "무제한", seconds: null },
  { key: "1m", label: "1분", seconds: 60 },
  { key: "3m", label: "3분", seconds: 180 },
  { key: "5m", label: "5분", seconds: 300 },
];

function shuffle(items) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }

  return next;
}

const app = document.querySelector("#app");

const state = {
  screen: "start",
  selectedModeKey: quizModes[0].key,
  selectedTimeKey: timeOptions[0].key,
  words: [],
  currentIndex: 0,
  roundCount: 0,
  correctCount: 0,
  remainingSeconds: null,
};

let timerId = null;

function getSelectedMode() {
  return quizModes.find((mode) => mode.key === state.selectedModeKey) || quizModes[0];
}

function getSelectedTimeOption() {
  return timeOptions.find((option) => option.key === state.selectedTimeKey) || timeOptions[0];
}

function getWordsForMode(modeKey) {
  return wordPairs.map((pair) => (modeKey === "english" ? pair.english : pair.korean));
}

function isUnlimitedMode() {
  return getSelectedTimeOption().seconds === null;
}

function clearTimer() {
  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

function formatTime(seconds) {
  if (seconds === null) return "무제한";

  const minutes = Math.floor(seconds / 60);
  const restSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(restSeconds).padStart(2, "0")}`;
}

function finishGame() {
  clearTimer();
  state.screen = "result";
  render();
}

function startTimerIfNeeded() {
  const timeOption = getSelectedTimeOption();
  state.remainingSeconds = timeOption.seconds;

  clearTimer();

  if (timeOption.seconds === null) {
    return;
  }

  timerId = window.setInterval(() => {
    if (state.screen !== "play") {
      clearTimer();
      return;
    }

    if (state.remainingSeconds === null) {
      return;
    }

    if (state.remainingSeconds <= 1) {
      state.remainingSeconds = 0;
      finishGame();
      return;
    }

    state.remainingSeconds -= 1;
    render();
  }, 1000);
}

function startGame() {
  const words = shuffle(getWordsForMode(state.selectedModeKey));
  state.words = isUnlimitedMode() ? words.slice(0, 10) : words;
  state.currentIndex = 0;
  state.roundCount = 1;
  state.correctCount = 0;
  state.screen = "play";
  startTimerIfNeeded();
  render();
}

function goToNextWord(countAsCorrect) {
  if (countAsCorrect) {
    state.correctCount += 1;
  }

  const unlimitedMode = isUnlimitedMode();
  const isLastWord = state.currentIndex >= state.words.length - 1;

  if (unlimitedMode && isLastWord) {
    finishGame();
    return;
  }

  if (!unlimitedMode && isLastWord) {
    state.words = shuffle(getWordsForMode(state.selectedModeKey));
    state.currentIndex = 0;
  } else {
    state.currentIndex += 1;
  }

  state.roundCount += 1;
  render();
}

function resetGame() {
  clearTimer();
  state.screen = "start";
  state.words = [];
  state.currentIndex = 0;
  state.roundCount = 0;
  state.correctCount = 0;
  state.remainingSeconds = null;
  render();
}

function quitGame() {
  const shouldQuit = window.confirm("지금 게임을 그만할까요?");
  if (!shouldQuit) return;

  resetGame();
}

function renderStartScreen() {
  const modeButtons = quizModes
    .map((mode) => {
      const selectedClass = mode.key === state.selectedModeKey ? "is-selected" : "";

      return `
        <button
          type="button"
          class="mode-button ${selectedClass}"
          data-mode-key="${mode.key}"
        >
          ${mode.label}
        </button>
      `;
    })
    .join("");

  const timeButtons = timeOptions
    .map((option) => {
      const selectedClass = option.key === state.selectedTimeKey ? "is-selected" : "";

      return `
        <button
          type="button"
          class="time-button ${selectedClass}"
          data-time-key="${option.key}"
        >
          ${option.label}
        </button>
      `;
    })
    .join("");

  const selectedMode = getSelectedMode();

  return `
    <section class="screen screen-start">
      <div class="stack">
        <span class="eyebrow">2인용 단어 게임</span>
        <div class="stack">
          <h1 class="hero-title">말로 설명하고<br />친구와 맞혀요</h1>
          <p class="hero-text">
            카테고리 없이 섞인 제시어 10개가 하나씩 나와요.
            <strong>한국어 문제</strong>와 <strong>영어 문제</strong> 중 하나를 고르고 시작하면 돼요.
          </p>
        </div>
        <div class="stack">
          <p class="screen-label">문제 언어를 골라요</p>
          <div class="mode-grid">${modeButtons}</div>
          <p class="helper-text">${selectedMode.description}</p>
        </div>
        <div class="stack">
          <p class="screen-label">시간을 골라요</p>
          <div class="time-grid">${timeButtons}</div>
        </div>
        <button type="button" class="primary-button" data-action="start">시작하기</button>
      </div>
    </section>
  `;
}

function renderPlayScreen() {
  const mode = getSelectedMode();
  const word = state.words[state.currentIndex] || "";
  const timeLabel = formatTime(state.remainingSeconds);
  const progressLabel = isUnlimitedMode() ? `${state.currentIndex + 1} / 10` : `${state.roundCount}번`;

  return `
    <section class="screen screen-play">
      <header class="play-header">
        <div>
          <p class="screen-label">${mode.label}</p>
          <h2 class="screen-title">지금 제시어를 설명해요</h2>
        </div>
        <button type="button" class="icon-button" data-action="quit" aria-label="게임 종료">
          <span class="icon-close" aria-hidden="true">
            <span></span>
            <span></span>
          </span>
        </button>
      </header>

      <div class="play-status-grid">
        <div class="play-meta">
          <p class="helper-text">순서</p>
          <div class="status-chip">${progressLabel}</div>
        </div>
        <div class="play-meta">
          <p class="helper-text">남은 시간</p>
          <div class="status-chip">${timeLabel}</div>
        </div>
        <div class="play-meta">
          <p class="helper-text">맞춘 개수</p>
          <div class="status-chip">${state.correctCount}개</div>
        </div>
      </div>

      <div class="word-card">${word}</div>

      <div class="play-footer">
        <button type="button" class="action-button correct" data-action="correct">정답</button>
        <button type="button" class="action-button skip" data-action="next">다음</button>
      </div>
    </section>
  `;
}

function renderResultScreen() {
  const timeOption = getSelectedTimeOption();
  const mode = getSelectedMode();

  return `
    <section class="screen screen-result">
      <header class="result-header">
        <div>
          <p class="screen-label">결과 보기</p>
          <h2 class="screen-title">이번 게임 결과예요</h2>
        </div>
      </header>

      <div class="result-card">
        <p class="helper-text">${mode.label}</p>
        <p class="helper-text">${timeOption.label} 모드</p>
        <p class="helper-text">${isUnlimitedMode() ? "총 10개 중" : `총 ${state.roundCount}문제 진행`}</p>
        <p class="result-score">${state.correctCount}개</p>
        <p class="result-text">맞혔어요</p>
        <div class="result-actions">
          <button type="button" class="restart-button" data-action="restart">다시 하기</button>
        </div>
      </div>
    </section>
  `;
}

function bindEvents() {
  app.querySelectorAll("[data-mode-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedModeKey = button.dataset.modeKey || state.selectedModeKey;
      render();
    });
  });

  app.querySelectorAll("[data-time-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedTimeKey = button.dataset.timeKey || state.selectedTimeKey;
      render();
    });
  });

  const startButton = app.querySelector('[data-action="start"]');
  const correctButton = app.querySelector('[data-action="correct"]');
  const nextButton = app.querySelector('[data-action="next"]');
  const restartButton = app.querySelector('[data-action="restart"]');
  const quitButton = app.querySelector('[data-action="quit"]');

  if (startButton) startButton.addEventListener("click", startGame);
  if (correctButton) correctButton.addEventListener("click", () => goToNextWord(true));
  if (nextButton) nextButton.addEventListener("click", () => goToNextWord(false));
  if (restartButton) restartButton.addEventListener("click", resetGame);
  if (quitButton) quitButton.addEventListener("click", quitGame);
}

function render() {
  if (!app) return;

  if (state.screen === "start") {
    app.innerHTML = renderStartScreen();
  } else if (state.screen === "play") {
    app.innerHTML = renderPlayScreen();
  } else {
    app.innerHTML = renderResultScreen();
  }

  bindEvents();
}

render();
