## CSS

### display

1. block: 항상 새로운 라인에 요소가 시작되고 화면 크기의 전체 가로폭을 영역으로 차지한다. width 속성 값을 부여해주면 그 너비만크 영역을 차지한다.

2. inline: 새로운 라인에서 시작되지 않으며 다른 요소들과 같은 줄에 배치될 수 있고 content 너비만큼의 영역을 차지한다. 그리고 width, height, margin-top, margin-bottom 속성이 적용이 되지 않는다.

3. inline-block: block 레벨 요소와 inline 레벨 요소의 특징을 모두 가지고 있다. 한 줄에서 inline 레벨 요소들과 같이 배치될 수 있으며 width와 height 속성으로 영역의 크기를 지정할 수 잇다.

4. none: 아예 사라지게 하는 것. 보이지도 않고 해당 공간도 존재하지 않게 된다.

### position

1. static: 기본값으로 요소들이 겹치지 않고 상->하로 배치된다.
2. relative: 원래 배치되어야 할 위치에서 지정한 값 만큼 떨어진 곳에 요소를 배치한다.
3. fixed: 웹 브라우저 화면 전체를 기준으로 배치한다. 스크롤을 하더라도 위치가 고정된다.
4. absolute: 가장 가까운 상위 요소의 위치를 기준으로 지정한 값 만큼 떨어진 곳에 요소를 배치한다.

### FlexBox Grid

1. Flex 를 사용하는 이유

flex는 레이아웃을 좀 더 편하게 잡기 위해서 만들어진 css 속성

flex를 사용하면 요소들의 크기나 위치를 쉽게 잡을 수 있다.

2. Grid를 사용하는 이유

grid를 사용하면 list에 width를 따로 입력하지 않고 리스트에 간격과 width 비율만 입력해주면 쉽고 간편히 만들 수 있다.

또 추가적으로 브라우저 창을 줄여도 자동으로 리스트의 width가 퍼센트를 준 것처럼 브라우저 크기에 반응한다.

### 반응형 웹의 3요소

1. 그리드 레이아웃
2. 가변형 이미지
3. 미디어 쿼리

### 반응형 웹, 적응형 웹

- 반응형 웹이란 하나의 웹사이트에서 PC, 스마트폰, 태블릿 PC 등 접속하는 디스플레이의 종류에 따라 화면의 크기가 자동으로 변하도록 만든 웹페이지 접근 기법
- 적응형 웹은 사용자의 기기 및 해상도의 정보를 미리 받아서 조건에 맞는 화면을 보여주는 것이다.

### CSS-in-JS

- 자바스크립트와 CSS 사이의 상수와 함수를 고융한다.
- CSS 모델을 문서 레벨이 아닌 검포넌트 레벨로 추상화하는 모듈성
- 대표 라이브러리: styled-components, Emotion

### CSS 전처리기

- 장점: 조건문이나 반복문, 간단한 연산 등을 할 수 있어서 CSS를 마치 프로그래밍 하듯이 코딩할 수 있다.
- 단점: 웹에서는 CSS만 동작하기 때문에 전처리기는 직접 동작할 수 없어 CSS로 컴파일 후 동작 시켜야한다.