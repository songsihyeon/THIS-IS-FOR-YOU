## CORS 정책은 무엇일까 ?

> CORS (Cross-Origin Resource Sharing)

CORS 관련 이슈는 모두 **CORS 정책**을 위반했기 때문에 발생하는 것이다.

CORS는 Cross-Origin Resource Sharing의 줄임말로, 한국어로 직영하면 교차 출처 리소스 공유 이다.
여기서 **교차 출처** 는 **'다른 출처'** 를 의미한다.

다른 출처 간의 리소스 공유에 대해 알아보기에 앞서 출처 **(Origin)** 의 의미를 정확히 하고 넘어가자.

### 출처 (Origin) ?

서버의 위치를 의마하는 `https://google.com` 와 같은 URL은 여러 개의 요소로 구성되어있다.

![](https://hanseul-lee.github.io/2020/12/24/20-12-24-URL/0.png)
이때 출처는 `Protocol`과 `Host`, `Port`를 의미한다. 즉, 서버의 위치를 찾아가기 위해 필요한 가장 기본적인 것들을 합쳐놓은 것이다.

또한 출처 내의 포트 번호는 생략이 가능한데, 이는 각 웹에서 사용하는 HTTP, HTTPS 프로토콜의 기본 포트 번호가 정해져있기 때문이다. (HTTP 80, HTTP 443)

브라우저의 개발자 도구의 console 에서 `Location` 객체가 가지고 있는 `origin` 프로퍼티에 접근함으로써 손 쉽게 애플리케이션이 실행되고 있는 출처를 알아낼 수도 있다.

```js
console.log(location.origin);
```

### SOP (Same-Origin Policy)

웹 생태계에는 다른 출처로의 리소스 요청을 제한하는 것과 관련된 두 가지 정책이 존재한다. 한 가지는 CORS, 그리고 또 한 가지는 **SOP (Same-Origin Policy)** 이다.

SOP는 말 그대로 `같은 출처에서만 리소르를 공유할 수 있다.` 라는 규칙을 가진 정책이다.

그러나 웹이라는 오픈스페이스 환경에서 다른 출처에 있는 리소스를 사용하는 일은 굉장히 흔해 무작정 막을 수도 없는 노릇이니 몇 가지 예외 조항을 두고, 이 조항에 해당하는 리소스 요청은 출처가 다르더라도 허용하기로 했는데, 그 중 하나가 `cors 정책을 지킨 리소스 요청` 이다.

만약 다른 출처로 리소스를 요청한다면 SOP 정책을 위반한 것이 되고, 거기다가 SOP의 예외 조항인 CORS 정책까지 지키지 않는다면 아예 다른 출처의 리소스를 사용할 수 없게 되는 것이다.

출처가 다른 두 개의 애플리케이션이 소통하는 환경은 꽤 위험하다.

최근에는 자바스크립트 코드를 난독화해서 읽기 어렵다고 하지만, 난독화는 어디까지 난독화일 뿐이다.

이런 상황에서 통신에 아무런 제약도 존재하지 않는다면, 악의를 가진 사용자가 소스 코드를 구경한 후 CSRF나 XSS와 같은 방법을 사용하여 애플리케이션에서 코드가 실행된 것처럼 꾸며 사용자의 정보를 탈취하기가 쉬워진다.

### 출처 구분

URL 의 구성 요소 중 `Scheme`, `Host`, `Port` 이 세가지만 동일하면 된다.
|URL|같은 출처 ?| 이유|
|:---:|:---:|:---:|
|`https://sihyeon.github.io/about`|O|Scheme, Host, Port가 동일
|`https://sihyeon.github.io/about?q=안녕`|O|Scheme, Host, Port가 동일
|`https://user:password@sihyeon.github.io/about`|O|Scheme, Host, Port가 동일
|`http://sihyeon.github.io`|X|Scheme 이 다름
|`https://api.github.io`|X|Host 가 다름
|`https://sihyeon.naver.com`|X|Host 가 다름

> CORS 는 브라우저의 구현 스펙에 포함되는 정책이기 때문에, 브라우저를 통하지 않고 서버 간 통신을 할 때는 이 정책이 적용되지 않는다. 또한 CORS 정책을 위반하는 리소스 요청 때문에 에러가 발생했다고 해도 서버 쪽 로그에는 정상적으로 응답을 했다는 로그만 남기 때문에, CORS가 돌아가는 방식을 정확히 모르면 에러 트레이싱에 난항을 겪을 수도 있다.

### CORS는 어떻게 동작할까요~?

웹 클라이언트 애플리케이션이 다른 출처의 리소스를 요청할 때는 HTTP 프로토콜을 사용하여 요청을 보내게 되는데, 이때 브라우저는 요청 헤더에 `Origin` 이라는 필드에 요청을 보내는 출처를 함께 담아보낸다.

> `Origin: https://sihyeon.github.io`

이후 서버가 요청에 대한 응답을 할 때 response header의 `Access-Control-Allow-Origin` 이라는 값에 '이 리소스를 접근하는 것이 허용된 출처' 를 내려주고, 이후 응답을 받은 브라우저는 자신이 보냈던 요청의 `Origin` 과 서버가 보내준 응답의 `Access-Control-Allow-Origin` 을 비교해본 후 이 응답이 유효한 응답인지 아닌지를 결정한다.

사실 CORS 가 동작하는 방식은 한 가지가 아니라 세 가지의 시나리오에 따라 변경되기 때문에 에러가 어떤 시나리오에 해당하는지 잘 파악하면 에러를 고치는 것이 한결 쉬울 것이다.
