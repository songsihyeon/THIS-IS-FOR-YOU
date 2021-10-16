## URI vs URL

### URI

- URI는 특정 리소스를 식별하는 통합 자원 식별자 (Uniform Resource Identifier) 를 의미한다. 웹 기술에세 사용하는 **논리적 또는 물리적 리소스를 식별**하는 고유한 문자열 시퀀스다.

### URL

- URL은 흔히 **웹 주소**라고도 하며, 컴퓨터 네트워크 상에서 리소스가 **어디 있는지 알려주기** 위한 규약이다. URI의 서브셋이다.

![](https://www.charlezz.com/wordpress/wp-content/uploads/2021/02/www.charlezz.com-uri-url-uri-url-768x768.png)

URI와 URL의 가장 큰 차이점은 아래와 같다.

> URI 는 식별하고, URL 은 위치를 가르킨다.

실제 네트워크 상에서 URI 와 URL의 예시
![](https://www.charlezz.com/wordpress/wp-content/uploads/2021/03/www.charlezz.com-uri-url-uri-vs-url.png)

첫번째 주소는 웹 서버의 실제 파일 위치를 나타내는 주소이므로 URI이면서 URL이다.

두번째 주소는 실제로 index 라는 파일이 웹 서버에 존재하지 않으므로 URL은 아니다. 하지만 서버 내부에서 이를 처리하여 결국 index.html 을 가리키기 때문에 URI 라고 볼 수 있다.

### URI 의 구조

일반 URI는 다음과 같은 형태를 나타낸다.
`scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]`

1. scheme: 사용할 프로토콜을 뜻하며 웹에서는 HTTP 또는 HTTPS 를 사용한다.
2. user와 password: (서버에 있는) 데이터에 접근하기 위한 사용자의 이름과 비밀번호
3. host와 port: 접근할 대상(서버)의 호스트명과 포트번호
4. path: 접근할 대상(서버)의 경로에 대한 상세 정보
5. query: 접근할 대상에 전달하는 추가적인 정보 (파라미터)
6. fragment: 메인 리소스 내에 존재하는 서브 리소스에 접근할 때 이를 식별하기 위한 정보
