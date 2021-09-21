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

재할당 ( O )

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
