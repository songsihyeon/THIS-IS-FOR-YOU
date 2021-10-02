### 내가 생각했을 때 중요한 코드

```js
function getDistance(start, target) {
  let distance = 0;
  distance += Math.max(start[0], target[0]) - Math.min(start[0], target[0]);
  distance += Math.max(start[1], target[1]) - Math.min(start[1], target[1]);
  return distance;
}

let keyPad = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  11: [3, 0],
  0: [3, 1],
  12: [3, 2],
};
```

> 키패드를 2차원 배열화하여 **키패드 숫자의 인덱스를 키패드 숫자(key) 를 통해 알아낼 수 있도록 객체로 선언.**
> getDistance 에서 **행 거리, 열 거리 를 더해 반환.**
> **(거리 = 큰 수 - 작은 수)** 니까 **Math.max, .min** 을 이용해 각 행과 열의 거리를 구해준다.
