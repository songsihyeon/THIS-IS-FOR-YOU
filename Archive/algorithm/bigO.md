컴퓨터 과학(이하 cs) 에서 알고리즘은 어떠한 문제를 해결하기 위한 방법이고, 어떠한 문제를 해결하기 위한 방법은 다양하기 때문에 방법 간에 효율성을 비교하기 위해 빅오(big-O) 표기법을 가장 많이 사용한다.

> ## _빅오 표기법 (big-O notation) 이란 ?_

빅오 표기법은 알고리즘의 효율성을 표기해주는 표기법이다.
쉽게 생각하면 알고리즘 스카우터라 생각하면 된다.
알고리즘의 효율성은 데이터 개수(n)가 주어졌을 때 덧셈, 뺄셈, 곱셈 과 같은 기본 연산의 횟수를 의미한다.
빅오 표기법은 보통 알고리즘의 시간 복잡도와 공간 복잡도를 나타내는 데 주로 사용된다.
(시간 복잡도는 알고리즘의 시간 효율성을 의미하고, 공간 복잡도는 알고리즘의 공간 (메모리) 효율성을 의미한다.)
그런데 시간과 공간 복잡도를 나타내는 방법으로는 점근 표기법이라고 해서 빅오(big-O), 빅오메가(big-Ω), 빅세타(big-Θ) 표기법이 있다.

### 그렇다면 세 가지 표기법 중 왜 빅오 표기법을 사용할까 ?

> 빅오 표기법은 알고리즘 효율성을 상한선 기준으로 표기하기 때문이다. (알고리즘 효율성은 값이 클수록 즉, 그래프가 위로 향할수록 비효율적임을 의미한다.)

빅오메가는 하한선을 기준으로 하고, 빅세타는 상한선과 하한선의 사이를 기준으로 표기한다.

> ## _빅오 표기법의 수학적 정의_

빅오 표기법이 나타내는 의미는 수학적 정의를 통해 알 수 있다.
빅오 표기법의 수학적 정의는

![](https://t1.daumcdn.net/cfile/tistory/9907894A5C7E93AB1F)

간단하게 예를 들자면

![](https://t1.daumcdn.net/cfile/tistory/99BCD54C5C7E91841C) 은 내가 만든 알고리즘의 시간 효율성(running time)을 의미하고 충분히 큰 값인 n과 상수 k에 대해

![](https://t1.daumcdn.net/cfile/tistory/990F204C5C7E900D0E)
![](https://t1.daumcdn.net/cfile/tistory/99140E435C7E902820)

이라고 가정하면

![](https://t1.daumcdn.net/cfile/tistory/99CBAC425C7E93BE18) (![](https://t1.daumcdn.net/cfile/tistory/999BAD455C80BAE428)) 가 성립하는 k 값이 존재하기 때문에 내가 만든 알고리즘 ![](https://t1.daumcdn.net/cfile/tistory/99BCD54C5C7E91841C) 은 빅오 표기법을 사용하여 ![](https://t1.daumcdn.net/cfile/tistory/990684485C7E93F914) 로 나타낼 수 있다.

![](https://t1.daumcdn.net/cfile/tistory/9929EB4E5C7E95DE01)

내가 만든 알고리즘의 시간 효율성(runnig time)을 보여주는 그래프가 ![](https://t1.daumcdn.net/cfile/tistory/99BCD54C5C7E91841C) 이다.
이때 ![](https://t1.daumcdn.net/cfile/tistory/99328E4B5C7E97B614) 보다 충분히 큰 입력값 n 을 넣었을 때 내가 만든 알고리즘 ![](https://t1.daumcdn.net/cfile/tistory/99BCD54C5C7E91841C) 의 running time 이 최악인 경우에도 점근 상한선인 ![](https://t1.daumcdn.net/cfile/tistory/995EF34A5C7E96D00F) 을 넘을 수가 없다.
이때 빅오 표기법을 사용하여 ![](https://t1.daumcdn.net/cfile/tistory/994FF34B5C7E986325) 이라고 나타내는 것이다.
( 위의 예시 에서는 ![](https://t1.daumcdn.net/cfile/tistory/990684485C7E93F914) )

> ## _빅오 표기법의 특징_

**1. 상수항 무시**: 빅오 표기법은 데이터 입력 값(n)이 충분히 크다고 가정하고 있고, 알고리즘의 효율성 또한 데이터 입력값(n)의 크기에 따라 영향 받기 때문에 상수항 같은 사소한 부분은 무시한다.

ex)

![](https://t1.daumcdn.net/cfile/tistory/999AF63E5C7EB21A1D) 와 같이 상수항은 무시하고 표기한다.

**2. 영향력 없는 항 무시**: 빅오 표기법은 데이터 입력값(n)의 크기에 따라 영향을 받기 때문에 가장 영향력이 큰 항 이외에 영향력이 없는 항들을 무시한다.

ex)

![](https://t1.daumcdn.net/cfile/tistory/9907BB4F5C7EB2CD02) 와 같이 영향력이 지배적인 ![](https://t1.daumcdn.net/cfile/tistory/99898C4A5C7EB31301) 이외에 영향력이 없는 항들은 무시한다.

> ## _빅오 표기법 성능비교_

빅오 표기법에서 주로 사용되는 표기법은 아래 그래프와 같다.

![](https://t1.daumcdn.net/cfile/tistory/99EF1E395C7EB4B601)

그래프에 나와 있는 시간 복잡도의 성능을 비교하면 다음과 같다.
(왼쪽에서 오른쪽으로 갈수록 효율성이 떨어진다.)

![](https://t1.daumcdn.net/cfile/tistory/995DFD335C7EB57801)

( 상수함수 < 로그함수 < 선형함수 < 다항함수 < 지수함수 )

> ## _빅오 표기법 예제_

빅오 표기법의 예제는 어떤 것들이 있는 지 정도만 외워두고 알고리즘 공부를 해보면서 이해해보자.

1. O(1): 스택에서 Push, Pop
2. O(log n): 이진트리
3. O(n): for 문
4. O(n log n): 퀵 정렬(quick sort), 병합 정렬(merge sort), 힙 정렬(heap sort)
5. O(![](https://t1.daumcdn.net/cfile/tistory/9986834A5C7EBD3007)): 이중 for 문, 삽입 정렬(insertion sort), 버블 정렬(bubble sort), 선택 정렬(selection sort)
6. O(![](https://t1.daumcdn.net/cfile/tistory/99D5714E5C7EBD2506)): 피보나치 수열

[이 분 보고 베낌](https://noahlogs.tistory.com/27)
