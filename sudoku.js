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

function solve() {}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
