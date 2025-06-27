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

// Проверяем валидность
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
}
// Находим пустое
function findEmpty(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return null;
}

// Рекурсия
function solve(board) {
  const empVal = findEmpty(board);
  if (!empVal) {
    return true;
  }

  const [row, col] = empVal;

  for (let num = 1; num <= 9; num++) {
    if (valid(board, row, col, num)) {
      board[row][col] = num;

      if (solve(board)) {
        return board;
      }
      board[row][col] = '-';
    }
  }
  return false;
}

const result = solve(read(allBoards, 15));
// Вывод решения
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
  const str = ' ';
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

prettyBoard(result);
