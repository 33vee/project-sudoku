// const { log } = require("console");
// const { console } = require("inspector");

// * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
function read() {
  const fs = require("fs");
  const sudoku = fs.readFileSync("./puzzles.txt", "utf-8");
  const newStr = sudoku.split("\n");
  const str = newStr[0];

  const arr = str.split("");
  const res = [];
  for (let i = 0; i < arr.length; i += 9) {
    const chunk = arr.slice(i, i + 9);
    res.push(chunk);
  }

  let board = res.map((elem) =>
    elem.map((num) => {
      if (num === '-') return null;
      return num;
    })
  );
  return board
}
console.log(read());
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
