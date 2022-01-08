## Content box vs Border box

### content box

css 모든 box 는 `box-sizing` 이 `content-box`로 설정되어있다.
`content-box`는 width 를 box model 에서 제일 안쪽인 content 영영만의 width로 설정하겠다는 의미이다.

즉, 내가 준 width 는 box의 content 영역의 width을 의미하기 때문에, 실제로 padding 이나 border 값을 더주면 actual width 는 내가 예상했던 것보다 더 커지게 된다.

### border box

`border-box` 는 box의 width를 계산할 때 padding 과 border 의 값까지 포함하겠다는 의미이다.

즉, border-box 에서 padding 이나 border 값을 주면 actual width 가 증가하지 않고 **actual width 는 고정된 상태** 에서 content 영역의 width 가 줄어든다.
