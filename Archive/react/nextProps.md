## getStaticProps vs getServerSideProps

pre-render 가 필요한 경우에 활용한다.

### getStaticProps

**빌드 시에 딱 한번** 호출 되고, 바로 static file로 빌드 된다.
따라서 이후 수정이 불가능하다.

SSG (Static Site Generation) 개념이다.

장점은 호출 시 마다 data fetch 를 하지 않으니 getServerSideProps 보다 성능면에서 좋다.

### getServerSideProps
