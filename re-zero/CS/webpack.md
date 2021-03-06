## 웹팩과 바벨

### 웹팩

웹팩이란 최신 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러이다.

모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, javascript, images 등) 을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물로 만드는 도구를 의미한다.

### 모듈

모듈이란 프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위를 의미한다.
자바스크립트로 예시를 들면 아래와 같은 코드가 모듈이다.

```js
// math.js

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

const PI = 3.14;

export { sum, substract, PI };
```

이 math.js 파일은 아래와 같이 세가지 기능을 갖고 있는 모듈이다.

- 두 숫자의 합을 구하는 sum() 함수
- 두 숫자의 차를 구하는 substract() 함수
- 원주율 값을 갖는 PI 상수

이처럼 성격이 비슷한 기능들을 하나의 의미있는 파일로 관리하면 모듈이 된다.

웹팩에서 지칭하는 모듈이라는 개념은 자바스크립트 모듈에만 국한되지 않고 웹 애플리케이션을 구성하는 모든 자원을 의미한다.

웹 애플리케이션을 제작하려면 HTML, CSS, javascript, images, font 등 많은 파일 들이 필요하다. 이 때 이 파일 하나하나가 모두 모듈이다.

### 모듈 번들링

아래 그림과 같이 웹 애플리케이션을 구성하는 몇십, 몇백개의 자원을 하나의 파일로 병합 및 압축 해주는 동작을 모듈 번들링이라고 한다.

파일들의 연관된 관계를 파악하여 파일들을 하나의 파일로 압축시켜주는 과정을 번들링 과정이라 한다.

![](https://github.com/junh0328/prepare_frontend_interview/raw/main/cs_images/7.png)

#### 웹팩 등장배경 및 웹팩의 장점

1. 파일 단위의 자바스크립트 모듈 관리의 필요성
2. 웹 개발 작업 자동화 도구
3. 웹 애플리케이션의 빠른 로딩과 높은 성능

#### 웹팩의 주요 속성 4가지

1. entry
2. output
3. loader
4. plugin

##### entry

entry 속성은 웹팩에서 웹 자원을 변환하기 위해 필요한 최초 진입점이자 자바스크립트 파일 경로이다.

##### output

output 속성은 웹팩을 돌리고 난 결과물의 파일 경로를 의미한다.

##### loader

로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, images, font 등) 들을 빌드 시에, 자바스크립트이 output 파일에 포함될 수 있도록 도와주는 속성이다.

##### plugin

output 파일에 css 파일을 같이 번들링 하는 것이 아닌 별도의 css 파일로 만들어주기 위해서는 플러그인을 사용할 필요가 있다.

플러그인은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성이다.

로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다고 볼 수 있다.

### 바벨

바벨은 자바스크립트에서 지원하는 최신 문법 (ES6, ES7 ... ) 들을 최대한 많은 브라우저 환경에서 호환이 가능하도록 변환해주는 (트랜스파일링 해주는) 언어이다.

#### 트랜스파일 (transpile)

![](https://github.com/junh0328/prepare_frontend_interview/raw/main/cs_images/8.png)

#### 바벨 변환

바벨을 사용하면 거대한 변화가 생기기 시작한 기점인 ES6 이후의 문법을 브라우저에서 범용적으로 사용되는 문법 단계로 변화해줄 수 있다.

```js
// Babel Input: ES6 arrow function
[1, 2, 3].map((n) => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
```
