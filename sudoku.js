
const fs = require('fs');
const file = fs.readFileSync('./puzzles.txt', 'utf8');

const array = file.split('');

function arrays(array, num) {
  const cleanArray = array.map((el) => el.replace(/\n/g, '')).filter((el) => el !== '');

  const result = [];
  for (let i = 0; i < cleanArray.length; i += num) {
    result.push(cleanArray.slice(i, i + num));
  }
  return result;
}
const allBoards = arrays(array, 81);


function read(allBoards, num) {
  const board = allBoards[num - 1];
  return arrays(board, 9);
}

const board = read(allBoards, 1);
console.log(board);

function valid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] == num) {
      return false;
    }
  }
  for (let j = 0; j < 9; j++) {
    if (board[row][j] == num) {
      return false;
    }
  }
  const startIRow = Math.floor(row / 3) * 3;
  const startICol = Math.floor(col / 3) * 3;
  for (let i = startIRow; i <= startIRow + 2; i++) {
    for (let j = startICol; j <= startICol + 2; j++) {
      if (board[i][j] == num) {
        return false;
      }
    }
  }
  return true;

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf08' и вернуть эти данные из функции
   */

}
console.log(valid(board, 2, 2, 6));

function findEmpty(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return null;
}

const arr = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],
  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 0],
  [6, 0, 0, 3, 0, 8, 9, 0, 0],
];
function prettyBoard(solve) {
  const flatArr = solve.flat();
  for (let i = 2; i < flatArr.length; i += 3) {
    if (
      i !== 8 &&
      i !== 17 &&
      i !== 26 &&
      i !== 35 &&
      i !== 44 &&
      i !== 53 &&
      i !== 62 &&
      i !== 71 &&
      i !== 80
    )
      flatArr[i] += ' |';
  }
  for (let i = 8; i < flatArr.length; i += 9) {
    flatArr[i] += '\n';
  }
  let str = ' ';
  const newNewArr = flatArr
    .map((el) => `${el} `)
    .join('')
    .trim();
  const newStr = str + newNewArr;
  console.log(newStr.slice(0, 24).trim());
  console.log(newStr.slice(24, 47).trim());
  console.log(newStr.slice(47, 70).trim());
  console.log('---------------------');
  console.log(newStr.slice(70, 93).trim());
  console.log(newStr.slice(93, 116).trim());
  console.log(newStr.slice(116, 139).trim());
  console.log('---------------------');
  console.log(newStr.slice(139, 162).trim());
  console.log(newStr.slice(162, 185).trim());
  console.log(newStr.slice(185, 208).trim());
}

function solve() {}
prettyBoard(arr);
