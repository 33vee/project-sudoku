const sudoArr = [
  '1-58-2---',
  '-9--764-5',
  '2--4--819',
  '-19--73-6',
  '762-83-9-',
  '----61-5-',
  '--76---3-',
  '43--2-5-1',
  '6--3-89--',
];

function solve(arr) {
  const board = arr.map((row) => row.split(''));

  function isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
    }

    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) return false;
      }
    }
    return true;
  }
  function solveSudoku() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '-') {
          for (let num = 1; num <= 9; num++) {
            const numStr = num.toString();
            if (isValid(row, col, numStr)) {
              board[row][col] = numStr;

              if (solveSudoku()) {
                return true;
              }
              board[row][col] = '-';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solveSudoku();
  return board.map((row) => row.join(''));
}

console.log(solve(sudoArr));
