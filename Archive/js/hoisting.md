## 호이트스팅의 개념

> 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것

### 호이스팅이란

- 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수 값들을 모두 모아서 **유효 범위의 최상단**에 선언한다.
  - 자바스크립트 parser 가 함수 실행 전 해당 함수를 한 번 훑는다.
  - 함수 안에 존재하느 변수/함수 선언에 대한 정보를 기억하고 있다가 실행시킨다.
  - 유효 범위: 함수 블록`{}`안에서 유효
- 즉, 함수 내에서 아래쪽에 존재하는 내용 중 필요한 값들을 끌어올리는 것이다.
  - 실제로 코드가 끌어올려지는 건 아니며, 자바스크립트 Parser 내부적으로 끌어올려서 처리하는 것이다.

### 호이스팅의 대상

- **var 변수 선언**과 **함수선언문** 에서만 호이스팅이 일어난다.
  - var 변수/함수의 **선언**만 위로 끌어 올려지며, **할당**은 끌어 올려지지 않는다.
  - let/const 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않는다.
- ex) 함수 선언문 vs 함수 표현식

```js
foo();
foo2();

function foo() {
  // 함수선언문
  console.log("hello");
}
var foo2 = function () {
  // 함수표현식
  console.log("hello2");
};
```

```js
/** --- JS Parser 내부의 호이스팅(Hoisting)의 결과 - 위와 동일 --- */
var foo2; // [Hoisting] 함수표현식의 변수값 "선언"

function foo() {
  // [Hoisting] 함수선언문
  console.log("hello");
}

foo();
foo2(); // ERROR!!

foo2 = function () {
  console.log("hello2");
};
```

- 호이스팅은 함수선언문과 함수표현식에서 서로 다르게 동작하기 때문에 주의해야 한다.
  - 변수에 할당된 함수표현식은 끌어 올려지지 않기 때문에 이때는 변수의 스코프 규칙을 그대로 따른다.

### 함수선언문과 함수표현식에서의 호이스팅

#### 함수선언문에서의 호이스팅

- 함수선언문은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

```js
/* 정상 출력 */
function printName(firstname) {
  // 함수선언문
  var result = inner(); // "선언 및 할당"
  console.log(typeof inner); // > "function"
  console.log("name is " + result); // > "name is inner value"

  function inner() {
    // 함수선언문
    return "inner value";
  }
}

printName(); // 함수 호출
```

```js
/** --- JS Parser 내부의 호이스팅(Hoisting)의 결과 - 위와 동일 --- */
/* 정상 출력 */
function printName(firstname) {
  var result; // [Hoisting] var 변수 "선언"

  function inner() {
    // [Hoisting] 함수선언문
    return "inner value";
  }

  result = inner(); // "할당"
  console.log(typeof inner); // > "function"
  console.log("name is " + result); // > "name is inner value"
}

printName();
```

- 즉, 해당 예제에서는 함수선언문이 아래에 있어도 printName 함수 내에서 inner를 function 으로 인식하기 때문에 오류가 발생하지 않는다.

#### 함수표현식에서의 호이스팅

- 함수표현식은 함수선언문과 달리 선언과 호출 순서에 따라서 정상적으로 함수가 실행되지 않을 수 있다.
  - 함수표현식에서는 선언과 할당의 분리가 발생한다.

1. 함수표현식의 선언이 호출보다 위에 있는 경우 - 정상 출력

```js
/* 정상 */
function printName(firstname) {
  // 함수선언문
  var inner = function () {
    // 함수표현식
    return "inner value";
  };

  var result = inner(); // 함수 "호출"
  console.log("name is " + result);
}

printName(); // > "name is inner value"
```

```js
/* 정상 */
/** --- JS Parser 내부의 호이스팅(Hoisting)의 결과 - 위와 동일 --- */
function printName(firstname) {
  var inner; // [Hoisting] 함수표현식의 변수값 "선언"
  var result; // [Hoisting] var 변수값 "선언"

  inner = function () {
    // 함수표현식 "할당"
    return "inner value";
  };

  result = inner(); // 함수 "호출"
  console.log("name is " + result);
}

printName(); // > "name is inner value"
```

2. 함수표현식의 선언이 호출보다 아래에 있는 경우 (var 변수에 할당) - TypeError

```js
/* 오류 */
function printName(firstname) {
  // 함수선언문
  console.log(inner); // > "undefined": 선언은 되어 있지만 값이 할당되어있지 않은 경우
  var result = inner(); // ERROR!!
  console.log("name is " + result);

  var inner = function () {
    // 함수표현식
    return "inner value";
  };
}
printName(); // > TypeError: inner is not a function
```

```js
/** --- JS Parser 내부의 호이스팅(Hoisting)의 결과 --- */
/* 오류 */
function printName(firstname) {
  var inner; // [Hoisting] 함수표현식의 변수값 "선언"

  console.log(inner); // > "undefined"
  var result = inner(); // ERROR!!
  console.log("name is " + result);

  inner = function () {
    return "inner value";
  };
}
printName(); // > TypeError: inner is not a function
```

- printName 에서 'inner is not defined' 이라고 오류가 나오지 않고, 'inner is not a function' 이라는 TypeError 가 나오는 이유 ?
- printName 이 실행되는 순간 (Hoisting 에 의해) inner는 'undefined' 으로 지정되기 때문이다.
- inner 가 undefined 라는 것은 즉, 아직은 함수로 인식이 되지 않고 있다는 것을 의미한다.

3. 함수표현식의 선언이 호출보다 아래에 있는 경우 (const/let 변수에 할당) - **ReferenceError**

```js
/* 오류 */
function printName(firstname) {
  // 함수선언문
  console.log(inner); // ERROR!!
  let result = inner();
  console.log("name is " + result);

  let inner = function () {
    // 함수표현식
    return "inner value";
  };
}
printName(); // > ReferenceError: inner is not defined
```

- let/const 의 경우, 호이스팅이 일어나지 않기 때문에 위의 예시 그대로 이해하면 된다.
- `console.log(inner);` 에서 inner 에 대한 선언이 되어있지 않기 때문에 이때는 'inner is not defined'
