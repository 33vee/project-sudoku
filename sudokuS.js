const fs = require('fs');

function read() {
  const path = './puzzles.txt';
  const text = fs.readFileSync(path, 'utf8');
  return text;
}

const text = read();

function textSolve(text) {
  const arr = [];
  for (let i = 0; i < text.length; i += 9) {
    const value = text.slice(i, i + 9).split('');
    arr.push(value);
  }
  return arr;
}
console.log(textSolve(text))

function solve(arr) {
  const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  function solveRecursive() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (arr[i][j] === '-') {
          for (let num of nums) {
            if (isSolved(i, j, num)) {
              arr[i][j] = num;
              if (solveRecursive()) return true;
              arr[i][j] = '-';
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function isSolved(row, col, num) {
    if (arr[row].includes(num)) return false; // Проверяем строку

    for (let i = 0; i < 9; i++) {
      if (arr[i][col] === num) return false; // Проверяем столбец
    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (arr[boxRow + i][boxCol + j] === num) return false; // Проверяем квадрат
      }
    }
    return true;
  }

  if (solveRecursive()) {
    return arr;
  } else {
    return 'Нет решения';
  }
}

function prettyBoard(arr) {
  console.log('---------------------');
  for (let i = 0; i < 9; i++) {
    let row = '';
    for (let j = 0; j < 9; j++) {
      row += arr[i][j] + ' ';
      if ((j + 1) % 3 === 0 && j < 8) row += '| ';
    }
    console.log(row);
    if ((i + 1) % 3 === 0 && i < 8) console.log('---------------------');
  }
  console.log('---------------------');
}

prettyBoard(solve(textSolve(text)));

module.exports = {
  read,
  textSolve,
  solve,
  prettyBoard,
};