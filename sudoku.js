const fs = require('fs');

function read(num) {
  try {
    const file = fs.readFileSync('puzzles.txt', 'utf-8');
    const arrs = file
      .trim()
      .split('\n')
      .map((el) => el.split(','));
    const [n] = arrs[num - 1].map((el) => el.split(''));
    const array = [];
    for (let i = 0; i < 81; i += 9) {
      array.push(n.slice(i, i + 9));
    }
    return array;
  } catch (error) {
    console.error(`${error}\nВведите число от 1 до 15`);
  }
}


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
