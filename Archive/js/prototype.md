## Prototype 이란 ?

### Prototype vs Class

클래스(Class), 객체지향언어에서 빠질 수 없는 개념이다.
하지만 객체지향언어인 js 에는 클래스라는 개념이 없다.
**대신 프로토타입(Prototype)** 이라는 것이 존재한다.

프로토타입 사용 예제

```js
function Person() {
  this.eyes = 2;
  this.nose = 1;
}
var kim = new Person();
var park = new Person();

console.log(kim.eyes); // => 2
console.log(kim.nose); // => 1

console.log(park.eyes); // => 2
console.log(park.nose); // => 1
```

kim 과 park 은 eyes 와 nose를 공통적으로 가지고 있는데, 메모리에는 eyes와 nose가 두 개씩 총 4개가 할다오딘다.
객체를 100개를 만든다면 200개의 변수가 메모리의 할당된다.
이런 문제를 프로토 타입으로 해결할 수 있다.

```js
function Person() {}

Person.prototype.eyes = 2;
Person.prototype.nose = 1;

var kim  = new Person();
var park = new Person():

console.log(kim.eyes); // => 2
```

**Person.prototype 이라는 빈 Object가 어딘가에 존재하고, Person 함수로부터 생성된 객체 (kim, park) 들은 어딘가에 존재하는 Object에 들어있는 값을 모두 갖다쓸 수 있다.**
즉, eyes 와 nose 를 어딘가에 있는 빈 공간에 넣어놓고 kim 과 park 이 공유해서 사용하는 것이다.

### Prototype Object 와 Prototype Link

자바스크립트에는 **Prototype Object** 와 **Prototype Link** 라는 것이 존재한다.
그리고 이 둘을 합쳐서 **Prototype** 이라고 부른다.

#### Prototype Object

객체는 언제나 함수(Function)로 생성된다.

```js
function Person() {} // => 함수

let personObject = new Person(); // => 함수로 객체 생성
```

personObject 객체는 Person 이라는 함수로 생성된 객체이다. 이렇듯 언제나 객체는 함수에서 시작된다.

```js
let obj = {};
```

함수와는 전혀 상관없는 코드로 보이지만 사실 다음 코드와 같다.

```js
let obj = new Object();
```

위 코드에서 Object 가 js에서 기본적으로 제공하는 함수이다.

이것이 Prototype Object 와 무슨 상관이 있느냐 ? 함수가 정의될 때는 2가지 일이 동시에 이루어진다.

**_1. 해당함수에 Constructor (생성자) 자격 부여_**

Constructor 자격이 부여되면 new를 통해 객체를 만들어 낼 수 있다.
이것이 함수만 new 키워드를 사용할 수 있는 이유이다.

![](https://miro.medium.com/max/772/1*rADwBTPKeORv_Qf-lhbFRA.png)

**_2. 해당 함수의 Prototype Object 생성 및 연결_**

함수를 정의하면 함수만 생성되는 것이 아니라 Prototype Object 도 같이 생성이 된다.

![](https://miro.medium.com/max/1400/1*PZe_YnLftVZwT1dNs1Iu0A.png)

그리고 생성된 함수는 prototype 이라는 속성을 통해 Prototype Object 에 접근할 수 있다.
Prototype Object 는 일반적인 객체와 같으며 기본적인 속성으로 **constructor** 와 **\_\_proto\_\_** 를 가지고 있다.

![](https://miro.medium.com/max/614/1*NpSb7ha6lMdZpc8hFvBl2g.png)

**constructor** 는 Prototype Object 와 같이 생성되었던 함수를 가르키고 있다.
**\_\_proto\_\_ 는 Prototype Link 이다.**

![](https://miro.medium.com/max/588/1*PLRkoBdVZv9vZW1Z4FlLJw.png)

Prototype Object 는 일반적인 객체이므로 속성을 마음대로 추가/삭제 할 수 있다.
kim 과 park 은 Person 함수를 통해 생성되었으니 Person.prototype 을 참조할 수 있게 된다.

#### Prototype Link

![](https://miro.medium.com/max/452/1*TPkfy4eqiHHpWDvEOjfQCg.png)

kim 에는 eyes 라는 속성이 없는데도 kim.eyes 를 실행하면 2라는 값을 참조하는 것을 볼 수 있다.
위에서 설명했듯이 Prototype Object 에 존재하는 eyes 속성을 참조한 것 이다.

바로 kim 이 가지고 있는 딱 하나의 속성 **\_\_proto\_\_** 가 그것을 가능하게 해주는 열쇠이다.

**prototype** 속성은 함수만 가지고 있던 것과는 달리
**\_\_proto\_\_** 속성은 모든 객체가 빠짐없이 가지고 있는 속성이다.

**\_\_proto\_\_** 는 객체가 생성될 때 조상이었던 함수의 Prototype Object 를 가리킵니다. kim 객체는 Person 함수로부터 생성되었으니 Person 함수의 Prototype Object 를 가리키고 있는 것이다.

![](https://miro.medium.com/max/540/1*4V9q1tS5GWLU4sMkhOVNEg.png)

\_\_proto\_\_ 를 까보니 역시 Person 함수의 Prototype Object 를 가리키고 있다.

![](https://miro.medium.com/max/1400/1*jMTxqTYDZGhykJQoimmb0A.png)

kim 객체가 eyes 를 직접 가지고 있지 않기 때문에 eyes 속성을 찾을 때 까지 상위 프로토타입을 탐색한다. 최상위인 Object 의 Prototype Object 까지 도달했는데도 못 찾았을 경우 undefined 를 리턴한다.
이렇게 \_\_proto\_\_ 속성을 통해 상위 프로토타입과 연결되어있는 형태를 **프로토타입 체인**(Chain)이라고 한다.

![](https://miro.medium.com/max/1400/1*mwPfPuTeiQiGoPmcAXB-Kg.png)
