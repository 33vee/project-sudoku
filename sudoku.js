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
  function helper() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValidMove(board, row, col, num)) {
              board[row][col] = num;
              if (helper()) {
                return true;
              }

              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  helper();
  return board;
}

function isSolved(board) {
  return board.every((row) => row.every((num) => num !== 0)); 
}

function prettyBoard(board) {
  let output = '\n';

  for (let i = 0; i < 9; i++) {
    if (i % 3 === 0) output += '+-------+-------+-------+\n';

    for (let j = 0; j < 9; j++) {
      if (j % 3 === 0) output += '| ';
      output += board[i][j] === 0 ? '. ' : board[i][j] + ' ';
    }

    output += '|\n';
  }

  output += '+-------+-------+-------+\n';
  return output;
}

module.exports = { read, solve, isSolved, prettyBoard };
