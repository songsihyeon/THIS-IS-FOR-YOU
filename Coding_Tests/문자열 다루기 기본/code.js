function solution(s) {
  return (s.length === 4 || s.length === 6) && s == parseInt(s);
}

// 먼저 s 의 길이가 4, 6 인지 검사하고
// 인자 s 를 parseInt 로 number type 으로 변환한 뒤
// 인자로 받은 s 와 같은지 검사한다.
// === 를 쓰면 안되는 이유 ?
// 1234 == "1234" => true
// 1234 === "1234" => false
