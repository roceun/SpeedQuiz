# SpeedQuiz

한국 초등학생이 쉽게 즐길 수 있는 2인용 단어 설명 게임을 만드는 프로젝트입니다.

현재 저장소에는 바로 실행 가능한 정적 웹게임이 들어 있습니다.

## 게임 소개

- 주제를 고르고 단어 10개를 랜덤으로 진행합니다.
- 한 명은 설명하고, 한 명은 맞힙니다.
- `정답` 또는 `다음` 버튼으로 게임을 진행합니다.
- 결과 화면에서는 맞춘 개수만 간단하게 보여줍니다.
- 시간 제한은 `무제한 / 1분 / 3분 / 5분` 중에서 고를 수 있습니다.

## 주요 주제

- 동물
- 자연
- 사물
- 음식
- 장소
- 탈것
- 직업
- 운동
- 학교
- 장난감
- 모두

기획 문서는 [docs/game-plan.md](/Users/roceun/Documents/New project/docs/game-plan.md)에 정리되어 있습니다.

## 실행 방법

가장 간단한 방법은 [index.html](/Users/roceun/Documents/New project/index.html)을 브라우저로 여는 것입니다.

로컬 서버로 실행하려면:

```bash
cd "/Users/roceun/Documents/New project"
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173` 로 접속하면 됩니다.

## 배포

이 저장소에는 GitHub Pages 자동 배포 워크플로가 포함되어 있습니다.

필요한 설정

1. GitHub 저장소의 `Settings > Pages`로 이동합니다.
2. `Build and deployment`에서 `Source`를 `GitHub Actions`로 선택합니다.
3. `main` 브랜치에 푸시하면 자동으로 배포됩니다.

배포가 완료되면 아래 형식의 주소로 접속할 수 있습니다.

- `https://roceun.github.io/SpeedQuiz/`

## 배포 확인 체크리스트

- GitHub Pages의 `Source`가 `GitHub Actions`로 설정되어 있는가
- `Actions` 탭에서 `Deploy GitHub Pages` 워크플로가 성공했는가
- 배포 주소에서 시작 화면이 보이는가
- 안드로이드 폰에서도 주제 선택, 게임 진행, 결과 화면이 정상 동작하는가

## 하네스 팀 구성

- 기획자: 초등학생 눈높이에 맞는 게임 흐름과 규칙을 설계
- 개발자: 기획을 실제 동작하는 화면과 기능으로 구현
- 검수자: 아이들이 실제로 사용했을 때 헷갈리거나 불편한 부분을 점검

자세한 운영 방식은 [docs/harness-team.md](/Users/roceun/Documents/New project/docs/harness-team.md)에 정리되어 있습니다.
