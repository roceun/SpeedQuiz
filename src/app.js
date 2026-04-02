const categories = [
  {
    key: "animals",
    label: "동물",
    words: [
      "강아지",
      "고양이",
      "토끼",
      "호랑이",
      "사자",
      "곰",
      "여우",
      "원숭이",
      "코끼리",
      "기린",
      "얼룩말",
      "하마",
      "돼지",
      "소",
      "말",
      "닭",
      "오리",
      "병아리",
      "참새",
      "독수리",
      "펭귄",
      "돌고래",
      "고래",
      "상어",
      "문어",
      "오징어",
      "거북이",
      "개구리",
      "뱀",
      "악어",
      "사슴",
      "다람쥐",
      "캥거루",
      "판다",
      "늑대",
    ],
  },
  {
    key: "nature",
    label: "자연",
    words: [
      "해",
      "달",
      "별",
      "하늘",
      "구름",
      "비",
      "눈",
      "바람",
      "번개",
      "무지개",
      "산",
      "들판",
      "강",
      "바다",
      "폭포",
      "나무",
      "꽃",
      "잎",
      "씨앗",
      "흙",
      "돌",
      "모래",
      "숲",
      "섬",
      "파도",
      "노을",
      "아침",
      "밤",
      "봄",
      "여름",
      "가을",
      "겨울",
      "이슬",
      "안개",
      "햇빛",
    ],
  },
  {
    key: "objects",
    label: "사물",
    words: [
      "책",
      "공책",
      "연필",
      "지우개",
      "가방",
      "책상",
      "의자",
      "시계",
      "안경",
      "우산",
      "신발",
      "모자",
      "컵",
      "접시",
      "숟가락",
      "포크",
      "냄비",
      "거울",
      "빗",
      "칫솔",
      "비누",
      "수건",
      "침대",
      "베개",
      "문",
      "창문",
      "전화기",
      "리모컨",
      "공",
      "인형",
      "자전거",
      "가위",
      "풀",
      "자",
      "물병",
    ],
  },
  {
    key: "foods",
    label: "음식",
    words: [
      "밥",
      "김치",
      "국수",
      "라면",
      "떡",
      "빵",
      "케이크",
      "쿠키",
      "사과",
      "바나나",
      "딸기",
      "포도",
      "수박",
      "귤",
      "복숭아",
      "감",
      "옥수수",
      "감자",
      "고구마",
      "당근",
      "오이",
      "토마토",
      "계란",
      "우유",
      "치즈",
      "피자",
      "햄버거",
      "만두",
      "김밥",
      "주먹밥",
      "초밥",
      "요구르트",
      "아이스크림",
      "초콜릿",
      "팝콘",
    ],
  },
  {
    key: "places",
    label: "장소",
    words: [
      "집",
      "학교",
      "교실",
      "운동장",
      "놀이터",
      "도서관",
      "공원",
      "동물원",
      "수영장",
      "마트",
      "시장",
      "병원",
      "약국",
      "빵집",
      "문방구",
      "편의점",
      "식당",
      "카페",
      "영화관",
      "미용실",
      "경찰서",
      "소방서",
      "우체국",
      "은행",
      "박물관",
      "미술관",
      "캠핑장",
      "바닷가",
      "산길",
      "정류장",
      "지하철역",
      "기차역",
      "공항",
      "주차장",
      "화장실",
    ],
  },
  {
    key: "vehicles",
    label: "탈것",
    words: [
      "자동차",
      "버스",
      "택시",
      "경찰차",
      "소방차",
      "구급차",
      "자전거",
      "오토바이",
      "킥보드",
      "지하철",
      "기차",
      "고속버스",
      "비행기",
      "헬리콥터",
      "배",
      "요트",
      "카누",
      "잠수함",
      "트럭",
      "굴착기",
      "불도저",
      "트랙터",
      "유모차",
      "썰매",
      "열기구",
      "우주선",
      "케이블카",
      "리프트",
      "롤러스케이트",
      "스케이트보드",
    ],
  },
  {
    key: "jobs",
    label: "직업",
    words: [
      "선생님",
      "의사",
      "간호사",
      "경찰관",
      "소방관",
      "요리사",
      "제빵사",
      "농부",
      "화가",
      "가수",
      "배우",
      "작가",
      "과학자",
      "발명가",
      "우주비행사",
      "조종사",
      "운전기사",
      "배달원",
      "미용사",
      "사진가",
      "기자",
      "판사",
      "수의사",
      "약사",
      "건축가",
      "프로그래머",
      "마술사",
      "운동선수",
      "음악가",
      "정원사",
    ],
  },
  {
    key: "sports",
    label: "운동",
    words: [
      "축구",
      "농구",
      "야구",
      "배구",
      "수영",
      "달리기",
      "줄넘기",
      "태권도",
      "유도",
      "씨름",
      "탁구",
      "배드민턴",
      "테니스",
      "골프",
      "양궁",
      "체조",
      "스케이트",
      "스키",
      "썰매",
      "자전거",
      "등산",
      "요가",
      "피구",
      "훌라후프",
      "릴레이",
      "멀리뛰기",
      "높이뛰기",
      "마라톤",
      "권투",
      "리듬체조",
    ],
  },
  {
    key: "school",
    label: "학교",
    words: [
      "교실",
      "칠판",
      "분필",
      "지우개",
      "연필",
      "공책",
      "책가방",
      "필통",
      "자",
      "가위",
      "풀",
      "색연필",
      "크레파스",
      "급식",
      "점심시간",
      "쉬는시간",
      "숙제",
      "시험",
      "발표",
      "독서",
      "미술시간",
      "체육시간",
      "음악시간",
      "과학시간",
      "도서관",
      "운동장",
      "급식실",
      "보건실",
      "교무실",
      "방학",
    ],
  },
  {
    key: "toys",
    label: "장난감",
    words: [
      "인형",
      "블록",
      "퍼즐",
      "로봇",
      "공룡 장난감",
      "자동차 장난감",
      "물총",
      "비눗방울",
      "풍선",
      "팽이",
      "딱지",
      "요요",
      "레고",
      "보드게임",
      "카드게임",
      "구슬",
      "줄인형",
      "장난감 기차",
      "장난감 비행기",
      "장난감 주방",
      "소꿉놀이",
      "가면",
      "망원경 장난감",
      "현미경 장난감",
      "마이크 장난감",
      "악기 장난감",
      "봉제인형",
      "RC카",
      "스티커북",
      "색칠놀이",
    ],
  },
];

const timeOptions = [
  { key: "unlimited", label: "무제한", seconds: null },
  { key: "1m", label: "1분", seconds: 60 },
  { key: "3m", label: "3분", seconds: 180 },
  { key: "5m", label: "5분", seconds: 300 },
];

const allCategory = {
  key: "all",
  label: "모두",
  words: categories.flatMap((category) => category.words),
};

const categoryOptions = [allCategory, ...categories];

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
  selectedCategoryKey: categoryOptions[0] ? categoryOptions[0].key : "",
  selectedTimeKey: timeOptions[0].key,
  words: [],
  currentIndex: 0,
  correctCount: 0,
  remainingSeconds: null,
};

let timerId = null;

function getSelectedCategory() {
  return categoryOptions.find((category) => category.key === state.selectedCategoryKey) || null;
}

function getSelectedTimeOption() {
  return timeOptions.find((option) => option.key === state.selectedTimeKey) || timeOptions[0];
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
  const category = getSelectedCategory();
  if (!category) return;

  state.words = shuffle(category.words).slice(0, 10);
  state.currentIndex = 0;
  state.correctCount = 0;
  state.screen = "play";
  startTimerIfNeeded();
  render();
}

function goToNextWord(countAsCorrect) {
  if (countAsCorrect) {
    state.correctCount += 1;
  }

  const isLastWord = state.currentIndex >= state.words.length - 1;

  if (isLastWord) {
    finishGame();
    return;
  } else {
    state.currentIndex += 1;
  }

  render();
}

function resetGame() {
  clearTimer();
  state.screen = "start";
  state.words = [];
  state.currentIndex = 0;
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
  const categoryButtons = categoryOptions
    .map((category) => {
      const selectedClass = category.key === state.selectedCategoryKey ? "is-selected" : "";

      return `
        <button
          type="button"
          class="category-button ${selectedClass}"
          data-category-key="${category.key}"
        >
          ${category.label}
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

  return `
    <section class="screen screen-start">
      <div class="stack">
        <span class="eyebrow">2인용 단어 게임</span>
        <div class="stack">
          <h1 class="hero-title">말로 설명하고<br />친구와 맞혀요</h1>
          <p class="hero-text">
            주제를 고르면 10개의 단어가 하나씩 나와요.
            친구가 맞히면 <strong>정답</strong>, 못 맞히면 <strong>다음</strong>을 누르면 돼요.
          </p>
        </div>
        <div class="stack">
          <p class="screen-label">주제를 골라요</p>
          <div class="category-grid">${categoryButtons}</div>
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
  const category = getSelectedCategory();
  const word = state.words[state.currentIndex] || "";
  const timeLabel = formatTime(state.remainingSeconds);

  return `
    <section class="screen screen-play">
      <header class="play-header">
        <div>
          <p class="screen-label">${category ? category.label : ""}</p>
          <h2 class="screen-title">지금 단어를 설명해요</h2>
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
          <div class="status-chip">${state.currentIndex + 1} / 10</div>
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

  return `
    <section class="screen screen-result">
      <header class="result-header">
        <div>
          <p class="screen-label">결과 보기</p>
          <h2 class="screen-title">이번 게임 결과예요</h2>
        </div>
      </header>

      <div class="result-card">
        <p class="helper-text">${timeOption.label} 모드</p>
        <p class="helper-text">총 10개 중</p>
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
  app.querySelectorAll("[data-category-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategoryKey = button.dataset.categoryKey || state.selectedCategoryKey;
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
