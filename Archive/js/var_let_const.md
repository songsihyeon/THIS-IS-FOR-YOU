## javascript 변수 선언

javascript 의 변수 선언 방법

1. **var**
2. **let**
3. **const**

의 차이점을 알아보자 ~

### **var**

- var 는 재선언과 재할당이 가능한 변수를 선언한다.

재선언 ( O )

```js
var a = 'Hi';
console.log(a); // Hi

var a = 'Bye';
console.log(a); // Bye
```

재할당 ( O )

```js
var a = 'Hi';
console.log(a); // Hi

a = 'Bye';
console.log(a); // Bye
```

재선언과 재할당이 가능하다
=> 코드가 직관적이지 않고, 코드량이 많아지면 변경점을 확인하기 번거롭다.

### let

- let은 재할당은 가능하지만, 재선언이 불가능한 변수를 선언한다.

재선언 ( X )

```js
// Uncaught SyntaxError: Identifier 'b' has already been declared
let b = 'Yes';
console.log(b);

let b = 'No';
console.log(b);
```

재할당 ( O )

```js
let b = 'Yes';
console.log(b); // Yes

b = 'Hmm';
console.log(b); // Hmm
```

### const

- const 는 재선언도, 재할당도 불가능한 **상수**를 선언한다.

재선언 ( X )

```js
// Uncaught SyntaxError: Identifier 'c' has already been declared
const c = 'Go';
console.log(c);

const c = 'Wait';
console.log(c);
```

재할당 ( X )

```js
// Uncaught TypeError: Assignment to constant variable.
const b = 'Go';
console.log(b);

b = 'Wait';
console.log(b);
```

> 변수 값을 **재할당이 필요 없는 경우 const 사용**,
> **재할당이 필요할 경우 let을 사용**하는 것이
> **코드의 안정성**을 높여준다.

\+ 다른 차이점을 알게 되어 기록합니다.

### 스코프 (scope)

스코프 (scope)는 식별자의 유효범위를 뜻하며, 선언된 위치에 따라서 유효 범위가 달라진다. 전역에 선언된 변수는 전역 스코프를, 지역에 선언된 변수는 지역 스코프를 갖는다.

자바스크립트에서는 모든 코드 블록이 지역 스코프를 만들며, 이러한 특성을 블록 레벨 스코프라고 한다. 하지만 **var 키워드로 선언된 변수**는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다. 이를 **함수 레벨 스코프**라고 한다.

```js
var a = 1;

if (true) {
  var a = 5;
}

console.log(a); // output: 5
```

해당 코드는 길이가 짧아 문제 해결이 쉽지만, 실무에서는 그렇지 않다. 전역 변수로 인해 재할당이 발생하거나, 전역 스코프를 공유하기 때문에 어딘가에 동일한 이름이 있다면 예상치 못한 결과를 가져올 수 있는 위험이 있다. 따라서 함수 레벨 스코프의 var 대신, **블록 레벨 스코프를 지원하는 let 와 cont 을 사용하는 것을 권장**한다.

### 호이스팅 (Hoisting)

함수나 스크립트가 실행될 때 함수 선언문과 변수 선언이 끌어올려지는 현상.
**var 로 선언한 변수**는 모두 **최상위로 끌어올려지며 접근도 가능**하다. 단, 내부에서 처리되는 것으로 실제로 코드가 끌어올려지는 것은 아니다.
**let 과 const** 도 마찬가지로 **호이스팅**되어 특수 내부 상태인 '**uninitialized' 상태**로 존재하지만, 선언문을 만나기 전까지는 **참조할 수 없습니다.**

#### 1. var 호이스팅

var 선언은 함수가 시작될 때 처리된다. 전역에서 선언한 변수라면 스크립트가 시작할 때 처리된다.

1

```js
function sayHi() {
  phrase = 'Hello';
  console.log(phrase);
  var phrase;
}
sayHi();
```

2

```js
function sayHi() {
  var phrase;
  phrase = 'Hello';
  console.log(phrase);
}
sayHi();
```

3

```js
function sayHi() {
  phrase = 'Hello';
  console.log(phrase);
  if (false) {
    // 코드 블록은 무시된다
    var phrase;
  }
}
sayHi();
```

> 1, 2, 3 result: Hello

var로 선언한 모든 변수는 함수의 최상위로 끌어 올려진다.
3번 예시처럼 `if (false)` 블록 안 코드가 절대 실행되지 않는 상황이더라도 이는 호이스팅에 영향을 주지 않는다.

#### 호이스팅은 '선언' 만

선언은 호이스팅 되지만 할당은 호이스팅 되지 않는다.

```js
function sayHi() {
  alert(phrase);
  var phrase = 'Hello';
}

sayHi();
```

위의 코드는 다음과 같이 동작한다.

```js
function sayHi() {
  var phrase; // 선언은 함수 시작 시 처리됩니다.
  alert(phrase); // undefined
  phrase = 'Hello'; // 할당은 실행 흐름이 해당 코드에 도달했을 때 처리됩니다.
}

sayHi();
```

`alert()` 를 호출해 phrase 에 접근하기 전 선언이 끝난 상태이기 때문에 에러 없이 alert 창이 뜨고, undefined 가 출력된다.

#### 2. let, const 호이스팅

var 와 달리 아래 코드에서는 phrase 가 선언되기 전에 접근할 수 없다.

```js
function sayHi() {
  phrase = 'Hello';
  console.log(phrase);
  let phrase;
}
sayHi();
```

그렇다고 let 과 const 가 호이스팅되지 않는다고 할 수는 없다. 함수가 호출되거나 스크립트가 시작될 때 내부에 선언한 변수 전체가 렉시컬 환경에 올라간다.
**이때 변수 상태는 특수 내부 상태인 'uninitialized' 가 되며, let 을 만나기 전까진 이 변수를 참조할 수 없다.**
let 을 만나기 전에는 메모리가 할당되지 않아 에러가 발생한다.
이렇게 **변수가 선언되고 해당 변수에 값이 할당되기 전까지를 TDZ** 라고 한다.
반면 **var 로 선언한 변수는 호이스팅 되면서 자동으로 undefined 를 초기값**으로 하여 메모리를 할당하므로 **접근이 가능**하다.

**요약**

- let과 const 는 블록 레벨 스코프를 가지고, var 는 함수 레벨 스코프를 갖는다.
- var 는 변수 선언이 호이스팅 되고, let 과 const 는 'uninitialized' 로 호이스팅 된다.
