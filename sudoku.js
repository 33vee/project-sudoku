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

const sudoku = read()[0];
//solve
function solve() {
  const board = 9;
  function find() {
    for (let x = 0; x < board; x++) {
      for (let y = 0; y < board; y++) {
        if (sudoku[x][y] === '-') {
          return [x, y];
        }
      }
    }
    return null;
  }
  const pos = find();
  function check(pos, sudoku, num) {
    const [x,y] = pos;
    for (let i = 0; i < board; i++) {
      if (sudoku[x][i] === num && i !== y) {
        return false;
      }
    }
    for (let i = 0; i < board; i++) {
      if (sudoku[i][y] === num && i !== x) {
        return false;
      }
    }
  }if (pos === null) {
      return board;
    }
    const [row, col] = position;
    for (let i = 1; i <= 9; i++) {
      const num = i.toString();
    }
}


function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

let arr = [
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
