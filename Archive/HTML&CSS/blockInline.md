## 블록 요소와 인라인 요소

html 의 요소는 크게 블록 요소와 인라인 요소로 구분된다.

### 블록 요소

- 사용 가능한 최대 가로 너비를 사용함 (기본 너비 값은 100%)
- 가로 전체를 차지하기 때문에 각 요소들이 수직으로 쌓임 (한줄에 한개만 배치)
- 크기 값을 가질 수 있다. (width, height 지정 가능)
- 상 하 좌 우 margin, padding 을 가질 수 있다.
- 레이아웃을 작업하는 요소로 적합하다.

![](https://media.vlpt.us/images/aepee/post/955cbd59-5196-43b7-9294-00ae3fb376a7/block22.png)

```css
width: 150px;
height: 30px;
padding: 10px;
margin: 10px;
```

margin-collapsing (마진 상쇄)

- margin-bottom 과 margin-top 이 겹치게 되면 상쇄가 일어나 하나의 값만 적용된다.

### 인라인 요소

- 사용 가능한 필요한 만큼의 영역을 사용한다. (컨텐츠 너비 만큼)
- 요소들이 수평으로 쌓임 (한줄에 여러개 배치)
- 크기 값을 가질 수 없다. (사이즈 지정 불가능)
- 상하 margin 적용 **불가능**
- 좌우 margin 과 상하좌우 padding 은 가능
- 텍스트를 작업하는 요소로 적합하다.

![](https://media.vlpt.us/images/aepee/post/68f59b41-4442-46ae-8d25-431ff479cb55/inline.jpg)

```css
width: 150px;
height: 30px;
padding: 10px;
margin: 10px;
```

가로 세로 크기와 상하 margin 은 적용되지 않고, padding, 좌우 margin 값만 적용되었다.

> 인라인 요소에 사이즈를 지정하려면 -> display: inline-block

### 인라인 블록 요소

- 기본 특성은 인라인이라 요소가 수평으로 쌓이지만 블록 요소처럼 사이즈를 지정할 수 있다.
- 상하좌우 margin, padding 을 가질 수 있다.
- 사용 가능한 필요한 만큼의 영역을 사용한다. (컨텐츠 너비 만큼)
- 요소들이 수평으로 쌓인다. (한줄에 여러개 배치)

### 번외 : 가운데 정렬하기

각 요소들을 가운데 정렬하는 방법은

> 블록 요소 : `margin: auto;`
> 인라인 / 인라인 블록 요소 - 부모 요소에 `text-align: center;`
