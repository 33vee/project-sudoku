const fs = require('fs');

function read(num1, num2) {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8');

  let cleanStr = puzzles.replace(/\r?\n|\r/g, '');
  let newArr = [];

  for (let i = 0; i < cleanStr.length; i += num1) {
    let chunk = cleanStr.slice(i, i + num1);
    let innerArr = [];

    for (let j = 0; j < chunk.length; j += num2) {
      innerArr.push(chunk.slice(j, j + num2).split(''));
    }

    newArr.push(innerArr);
  }

  return newArr;
}

console.log(read(81, 9));

function solve(num) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

const arr = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

function prettyBoard(arr) {
  for (let i = 0; i < arr.length; i++) {
    let line = '';
    for (let j = 0; j < arr[i].length; j++) {
      line += `${arr[i][j]} `;
      if (j === 2 || j === 5) {
        line += ' | ';
      }
    }
    console.log(line);
    if (i === 2 || i === 5) {
      console.log('— — — — — — — — — — — — ');
    }
  }
  return arr;
}
prettyBoard(arr);
