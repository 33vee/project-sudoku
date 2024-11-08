const fs = require('fs');

function read() {
  const fileContent = fs.readFileSync('./puzzles.txt', 'utf8');
  return fileContent;
}

function arraySudoku(arr) {
  const sudokuArray = [];
  const rows = arr.split('\n');

  for (const row of rows) {
    if (row.trim() === '') continue;
    const puzzle = [];
    for (let i = 0; i < 9; i++) {
      puzzle.push(row.substr(i * 9, 9).split(''));
    }
    sudokuArray.push(puzzle);
  }
  return sudokuArray;
}

function sudoku(arr, row, col, num) {
  for (let j = 0; j < 9; j++) {
    if (arr[row][j] === num) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (arr[i][col] === num) {
      return false;
    }
  }
  return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function solveSudoku(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] === '-') {
        for (const num of numbers) {
          if (sudoku(arr, i, j, num)) {
            arr[i][j] = num;
            if (solveSudoku(arr)) {
              return true;
            }
            arr[i][j] = '-';
          }
        }
        return false;
      }
    }
  }
  return true;
}

const fileContent = read();
const sudokuBoard = arraySudoku(fileContent);
console.log(sudokuBoard);

if (solveSudoku(sudokuBoard)) {
  console.log(sudokuBoard);
} else {
  console.log('undefined');
}

module.exports = {
  read,
  arraySudoku,
};
