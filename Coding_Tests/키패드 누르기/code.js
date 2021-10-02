function getDistance(start, target) {
  let distance = 0;
  distance += Math.max(start[0], target[0]) - Math.min(start[0], target[0]);
  distance += Math.max(start[1], target[1]) - Math.min(start[1], target[1]);
  return distance;
}

function solution(numbers, hand) {
  let result = [];

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

  let left = keyPad[11];
  let right = keyPad[12];
  let isLeft = false;

  numbers.map((num) => {
    if (num == 1 || num == 4 || num == 7) {
      isLeft = true;
    }
    if (num == 3 || num == 6 || num == 9) {
      isLeft = false;
    }
    if (num == 2 || num == 5 || num == 8 || num == 0) {
      if (getDistance(left, keyPad[num]) == getDistance(right, keyPad[num])) {
        if (hand == 'left') {
          isLeft = true;
        } else {
          isLeft = false;
        }
      } else if (
        getDistance(left, keyPad[num]) < getDistance(right, keyPad[num])
      ) {
        isLeft = true;
      } else {
        isLeft = false;
      }
    }
    if (isLeft) {
      result.push('L');
      left = keyPad[num];
    } else {
      result.push('R');
      right = keyPad[num];
    }
  });
  return result;
}

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = 'right';

console.log(solution(numbers, hand));
