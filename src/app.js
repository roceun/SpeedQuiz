const describeWordPairs = [
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

const charadesWordPairs = [
  { korean: "재채기하다", english: "sneeze" },
  { korean: "하품하다", english: "yawn" },
  { korean: "딸꾹질하다", english: "hiccup" },
  { korean: "기지개 켜다", english: "stretch" },
  { korean: "발끝으로 걷다", english: "tiptoe" },
  { korean: "미끄러지다", english: "slip" },
  { korean: "균형 잡다", english: "balance" },
  { korean: "깜짝 놀라다", english: "be startled" },
  { korean: "무서워하다", english: "be scared" },
  { korean: "졸다", english: "doze off" },
  { korean: "긴장하다", english: "be nervous" },
  { korean: "화를 참다", english: "hold back anger" },
  { korean: "사과하다", english: "apologize" },
  { korean: "부끄러워하다", english: "feel shy" },
  { korean: "응원하다", english: "cheer" },
  { korean: "악수하다", english: "shake hands" },
  { korean: "포옹하다", english: "hug" },
  { korean: "절하다", english: "bow" },
  { korean: "박장대소하다", english: "burst out laughing" },
  { korean: "눈치 보다", english: "read the room" },
  { korean: "비밀 말하다", english: "whisper a secret" },
  { korean: "길 묻다", english: "ask for directions" },
  { korean: "길 잃다", english: "get lost" },
  { korean: "약속 기다리다", english: "wait for someone" },
  { korean: "발표하다", english: "give a presentation" },
  { korean: "시험 보다", english: "take a test" },
  { korean: "숙제하다", english: "do homework" },
  { korean: "칠판에 쓰다", english: "write on the board" },
  { korean: "책 넘기다", english: "flip pages" },
  { korean: "돋보기로 보다", english: "look through a magnifying glass" },
  { korean: "셀카 찍다", english: "take a selfie" },
  { korean: "사진 확대하다", english: "zoom in on a photo" },
  { korean: "영상 통화하다", english: "video call" },
  { korean: "문자 보내다", english: "send a text" },
  { korean: "알람 끄다", english: "turn off an alarm" },
  { korean: "리모컨 찾다", english: "look for a remote" },
  { korean: "선물 포장하다", english: "wrap a gift" },
  { korean: "택배 뜯다", english: "open a package" },
  { korean: "가방 뒤지다", english: "search a bag" },
  { korean: "지갑 잃어버리다", english: "lose a wallet" },
  { korean: "우산 펴다", english: "open an umbrella" },
  { korean: "비 맞다", english: "get caught in the rain" },
  { korean: "머리 말리다", english: "dry hair" },
  { korean: "머리 묶다", english: "tie hair" },
  { korean: "렌즈 끼다", english: "put in contact lenses" },
  { korean: "화장하다", english: "put on makeup" },
  { korean: "면도하다", english: "shave" },
  { korean: "손톱 깎다", english: "clip nails" },
  { korean: "양말 찾다", english: "look for socks" },
  { korean: "지퍼 올리다", english: "zip up" },
  { korean: "단추 잠그다", english: "button up" },
  { korean: "넥타이 매다", english: "tie a necktie" },
  { korean: "요리하다", english: "cook" },
  { korean: "반죽하다", english: "knead dough" },
  { korean: "계란 깨다", english: "crack an egg" },
  { korean: "볶다", english: "stir-fry" },
  { korean: "국자 젓다", english: "stir with a ladle" },
  { korean: "후 불다", english: "blow on hot food" },
  { korean: "설거지하다", english: "wash dishes" },
  { korean: "식탁 차리다", english: "set the table" },
  { korean: "청소기 돌리다", english: "vacuum" },
  { korean: "걸레질하다", english: "mop the floor" },
  { korean: "창문 닦다", english: "clean a window" },
  { korean: "빨래 널다", english: "hang laundry" },
  { korean: "빨래 개다", english: "fold laundry" },
  { korean: "쓰레기 버리다", english: "take out the trash" },
  { korean: "화분에 물 주다", english: "water a plant" },
  { korean: "캠핑하다", english: "camp" },
  { korean: "텐트 치다", english: "pitch a tent" },
  { korean: "낚시하다", english: "fish" },
  { korean: "썰매 타다", english: "sled" },
  { korean: "서핑하다", english: "surf" },
  { korean: "노 젓다", english: "row a boat" },
  { korean: "잠수하다", english: "dive underwater" },
  { korean: "등산하다", english: "hike" },
  { korean: "쌍안경으로 보다", english: "look through binoculars" },
  { korean: "지도 펼치다", english: "unfold a map" },
  { korean: "망원경으로 보다", english: "look through a telescope" },
  { korean: "줄넘기하다", english: "jump rope" },
  { korean: "훌라후프 돌리다", english: "hula hoop" },
  { korean: "팔굽혀펴기하다", english: "do push-ups" },
  { korean: "윗몸일으키기하다", english: "do sit-ups" },
  { korean: "스트레칭하다", english: "stretch exercise" },
  { korean: "요가하다", english: "do yoga" },
  { korean: "명상하다", english: "meditate" },
  { korean: "태권도", english: "taekwondo" },
  { korean: "복싱", english: "boxing" },
  { korean: "펜싱", english: "fencing" },
  { korean: "양궁", english: "archery" },
  { korean: "역도", english: "weightlifting" },
  { korean: "체조", english: "gymnastics" },
  { korean: "볼링", english: "bowling" },
  { korean: "당구", english: "billiards" },
  { korean: "탁구", english: "table tennis" },
  { korean: "배드민턴", english: "badminton" },
  { korean: "테니스", english: "tennis" },
  { korean: "배구", english: "volleyball" },
  { korean: "농구", english: "basketball" },
  { korean: "야구", english: "baseball" },
  { korean: "축구", english: "soccer" },
  { korean: "골프", english: "golf" },
  { korean: "스케이트", english: "skating" },
  { korean: "스키", english: "skiing" },
  { korean: "씨름", english: "ssireum" },
  { korean: "줄다리기", english: "tug-of-war" },
  { korean: "숨바꼭질", english: "hide-and-seek" },
  { korean: "술래잡기", english: "tag" },
  { korean: "보물찾기", english: "treasure hunt" },
  { korean: "마술사", english: "magician" },
  { korean: "사진사", english: "photographer" },
  { korean: "지휘자", english: "conductor" },
  { korean: "피아니스트", english: "pianist" },
  { korean: "기타리스트", english: "guitarist" },
  { korean: "드러머", english: "drummer" },
  { korean: "배우", english: "actor" },
  { korean: "가수", english: "singer" },
  { korean: "개그맨", english: "comedian" },
  { korean: "아나운서", english: "news anchor" },
  { korean: "기자", english: "reporter" },
  { korean: "작가", english: "writer" },
  { korean: "화가", english: "painter" },
  { korean: "조각가", english: "sculptor" },
  { korean: "요리사", english: "chef" },
  { korean: "제빵사", english: "baker" },
  { korean: "바리스타", english: "barista" },
  { korean: "의사", english: "doctor" },
  { korean: "치과의사", english: "dentist" },
  { korean: "간호사", english: "nurse" },
  { korean: "수의사", english: "veterinarian" },
  { korean: "약사", english: "pharmacist" },
  { korean: "선생님", english: "teacher" },
  { korean: "과학자", english: "scientist" },
  { korean: "프로그래머", english: "programmer" },
  { korean: "건축가", english: "architect" },
  { korean: "판사", english: "judge" },
  { korean: "경찰관", english: "police officer" },
  { korean: "형사", english: "detective" },
  { korean: "소방관", english: "firefighter" },
  { korean: "파일럿", english: "pilot" },
  { korean: "승무원", english: "flight attendant" },
  { korean: "우주비행사", english: "astronaut" },
  { korean: "잠수부", english: "diver" },
  { korean: "농부", english: "farmer" },
  { korean: "택배기사", english: "delivery driver" },
  { korean: "미용사", english: "hairdresser" },
  { korean: "재단사", english: "tailor" },
  { korean: "강아지", english: "puppy" },
  { korean: "고양이", english: "cat" },
  { korean: "토끼", english: "rabbit" },
  { korean: "원숭이", english: "monkey" },
  { korean: "펭귄", english: "penguin" },
  { korean: "캥거루", english: "kangaroo" },
  { korean: "고릴라", english: "gorilla" },
  { korean: "사슴", english: "deer" },
  { korean: "늑대", english: "wolf" },
  { korean: "여우", english: "fox" },
  { korean: "판다", english: "panda" },
  { korean: "코끼리", english: "elephant" },
  { korean: "기린", english: "giraffe" },
  { korean: "악어", english: "crocodile" },
  { korean: "뱀", english: "snake" },
  { korean: "개구리", english: "frog" },
  { korean: "문어", english: "octopus" },
  { korean: "돌고래", english: "dolphin" },
  { korean: "상어", english: "shark" },
  { korean: "독수리", english: "eagle" },
  { korean: "공작", english: "peacock" },
  { korean: "타조", english: "ostrich" },
  { korean: "거북이", english: "turtle" },
  { korean: "오징어", english: "squid" },
  { korean: "헬리콥터", english: "helicopter" },
  { korean: "비행기", english: "airplane" },
  { korean: "로켓", english: "rocket" },
  { korean: "기차", english: "train" },
  { korean: "지하철", english: "subway" },
  { korean: "오토바이", english: "motorcycle" },
  { korean: "자전거", english: "bicycle" },
  { korean: "킥보드", english: "scooter" },
  { korean: "배", english: "boat" },
  { korean: "잠수함", english: "submarine" },
  { korean: "포크레인", english: "excavator" },
  { korean: "지게차", english: "forklift" },
  { korean: "드론", english: "drone" },
  { korean: "우산", english: "umbrella" },
  { korean: "거울", english: "mirror" },
  { korean: "전화기", english: "phone" },
  { korean: "알람시계", english: "alarm clock" },
  { korean: "청소기", english: "vacuum cleaner" },
  { korean: "드라이어", english: "hair dryer" },
  { korean: "전자레인지", english: "microwave" },
  { korean: "냉장고", english: "refrigerator" },
  { korean: "세탁기", english: "washing machine" },
  { korean: "믹서기", english: "blender" },
  { korean: "망치", english: "hammer" },
  { korean: "망원경", english: "telescope" },
  { korean: "현미경", english: "microscope" },
  { korean: "트로피", english: "trophy" },
  { korean: "캐리어", english: "suitcase" },
  { korean: "주사위", english: "dice" },
];

function uniqueWordPairs(wordPairs) {
  const seenKorean = new Set();

  return wordPairs.filter((pair) => {
    if (seenKorean.has(pair.korean)) {
      return false;
    }

    seenKorean.add(pair.korean);
    return true;
  });
}

const charadesWords = {
  korean: charadesWordPairs.map((pair) => pair.korean),
  english: charadesWordPairs.map((pair) => pair.english),
};

const describeWords = uniqueWordPairs([...describeWordPairs, ...charadesWordPairs]);

const playStyles = [
  {
    key: "describe",
    label: "말로 설명하기",
    title: "말로 설명하고<br />친구와 맞혀요",
    eyebrow: "2인용 단어 게임",
    description: "말로 힌트를 주면서 빠르게 맞혀요.",
    helper:
      "카테고리 없이 섞인 제시어가 하나씩 나와요. 말로 설명하면서 친구가 정답을 맞히면 돼요.",
    playTitle: "지금 제시어를 설명해요",
    resultLabel: "말로 설명하기",
  },
  {
    key: "charades",
    label: "몸으로 표현하기",
    title: "몸짓으로 표현하고<br />친구와 맞혀요",
    eyebrow: "파티 게임 모드",
    description: "말하지 않고 몸짓으로 힌트를 줘요.",
    helper:
      "행동, 스포츠, 직업, 동물처럼 몸으로 표현하기 좋은 제시어가 나와요. 말 대신 몸짓으로만 알려줘요.",
    playTitle: "지금 제시어를 몸으로 표현해요",
    resultLabel: "몸으로 표현하기",
  },
];

const quizModes = [
  { key: "korean", label: "한국어 문제", description: "제시어가 한국어로 나와요." },
  { key: "english", label: "영어 문제", description: "제시어가 영어로 나와요." },
];

const timeOptions = [
  { key: "unlimited", label: "10문제", seconds: null },
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

const wordCollections = {
  describe: {
    korean: describeWords.map((pair) => pair.korean),
    english: describeWords.map((pair) => pair.english),
  },
  charades: charadesWords,
};

const app = document.querySelector("#app");

const state = {
  screen: "start",
  selectedPlayStyleKey: playStyles[0].key,
  selectedModeKey: quizModes[0].key,
  selectedTimeKey: timeOptions[0].key,
  words: [],
  currentIndex: 0,
  roundCount: 0,
  correctCount: 0,
  remainingSeconds: null,
  startedAt: null,
  elapsedSeconds: 0,
};

let timerId = null;

function getSelectedPlayStyle() {
  return playStyles.find((style) => style.key === state.selectedPlayStyleKey) || playStyles[0];
}

function getSelectedMode() {
  return quizModes.find((mode) => mode.key === state.selectedModeKey) || quizModes[0];
}

function getSelectedTimeOption() {
  return timeOptions.find((option) => option.key === state.selectedTimeKey) || timeOptions[0];
}

function getWordsForSelection(playStyleKey, modeKey) {
  const playStyleWords = wordCollections[playStyleKey] || wordCollections.describe;
  return playStyleWords[modeKey] || playStyleWords.korean;
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
  if (seconds === null) return "10문제";

  const minutes = Math.floor(seconds / 60);
  const restSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(restSeconds).padStart(2, "0")}`;
}

function getElapsedSeconds() {
  if (!state.startedAt) return 0;

  return Math.max(0, Math.round((Date.now() - state.startedAt) / 1000));
}

function finishGame() {
  clearTimer();
  state.elapsedSeconds = getElapsedSeconds();
  state.screen = "result";
  render();
}

function startTimerIfNeeded() {
  const timeOption = getSelectedTimeOption();
  state.remainingSeconds = timeOption.seconds;

  clearTimer();

  timerId = window.setInterval(() => {
    if (state.screen !== "play") {
      clearTimer();
      return;
    }

    if (timeOption.seconds === null) {
      render();
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
  const words = shuffle(getWordsForSelection(state.selectedPlayStyleKey, state.selectedModeKey));
  state.words = isUnlimitedMode() ? words.slice(0, 10) : words;
  state.currentIndex = 0;
  state.roundCount = 1;
  state.correctCount = 0;
  state.startedAt = Date.now();
  state.elapsedSeconds = 0;
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
    state.words = shuffle(getWordsForSelection(state.selectedPlayStyleKey, state.selectedModeKey));
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
  state.startedAt = null;
  state.elapsedSeconds = 0;
  render();
}

function quitGame() {
  const shouldQuit = window.confirm("지금 게임을 그만할까요?");
  if (!shouldQuit) return;

  resetGame();
}

function renderStartScreen() {
  const playStyleButtons = playStyles
    .map((style) => {
      const selectedClass = style.key === state.selectedPlayStyleKey ? "is-selected" : "";

      return `
        <button
          type="button"
          class="mode-button ${selectedClass}"
          data-play-style-key="${style.key}"
        >
          ${style.label}
        </button>
      `;
    })
    .join("");

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

  const selectedPlayStyle = getSelectedPlayStyle();
  const selectedMode = getSelectedMode();

  return `
    <section class="screen screen-start">
      <div class="stack">
        <span class="eyebrow">${selectedPlayStyle.eyebrow}</span>
        <div class="stack">
          <h1 class="hero-title">${selectedPlayStyle.title}</h1>
          <p class="hero-text">${selectedPlayStyle.helper}</p>
        </div>
        <div class="stack">
          <p class="screen-label">플레이 방식을 골라요</p>
          <div class="mode-grid">${playStyleButtons}</div>
          <p class="helper-text">${selectedPlayStyle.description}</p>
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
  const playStyle = getSelectedPlayStyle();
  const mode = getSelectedMode();
  const word = state.words[state.currentIndex] || "";
  const timeLabel = isUnlimitedMode()
    ? formatTime(getElapsedSeconds())
    : formatTime(state.remainingSeconds);
  const progressLabel = isUnlimitedMode() ? `${state.currentIndex + 1} / 10` : `${state.roundCount}번`;
  const timeMetaLabel = isUnlimitedMode() ? "진행 시간" : "남은 시간";

  return `
    <section class="screen screen-play">
      <header class="play-header">
        <div>
          <p class="screen-label">${playStyle.resultLabel} · ${mode.label}</p>
          <h2 class="screen-title">${playStyle.playTitle}</h2>
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
          <p class="helper-text">${timeMetaLabel}</p>
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
  const playStyle = getSelectedPlayStyle();
  const mode = getSelectedMode();
  const resultSummary = isUnlimitedMode() ? "총 10문제 중" : `총 ${state.roundCount}문제 진행`;

  return `
    <section class="screen screen-result">
      <header class="result-header">
        <div>
          <p class="screen-label">결과 보기</p>
          <h2 class="screen-title">이번 게임 결과예요</h2>
        </div>
      </header>

      <div class="result-card">
        <p class="helper-text">${playStyle.resultLabel} · ${mode.label}</p>
        <p class="helper-text">${timeOption.label} 모드</p>
        <p class="helper-text">${resultSummary}</p>
        <p class="result-score">${state.correctCount}개</p>
        <p class="result-text">맞혔어요</p>
        <p class="helper-text">걸린 시간 ${formatTime(state.elapsedSeconds)}</p>
        <div class="result-actions">
          <button type="button" class="restart-button" data-action="restart">다시 하기</button>
        </div>
      </div>
    </section>
  `;
}

function bindEvents() {
  app.querySelectorAll("[data-play-style-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPlayStyleKey = button.dataset.playStyleKey || state.selectedPlayStyleKey;
      render();
    });
  });

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
