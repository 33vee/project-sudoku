const fs = require('fs');

function read() {
  const fileContent = fs.readFileSync('./puzzles.txt', 'utf8');
  return fileContent;
}

/**
 * Прочитать файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
 */
function arraySudoku(arr) {
  const sudokuArray = [];
  const rows = arr.split('\n'); /*копия массива, делим построчно на 81 символ*/

  for (let row of rows) { /*проходимся по массиву rows, перебирая строки row*/
    if (row.trim() === '') continue; /*убираем пустые строки */
    let puzzle = []; /* создаем многометрый массив, тто есть массивы в массивах rows, деля строки row*/
    for (let i = 0; i < 9; i++) { //вытаскивает подстроки в строках по 9 элементов
      puzzle.push(row.substr(i * 9, 9).split('')); // записываем в переменну подстроки
    }
    sudokuArray.push(puzzle); //собираем все вместе
  }
  return sudokuArray[0]; //вытягиваем первый судоку
}

// console.log(arraySudoku(fileContent));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sudoku(board, row, col, num) {
  for (let j = 0; j < 9; j++) {
    if (board[row][j]=== num) {
      return false; // Число уже присутствует в строке
    }
  }
  for (let i = 0; i < 9; i++) {
    if (board[col][i] === num) {
      return false; // Число уже присутствует в столбце
    }
  }
  return true; // Все проверки пройдены
}

function solveSudoku(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '-') {
        // Найти пустую ячейку
        for (let num of numbers) {
          if (sudoku(board, i, j, num)) {
            board[i][j] = num;
            if (solveSudoku(board)) {
              return true;
            }
            board[i][j] = '-';
          }
        }
        return false;
      }
    }
  }
  return true;
}
const fileContent = read(); // Читаем файл
const sudokuBoard = arraySudoku(fileContent); // Получаем первую головоломку
console.log('Исходное состояние доски:');
console.log(sudokuBoard);

// Решаем судоку
if (solveSudoku(sudokuBoard)) {
  console.log('Решение найдено:');
  console.log(sudokuBoard);
} else {
  console.log('Решение невозможно.');
}
// function solve() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции read.
//    * Возвращает игровое поле после попытки его решить.
//    */
// }

// function isSolved() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Возвращает булевое значение — решено это игровое поле или нет.
//    */
// }

// function prettyBoard() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Выводит в консоль/терминал судоку.
//    * Подумай, как симпатичнее его вывести.
//    */
// }
module.exports = {
  read,
  arraySudoku,
};
