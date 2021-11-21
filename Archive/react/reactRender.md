## React 의 렌더링 과정

### 1. React 최초 렌더링 과정

1. ReactDOM.render (**root element, DOM node**) 호출
2. root element 부터 시작해서 마주친 **element 의 type 을 검사**한다.
   - DOM element: 자식 엘리먼트 들에 대하여 **동일한 과정을 재귀적으로 반복**한다.
   - 컴포넌트 element: 해당 컴포넌트에게 props를 입력으로 제공하여 **element tree** 를 얻는다.
     함수형 컴포넌트라면 해당 함수를 호출함으로써, 클래스형 컴포넌트라면 컴포넌트 인스턴스를 생성한 후 render() 메소드를 호출함으로써 얻을 수 있다.
     그리고 그렇게 얻은 **엘리먼트 트리의 루트 엘리먼트에 대해서 동일한 과정을 재귀적으로 반복한**다.
3. 모든 컴포넌트에게 질문하는 과정을 마치면 최종적으로 **한 element tree 를 얻는다.**
4. 이제 해당 **element tree(== Virtual DOM) 를 실제로 DOM 에 일괄 반영**하는 작업을 수행하기만 하면 된다.

### 2. React 리렌더링 과정 (컴포넌트의 state 나 props 가 변경되는 경우)

- 컴포넌트 인스턴스의 setState() 메소드가 호출되면, render() 메소드의 호출을 통해 새로운 엘리먼트 트리가 반환된다.
- 이와 같이 **컴포넌트에서 새로운 element tree 가 반환될 때마다 기존의 element tree 에서 변경된 부분을 계산하기 위한 재조정(Reconciliation) 과정**을 밟는다.
  최초 렌더링 과정과 마찬가지로, **재조정 과정도 root element부터 시작하여 아래로 내려가면서 재귀적으로 반복**된다. 그렇게 계산된 차이점들은 나중에 DOM을 효율적으로 일괄 갱신하기 위해 사용이 된다.
- 물론 재조정 과정은 O(n)의 시간밖에 소요되지 않지만, 리렌더링이 필요하지 않은 컴포넌트 element 까지 렌더링을 시도하면 (== render() 메소드 호출 + 재조정) 불필요한 시간 낭비를 유발할 수 있다. **이때 shouldComponentUpdate() 메소드를 적절히 오버라이딩하면 특정 컴포넌트 element의 불필요한 render() 메소드 호출을 막을 수 있다.**
  이 경우 해당 element tree 는 리렌더링이 이뤄지지 않게 된다.

### 3. 재조정 (Reconciliation)

컴포넌트의 state나 props가 변경될 때 새로 반환되는 element tree 와 이전 element tree 를 비교하여 변경점을 파악하고, 그 변경점에 대해서만 DOM을 부분적으로 일괄 갱신한다. 이를 위해 React는 다음과 같은 두 가지 가정에 기반하여 O(n)의 시간에 두 element tree에 대한 비교를 수행할 수 있는 휴리스틱 알고리즘을 구현하였다.

1. 서로 다른 type의 두 element는 서로 다른 tree를 만들어낸다.
2. 개발자가 각 element에 key를 명시함으로써, React가 각 element를 정확히 분별할 수 있도록 한다.

비교 알고리즘(Diff Algorithm) 은 다음과 같다. 새로 반환되는 element tree와 기존의 element tree에 대해, root element 터 시작해서 마주친 elemen의 type을 기준으로 비교를 진행한다. 기본적으로 기존의 element tree를 갱신해 나가는 방식으로 진행된다.

1. element의 type이 다른 경우: 이전 tree를 완전히 버리고 새로운 tree를 구축한다.
   이때 이전 트리에 해당하는 DOM node들은 전부 삭제된다.
   이때 클래스형 컴포넌트의 경우 컴포넌트 인스턴스의 componentWillUnmount() 메소드가 호출이 된다. 이전 트리에 속하는 모든 컴포넌트 인스턴스들은 Unmont 되며, 이에 따라 state 들도 모두 소멸이 된다.
2. 같은 type의 DOM element인 경우: 두 element의 속성을 확인하여, 동일한 부분은 유지하고 변경된 부분들만 갱신한다. 이후, 자식 element들을 대상으로 동일한 과정을 재귀적으로 반복한다.
3. 같은 type의 컴포넌트 element인 경우: 컴포넌트 인스턴스는 동일하게 유지되어 렌더링 간 state가 유지된다. 대신 새로운 element의 내용을 반영하기 위해 현재 컴포넌트 인스턴스의 props를 갱신한다. 그리고 shouldComponentUpdate() 메소드를 호출하여 render() 함수를 호출할 지 결정한다. 만약 그 반환 값이 false라면 리렌더링은 더이상 진행되지 않고 멈추며, true라면 render() 메소드가 호출되어 그렇게 얻은 element tree의 root element에 대해서 동일한 과정을 재귀적으로 반복한다.

참고로, 자식 element에 대한 재귀적 처리는 다음과 같은 특징을 지닌다.

- 자식 element들의 리스트를 비교할 때는 기본적으로 두 리스트를 순회하며 그 차이점을 파악한다.
  이를 위해 각 리스트 element에는 구분을 위한 key 값을 설정해줘야 한다.
- key 값은 element에 저장되는 정보로, 형제들 사이에서는 유일한 값이여야 한다.
- 참고로 배열의 인덱스는 key로 사용하지 않는게 좋다. 컴포넌트 인스턴스는 key를 기반으로 갱신되고 재사용되기 때문이다.
  배열의 인덱스를 key로 사용하면, 항목의 순서가 바뀌었을 때 key 또한 바뀌게 되어, 해당 컴포넌트 인스턴스의 state가 엉망이 되거나 의도하지 않은 방식으로 바뀔 수 있다.

### + 컴포넌트 인스턴스의 생명 주기 (Life Cycle)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc327pw%2FbtqFPsjk2Mm%2F1u10lhkyCYrQZ5UhaFd1GK%2Fimg.jpg)

위 그림에 입각해서 특정 컴포넌트 인스턴스를 대상으로 setState() 메소드를 호출했다고 가정해보자.
그러면 해당 컴포넌트 인스턴스의 shouldComponentUpdate() 메소드를 호출하여 리렌더링을 해야 하는지 판단한다. 보통 이 메소드는 새로운 state/props 의 참조값을 인자로 받기 때문에 이를 기존 state/props 의 참조값과 비교함으로써 리렌더링이 필요한 상황에만 true 를 반환하도록 오버라이딩하게 된다.
만약 shouldComponentUpdate() 메소드가 true를 반환하면 이어서 render() 메소드가 호출되고, false를 반환하면 여기서 멈춘다.
render() 메소드가 호출되어 새로운 element tree가 반환되면, 앞서 설명한 휴리스틱 알고리즘으로 이전 element tree와의 비교를 수행하여 차이점을 계산한다. 따라서 리렌더링이 불필요한 컴포넌트에 shouldComponentUpdate() 메소드를 적절히 오버라이딩 해주면 불필요한 render() 메소드의 호출에 의한 성능 저하를 막을 수 있다.
