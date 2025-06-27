const fs = require('fs');

function read() {
  const word = fs.readFileSync(__dirname + '/puzzles.txt', 'utf-8');
  const newWord = word.match(/^[\s\S]{81}/).join('');
  const sudokuArr = [];

  for (let i = 0; i < 81; i += 9) {
    const line = [];
    line.push(newWord.substring(i, i + 9));
    sudokuArr.push(line);
  }

  const sudokuArrSplited = sudokuArr.map(el => el[0].split(''));
  return sudokuArrSplited
}




function solve(sudoku) {
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

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

module.exports = {read}
