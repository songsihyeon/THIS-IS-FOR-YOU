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

//test
let test = [5, 3, 4];
console.log("평균값 : " + solution(test));
console.log("평균값 : " + average(test));
