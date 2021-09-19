## CallBack 함수

#### 1. 다른 함수의 인자로써 이용되는 함수

#### 2. 어떤 이벤트에 의해 호출되어지는 함수

##### 비동기 작업을 순차적으로 실행하는 법 ?

> **CallBack 함수**

```js
function first(callback) {
  setTimeout(function () {
    console.log('첫번째');
    callback();
  }, 3000);
}

function second() {
  console.log('두번째');
}

first(function () {
  second();
});
```

> result: (3초 후) "첫번째", "두번째"

### Promise

```js
function say(callback) {
  setTimeout(function () {
    callback();
  }, 3000);
}
say(function () {
  console.log('A');
  say(function () {
    console.log('B');
    say(function () {
      console.log('C');
    });
  });
});
```

> result: (3초 후) "A", (3초 후) "B", (3초 후) "C"

이렇게 Callback 함수를 중첩하여 사용하면 가독성이 떨어져 작업 내용을 이해하기 어려워진다.
_이것을 Callback Hell 이라고도 한다._
**Promise** 를 사용하면 콜백 헬을 극복하고 비동기 처리도 간결하게 작성할 수 있다.

**Promise 사용 예시**

```js
const promise = new Promise((resolve, reject) => {
  ...
});
```

- **_resolve_**: 함수 안의 처리가 끝났을 때 호출해야하는 Callback 함수.
  어떠한 값도 인수로 넘길 수 있다. 다음 처리를 실행하는 함수에 전달된다.
- **_reject_**: 함수 안의 처리가 실패했을 때 호출해야하는 Callback 함수.
  어떠한 값도 인수로 넘길 수 있다. 주로 오류 메시지 문자열을 인수로 사용한다.

**then/catch 메서드**

```js
promise.then();

promise.catch();
```

promise 내부에서 resolve 가 호출되면 then 이 실행되고, reject 가 호출되면 catch 가 실행된다.
resolve 와 reject 에 넣어준 인자는 각각 then 과 catch 의 매개변수에서 받을 수 있다.

```js
// 2의 거듭제곱을 구하는 예시

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const input = parseInt(prompt('10 미만 숫자를 입력하시오'));
    if (input < 10) {
      resolve(input);
    } else {
      reject(`오류: ${input}은 10 이상이거나 숫자가 아닙니다.`);
    }
  }, 2000);
});

promise
  .then((num) => {
    console.log(`2^${num} = ${Math.pow(2, num)}`);
  })
  .catch((error) => {
    console.log(error);
  });
```

> result: 2초 후, "10 미만 숫자를 입력하시오" 라는 입력창이 뜬다. 입력한 숫자가 10 미만 이라면 then 으로 넘긴 함수가 실행되고, 그렇지 않다면 catch 에 넘긴 함수가 실행된다.

**then 의 두번째 인수**

```js
promise.then(A, B);
```

then 메서드에 두번째 인수로 실패 Callback 함수를 지정할 수 있다. 그러면 then 메서드에서 처리할 내용과 catch 메서드에서 처리할 내용을 then 메서드 하나로 담을 수 있다.

위의 **_then/catch_** 예시를 아래와 같이 수정할 수 있다.

```js
promise.then(
  (num) => {
    console.log(`2^${num} = ${Math.pow(2, num)}`);
  }, // 처리가 성공으로 끝날때 호출
  (error) => {
    console.log(error);
  } //처리가 실패로 끝날때 호출
);
```

**Promise.all**
프로미스 여러 개를 한 번에 실행할 수 있는 방법이 있다.
지금까지는 비동기 처리 여러 개를 직렬로 연결해서 순차적으로 실행했지만 Promise 객체의 all 메서드를 이용하면 비동기 처리 여러 개를 병렬로 할 수 있다.

```js
Promise.all([
  buySomething('John', 500),
  buySomething('Mary', 1000),
  buySomething('Bill', 1500),
])
  .then((remain) => {
    console.log(remain);
  })
  .catch((error) => {
    console.log(error);
  });
```

**async/await**
async/await 문법은 Promise를 더욱 쉽게 사용 할 수 있게 해준다.

```js
async function 함수명() {
  await 비동기처리_메서드명();
}
```

function 앞에 async 를 붙이고 Promise 앞에 await 을 붙어주면 해당 Promise가 끝날때까지 기다렸다가 다음 작업을 수행할 수 있다.
