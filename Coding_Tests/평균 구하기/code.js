// 내 풀이
function solution(arr) {
  let sum = 0;
  arr.map((el) => (sum += el));
  return sum / arr.length;
}

// 다른 사람의 코드
function average(arr) {
  return arr.reduce((sum, el) => sum + el) / arr.length;
}

// reduce 첫번째 인자 콜백함수의 인수 1.누적값, 2.현재값, 3.인덱스
// reduce 두번째 인자 초깃값
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6

//test
let test = [5, 3, 4];
console.log("평균값 : " + solution(test));
console.log("평균값 : " + average(test));
