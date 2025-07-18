function squr(arr, i, j) {
  const numbers = [];
  let a;
  let b;

  if (i <= 2 && j <= 2) {
    a = 0;
    b = 0;
  }
  if (i <= 2 && j <= 5 && j >= 3) {
    a = 0;
    b = 3;
  }
  if (i <= 2 && j <= 8 && j >= 6) {
    a = 0;
    b = 6;
  }
  if (i <= 5 && i >= 3 && j <= 2) {
    a = 3;
    b = 0;
  }
  if (i <= 5 && i >= 3 && j <= 5 && j >= 3) {
    a = 3;
    b = 3;
  }
  if (i <= 5 && i >= 3 && j <= 8 && j >= 6) {
    a = 3;
    b = 6;
  }
  if (i <= 8 && i >= 6 && j <= 2) {
    a = 6;
    b = 0;
  }
  if (i <= 8 && i >= 6 && j <= 5 && j >= 3) {
    a = 6;
    b = 3;
  }
  if (i <= 8 && i >= 6 && j <= 8 && j >= 6) {
    a = 6;
    b = 6;
  }
  for (let i = a; i < a + 3; i++) {
    for (let j = b; j < b + 3; j++) {
      numbers.push(arr[i][j]);
    }
  }
  return numbers;
}

module.exports = {squr};