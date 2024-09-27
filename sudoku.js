
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

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

  // функция которая собирает недостающие цифры для линии
  const array = [1,null,5,8,null,2,null,null,null]

  function missedNumsInLine(arr) {
    
    const standart = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filtring = [];
    let uniqueArr = []
    
    for (let i = 0; i < array.length; i++) {
      if (standart.includes(array[i])) {
        filtring.push(array[i])
      }
    }
    
    for (let i = 0; i < standart.length; i++) {
      if (!filtring.includes(standart[i])) {
        uniqueArr.push(standart[i])
      }
    }

    return uniqueArr
  }
  console.log(missedNumsInLine(array));

}


function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */

  // продумать логику этой функции:

  // если в поле встретится null, должно вернуть false, в остальных случаях - true

  !array.some((arr) => arr.some((el) => el === null))

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
function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}


function fillNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    const missNum = new Set();
    const availableNumbers = [];

    for (let j = 0; j < arr.length; j++) {
      const value = arr[j][i];
      if (value !== null) {
        missNum.add(value);
      }
    }

    for (let num = 1; num <= arr.length; num++) {
      if (!missNum.has(num)) {
        availableNumbers.push(num);
      }
    }


    let index = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === null && index < availableNumbers.length) {
        arr[j][i] = availableNumbers[index++];
      }
    }
  }
  return arr;
}

console.log(fillNumbers([[3, null, 7],[5, 5, null],[1, null, 2]]));

  
function findIndex (array)  {

array.map((line) => line.map((value, index) => (value === null ? index : value))) // возвращает false, если null

}








