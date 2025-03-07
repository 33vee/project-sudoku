const fs = require('fs');
const { EOL } = require('os');

function read(num) {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const allBoard = fs.readFileSync('./puzzles.txt', 'utf-8').split(EOL)[num];
  const newStr = allBoard.replace(/-/g, 0).split('');
  const toNum = newStr.map(Number);
  const res = [];
  for (let i = 0; i < toNum.length; i += 9) {
    res.push(toNum.slice(i, i + 9));
  }
  return res;
}
console.log(read(0));

function solve() {
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
