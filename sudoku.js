const fs = require('fs');
const { EOL } = require('os');
const { markAsUntransferable } = require('worker_threads');

function read(num) {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const allBoard = fs.readFileSync('./puzzles.txt', 'utf-8').split(EOL)[num].split('');
  const res = [];
  for (let i = 0; i < allBoard.length; i += 9) {
    res.push(allBoard.slice(i, i + 9));
  }
  return res;
}
console.log(read(14));

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
