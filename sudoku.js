const { doesNotReject } = require('assert');
const fs = require('fs');

function read() {
  const sudoku = fs.readFileSync('./puzzles.txt', 'utf-8');
  const arrSudoku = sudoku.split('\n');
  const arrSudoku1 = arrSudoku.map((el) =>
    el
      .replace(/(.{9})/g, `$1 `)
      .split(' ')
      .slice(1, 9)
      .map((el1) => el1.split('')),
  );
  return arrSudoku1;
}

function solveTable(num) {
  const arr = read()[num];
  const tableArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][0] !== '-') tableArr.push(arr[j][0]);
    }
    return tableArr;
  }
  return tableArr;
}
console.log(solveTable(1));

function solveLine(num) {
  const arr = read()[num];
  const lineArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== '-') lineArr.push(arr[i][j]);
    }
    return lineArr;
  }
  return lineArr;
}
console.log(solveLine(1));

// function solveSquare(num) {
//   const arr = read()[num];
//   const squareArr = [];
//   for (let i = 0; i < 3; i++) {
//     if (arr[i] !== '-') squareArr.push(arr[i]);
//     for (let j = 0; j < 3; j++) {
//       if (arr[i][j] !== '-') squareArr.push(arr[i][j]);
//     }
//     return squareArr;
//   }
//   return squareArr;
// }
// console.log(solveSquare(1));


function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
