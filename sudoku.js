const { log } = require("console");
const fs = require("fs");

function read() {
  const puzzle = fs.readFileSync("./puzzles.txt", "utf8").split('\n');
  return puzzle;
}




function madeArr() {
  const sudoku = read();
  const firstSudoku = sudoku[0].trim().split('');
  
  // console.log(firstSudoku);
  let res = []
  
  for (let i = 0; i < firstSudoku.length; i+=9) {
    res.push(firstSudoku.slice(i, i + 9))
 
  }
  return res.map(elArr => elArr.map(el => el === '-' ? null : Number(el)));
  
}
const board = madeArr()



console.log(board);


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
