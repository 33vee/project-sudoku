const { vert } = require('./funcVert.js');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  return [
    [1, '-', 5, 8, '-', 2, '-', '-', '-'],
    ['-', 9, '-', '-', 7, 6, 4, '-', 5],
    [2, '-', '-', 4, '-', '-', 8, 1, 9],
    ['-', 1, 9, '-', '-', 7, 3, '-', 6],
    [7, 6, 2, '-', 8, 3, '-', 9, '-'],
    ['-', '-', '-', '-', 6, 1, '-', 5, '-'],
    ['-', '-', 7, 6, '-', '-', '-', 3, '-'],
    [4, 3, '-', '-', 2, '-', 5, '-', 1],
    [6, '-', '-', 3, '-', 8, 9, '-', '-'],
  ];
}

function main() {
  for (let i = 1; i < 2; i++) {
    let arrI = read(i);
    for (let i = 0; i < 81; i++) {
      if (isSolved(arrI)) {
        return prettyBoard(arrI);
      } else {
        return (arrI = solve(arrI));
      }
    }
  }
}

function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === 'number') {
        const numArr = sort(arr, i, j);
        if (numArr.length === 1) {
          arr[i][j] = numArr[0];
        }
      }
    }
  }
  return arr;
}

function sort(arr, i, j) {
  const arrSmall = [...arr[i], ...vert(arr, j), ...squr(arr, i, j)];
  const arrResult = [];
  for (let i = 1; i < 9; i++) {
    if (!arrSmall.find((el) => el == i)) {
      arrResult.push[i];
    }
  }
  return arrResult;
}

function squr(arr, i, j) {
  return [4, 5, 6];
}

function isSolved(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] !== 'number') {
        count += 1;
      }
    }
  }
  if (!count) {
    return true;
  } else {
    return false;
  }
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
