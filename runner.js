// Используйте для решения судоку необходимые функции из файла sudoku.js
const {
  read,
  firstBlank,
  lineCheck,
  columnCheck,
  squareCheck,
  finalPossibleVals,
  solve,
  prettyBoard
} = require('./sudoku')

num = 1;

const playBoard = read(num);
console.log(prettyBoard(playBoard))
const possibleSolution = solve(playBoard);
console.log(possibleSolution)