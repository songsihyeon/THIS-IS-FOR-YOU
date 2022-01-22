## Pure Component 와 React.memo

### Re-render the whole app on every update

React 에는 중요한 주제 중 하나인 Re-render the whole app on every update 가 있다.

React 는 **state 가 변화** 하거나 **관련된 props 가 변경** 되면 전체적으로 Render 가 호출되어 업데이트 된다.

왜냐하면 부모 Component 에 state가 있고 그 state가 업데이트 될 때, 그 안에 들어있는 모든 자식 Component 들의 render가 수행되기때문이다.

"Virtual DOM" 이라는 memory 상에 트리를 보관하고 이전과 지금의 업데이트 된 것을 비교해서 실제로 변경된 요소만 DOM 요소에 업데이트가 된다. 따라서 Re-render 로 성능에 문제가 생기는 일은 없다고 한다.

하지만 useEffect 난 componentDidUpdate 를 사용하여 작업을 수행한다면 개발자가 예상하지 못한 화면깜빡임이나 불필요한 일들이 수행될 수 있다.

이를 방지할 수 있도록 해주는 것이 바로 PureComponent & memo 이다.

![](https://media.vlpt.us/images/kihyeon8949/post/d6bbd9ad-2861-4d7d-ba49-a576244f9285/IMG_B1E7FE788E7E-1%203.jpeg)

### PureComponents & memo

PureComponent 는 해당 Component 의 state 나 props 에 변화가 없다면 render() 함수가 불려지지 않는다.

React.PureComponent 는 shouldComponentUpdate() 를 얕은 비교를 통해 구현해놓았다고 한다.
즉 오브젝트가 참조하는 레퍼런스 주소만을 비교하여 변경한다.

이 함수의 구현사항은 이전의 props 나 state 를 비교하고 같다면 true, 아니면 false 를 리턴하여 Component 가 업데이트 될 수 있게 한다.

> memo는 함수형 컴포넌트에서 PureComponent 와 같이 수행된다.

> **state 난 props의 데이터가 변경되지 않으면 컴포넌트를 업데이트 하지 않아도 된다면 PureComponent 나 memo 를 사용하자 !!**
