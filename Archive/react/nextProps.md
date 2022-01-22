## getStaticProps vs getServerSideProps

pre-render 가 필요한 경우에 활용한다.

### getStaticProps

**빌드 시에 딱 한번** 호출 되고, 바로 static file로 빌드 된다.
따라서 이후 수정이 불가능하다.

SSG (Static Site Generation) 개념이다.

장점은 호출 시 마다 data fetch 를 하지 않으니 getServerSideProps 보다 성능면에서 좋다.

### getServerSideProps

**Page 가 요청 받을 때마다** 호출되어 pre-rendering 한다.

SSR (Server Side Render) 개념이다.

pre-render 가 꼭 필요한 **동적데이터** 가 있는 Page 에 사용하면 된다.

매요청마다 호출되므로 성능은 getStaticProps 에 비해 떨어지지만, 내용을 언제든 동적으로 수정이 가능하다는 점이 장점이다.
