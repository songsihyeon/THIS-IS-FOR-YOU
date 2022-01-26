## CORS

### CORS ?

CORS 는 Cross Origin Resource Sharing 의 약자로, 교차 출처 공유라는 의미이다..

Origin 은 1. scheme, 2. host, 3. port 로 이루어진 도메인을 의미한다.

```
https://www.naver.com/

1. scheme: https
2. host: www.naver.com
3. port: null (비공개)
```

현재 `1 자신이 속한 출처(Origin)` 을 기준으로 `2 다른 출처(Origin)` 에 API를 요청하게 되면 브라우저에서 이 요청으로 넘어오는 경과가 안전한지 판단하게 되는데,

요청을 보내는 출처가 `1 자신이 속한 출처` 가 아닌 `2 다른 출처` 여도 서로 예상되는 출처라면 요청에 대해 허용해주는 응답 헤더를 보내, 브라우저가 응답 결과를 보여준다.

이를 CORS(Cross Origin Resource Sharing) 이라 한다.

#### 왜 브라우저가 CORS 요청을 처리할까

모든 서버들이 다 CORS를 인지하지는 않기 때문이다.

결과적으로 브라우저는 거부했다고 하더라도, 서버는 처리해버리는 결과가 생길 수 있기 때문에

서버가 안전하게 요청을 주고받을 수 있도록 브라우저에서 해당 요청(CORS)을 처리한다.

#### 실제 요청에서는 어떻게 처리할까

CORS 는 다른 Origin 에 대한 요청을 허용하는 정책이다.

같은 Origin 에서 HTTP 통신을 하는 경우 알아서 cookie가 request header 에 들어가지만, 교차 출처로 요청하는 상황에서는 그렇지않다.

Origin 이 다른 HTTP 통신에서는 request header 에 쿠키가 자동으로 들어가기 않기 때문에 서버에게 또는 클라이언트에게 내가 어떤 요청을 보내는 지 알려줄 필요가 있다.

```
프론트 > WithCredentials: true
서버 > Access-Control-Allow-Credentials: true
```

### CORS 해결 경험

1. 서버 개발자와 빠르게 소통한다.

만약 프론트에서 CORS 관련 설정이 다 끝난 이후에 HTTP 요청을 보냈을 때 CORS 오류가 뜰 경우 해당 오류를 캡처해서 같이 확인해본다.

먼저 프론트에서 응답 헤더에 제대로 된 정보를 넣었는 지 확신을 가지는 것이 중요하다 (credentials 관련 설정을 했는지)

2. 개발 환경에 프록시 설정을 해둔다.

만약 개발 환경에 있어서 세팅을 잘 해놓은 상태이고 서버의 세팅이 완벽함에도 문제가 생긴다면, 개발 환경에서의 프로시 설정도 대안이 될 수 있다.
