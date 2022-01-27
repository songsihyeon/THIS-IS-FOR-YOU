## 타입과 인터페이스 그리고 제네릭

### 타입스크립트를 사용하는 이유

타입, 인터페이스, 제네릭을 설명하기에 앞서 타입스크립트를 사용하는 이유가 무엇일까 ?

타입스크립트를 사용하는 가장 큰이유는 정적 타이핑을 지원한다는 것이다.

자바스크립트의 특징인 동적 타이핑은 자바스크립트 엔진에 의해 자동으로 해석되기 때문에 의도에 따라 받고 전달하는 데이터의 타입이 불분명해질 수 있다.

타입을 지정하고 먼저 타입을 선언함으로써, 프로그래밍 단계, HTTP 통신을 통한 데이터를 주고받는 과정에서 생기는 데이터를 안전하게 주고 받을 수 있다.

또한 타입을 미리 선언해주기 때문에 타입에 관련된 프로토타입 메서드를 손쉽게 찾아 쓸 수 있다는 장점 또한 존재한다.

### 타입과 인터페이스

타입과 인터페이스는 모두 객체의 타입의 이름을 지정하는 방법들 중 하나이다.

```ts
// interface
interface PeopleInterface {
  name: string;
  age: number;
}

const me1: PeopleInterface = {
  name: "sh",
  age: 19,
};

// type
type PeopleType = {
  name: string;
  age: number;
};

const me2: PeopleType = {
  name: "sh",
  age: 19,
};
```

하지만 일정 부분에 있어서 타입과 인터페이스는 차이점이 존재한다.

1. 확장하는 방법

인터페이스는 extends 키워드를 사용하여 확장이 가능하고, 타입은 & 연산자를 통해 확장이 가능하다.

```ts
// interface
interface PeopleInterface {
  name: string;
  age: number;
}

interface StudentInterface extends PeopleInterface {
  school: string;
}

// type
type PeopleType = {
  name: string;
  age: number;
};

type StudentType = PeopleType & {
  school: string;
};
```

2. 선언적 확장

인터페이스는 동일한 이름을 통해 재정의 함으로써 선언적 확장이 가능하지만, 타입은 불가능하다.

```ts
// interface
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

// 같은 interface 명으로 Window를 다시 만든다면, 자동으로 확장이 된다.

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// type
type Window = {
  title: string;
};

type Window = {
  ts: TypeScriptAPI;
};

// Error: Duplicate identifier 'Window'.
// 타입은 안된다.
```

여러 타입 혹은 인터페이스를 병합할 때 (& or extends), 인터페이스는 속성 간의 충돌을 해결하기 위해 단순한 객체 타입을 만든다.

인터페이스는 오로지 객체의 타입을 만들기 위한 것이기 때문이다.

타입은 재귀적으로 순회화면서 속성을 병합하는데, 이 경우에 일부 never 가 나오면서 제대로 병합되지 않을 수 있다.

인터페이스와는 다르게 타입에는 원시 타입이 올 수 있으므로, 충돌이 나서 병합이 안되는 경우가 발생한다.

객체에만 쓰는 용도라면 interface 를 사용하는 것이 좋을 것이다.

> 인터페이스는 자신의 이름을 중복 선언하여 extends 키워드를 사용하지 않더라도 확장이 가능하지만, 타입의 경우 중복 선언을 통해 확장할 수 없다. (& 연산자를 사용하여 확장해야 한다.)

### 제네릭

제네릭은 클래스, 함수, 인터페이스 등을 다양한 타입으로 재사용 가능하게 해주는 문법이다.

```ts
function getSize(arr: number[] | string[] | boolean[]): number {
  return arr.length;
}

const arr = [1, 2, 3];

getSize(arr); // 3

const arr2 = ["a", "b", "c"];

getSize(arr2); // 3

const arr3 = [true, false, true];
getSize(arr3); // 3
```

위와 같이 한가지 함수에서 다양한 타입의 데이터를 받아줘야 한다고 가정할 때 올바른 타입을 지정하기 위해서는 타입을 확장시켜줘야한다.

이런 상황에서 제네릭을 사용하여 함수의 매개변수에 대한 타입 <T> 를 명시해줌으로써 다양한 타입에 대응하는 함수를 만들어줄 수 있다.

```ts
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr = [1, 2, 3];

getSize<number>(arr); // 3

const arr2 = ["a", "b", "c"];

getSize<string>(arr2); // 3
```

> 제네릭은 클래스, 함수, 인터페이스 등에서 한 가지 함수가 다양한 데이터를 받아줘야할 때 올바른 타입을 지정하기 위해 사용하는 재사용 가능한 확장 문법이다.
