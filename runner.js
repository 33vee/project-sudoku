// Используйте для решения судоку необходимые функции из файла sudoku.js
const {
  read,
  firstBlank,
  lineCheck,
  columnCheck,
  squareCheck,
  finalPossibleVals,
  solve,
  listNodes,
  prettyBoard

} = require('./sudoku')

const massForTest = [
  [1,4,5,8,3,2,6,7,],
  [6,,,1,9,5,,,],
  [,9,8,,,,,6,],
  [8,,,,6,,,,3],
  [4,,,8,,3,,,1],
  [7,,,,2,,,,6],
  [,6,,,,,2,8,],
  [,,,4,1,9,,,5],
  [,,,,8,,,7,9]        
]

const num = 12;

const playBoard = read(num);
console.log(prettyBoard(solve(playBoard)));