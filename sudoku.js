const fs = require('fs');

function read(variant) {
  if (variant <= 0) {
    throw new Error('Ошибка: номер варианта должен быть больше 0!');
  }

  const data = fs.readFileSync('./puzzles.txt', 'utf8').trim().split('\n');

  if (variant > data.length) {
    throw new Error('Ошибка: в файле нет столько вариантов судоку.');
  }

  const board = data[variant - 1].split('').map((c) => (c === '-' ? 0 : parseInt(c, 10)));

  return Array.from({ length: 9 }, (_, i) => board.slice(i * 9, (i + 1) * 9));
}

function isValidMove(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
    return board.every((row) => row.every((num) => num !== 0)); // rjvvtynfhbq
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}


module.exports = {read, solve, isSolved, prettyBoard}