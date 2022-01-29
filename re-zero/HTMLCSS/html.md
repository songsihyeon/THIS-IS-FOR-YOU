## 웹 표준 및 웹 접근성

### 웹 표준

웹 표준이란 웹 상에서 표준적으로 사용되는 기술을 말한다.

웹사이트를 어떠한 운영체제에서나 어떠한 브라우저에서 보더라도 동일하게 보여지도록 W3C 기구 표준에 맞추는 것이다.

다양한 브라우저, 휴대폰 PDA, 장애인 지원용 프로그램에서도 대응이 가능하므로 접근성이 향상되고, 장애인, 고령자 등을 포함한 사용자층도 확대 가능하다는 장점이 있다.

최신 웹 표준 버전은 HTML5, CSS3 이다.

### HTML5 에 추가된 내용

- canvas 기능 추가
- 모든 디바이스에서 웹페이지 호환이 가능해졌다.
- 시맨틱 웹 기술을 지원하기 시작했다.

### 웹 접근성

웹 접근성은 모든 사람(비장애인, 장애인, 노인 등) 이 차별 없이 웹 사이트를 자유롭게 이용할 수 있게 하는 권리를 말한다.
쉽게 말해서 특정 대상에 한정되어 있지 않고 모든 사용자가 웹사이트를 이용함에 있어 불편함이 없어야 한다는 것이다.

#### 웹 접근성에 맞는 마크업 예시

1. 이미지에 alt 를 사용하여 대체 텍스트 제공
2. title을 사용해 a 태그에 대한 정보를 적절히 제공
3. input 태그에 적절한 label 제공

### 시맨틱 태그

의미요소(Semantic) 는 HTML로 만든 문서에 추가적으로 의미를 부여해준다.

무의미한 요소(Non-Semantic Element) 로 문서를 작성할 경우, HTML 문서를 접하는 사람이 어떤 데이터를 봐야할지, 어떤 데이터를 제공하는지 파악하기가 어렵다.

시맨틱 태그를 사용함으로써 서로 관계가 있는 정보를 파악하고 콘텐츠가 어떤 맥락 안에 있는지 알기 쉽게 해준다.

### SEO

검색엔진 최적화(SEO: Search Engine Optimization) 는 검색 엔진이 웹페이지의 자료를 수집하거나 순위를 방식에 맞게 웹페이지를 구성하여, 검색 결과의 상위에 나올 수 있게 하는 행위를 말한다.

SEO를 위해서는 검색어를 페이지에 적절하게 배치해야 한다.

검색 엔진은 결과를 보여줄 때, HTML의 태그들을 분석한다.

이때, 시맨틱한 문서는 검색엔진이 유의미한 결과를 낳을 수 있도록 한다.

## HTML

### DOCTYPE

```html
<!-- HTML5 -->
<!DOCTYPE html>
```

HTML이 어떤 버전으로 작성되었는지 미리 선언해, 웹브라우저가 내용을 똑바로 표시할 수 있도록 해주는 것이다.

> 문서형식을 정의해주는 것이다.

### meta 태그

HTML 문서가 어떤 내용을 담고 있고, 키워드는 무엇이며, 누가 만들었는지에 대한 정보를 담고있는 태그이다.

#### meta 태그의 요소

##### charset

```html
<meta charset="utf-8" />
```

charset 요소는 문서에서 허용하는 문자 집합에 대해서 간단히 표시한다.

utf-8 은 전세계적인 character 집합으로 많은 언어의 문자들을 포함한다.

웹 페이지에서 어떤 문자라도 취급할 수 있다는 것을 의미한다.

##### name content

name 요소는 메타 요소가 어떤 정보의 형태를 갖고 있는지 알려준다.

content 요소는 실제 메타 데이터의 컨텐츠이다. 머릿말을 요약하는데 유용하다.

```html
<meta name="author" content="Chris Mills" />

<meta
  name="description"
  content="The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps."
/>
```

해당 태그는 실제 MDN 웹 페이지에 등록된 meta 태그의 name 어트리뷰트와 content 어트리뷰트이다.

구글에 'MDN' 을 검색했을 때, 검색 엔진이 메타 태그의 content 어트리뷰트 안에 있는 내용을 검색 결과와 함께 추가적으로 보여주고 있다.

#### 검색 엔진 최적화를 위한 메타 태그 활용

1. 검색 엔진을 위한 키워드를 정의

```html
<meta name="keyword" content="HTML, meta, tag, element, reference" />
```

2. 웹 페이지에 대한 설명(description)을 정의

```html
<meta name="description" content="HTML meta tag page" />
```

3. 문서의 저자(author) 를 정의

```html
<meta name="author" content="TCPSchool" />
```
