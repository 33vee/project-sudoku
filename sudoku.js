const massForTest = [
  [5,3,,,7,8,9,1,2],
  [6,,,1,9,5,,,],
  [,9,8,,,,,6,],
  [8,,,,6,,,,3],
  [4,,,8,,3,,,1],
  [7,,,,2,,,,6],
  [,6,,,,,2,8,],
  [,,,4,1,9,,,5],
  [,,,,8,,,7,9]        
]

function LineCheck(mass, cell){
  const line = mass[cell[0]];
  let possibleColumnVals = [1,2,3,4,5,6,7,8,9];
  possibleLineVals = possibleColumnVals.filter(el=> !line.includes(el));
  return possibleLineVals;
}
console.log(LineCheck(massForTest, cell = [0,2]))


function columnCheck(mass, cell){
  const column = [];
  let possibleColumnVals = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < mass.length; i++)
      column.push(mass[i][cell[1]]);
  possibleColumnVals = possibleColumnVals.filter(el=> !column.includes(el));
  return possibleColumnVals;
}

function finalPossibleVals(possibleLineVals, possibleColumnVals, possibleSquareVals) {
   let possibleFinalVals = [1,2,3,4,5,6,7,8,9];
   possibleFinalVals = possibleFinalVals.filter(el=> possibleLineVals.includes(el));
   possibleFinalVals = possibleFinalVals.filter(el=> possibleColumnVals.includes(el));
   possibleFinalVals = possibleFinalVals.filter(el=> possibleSquareVals.includes(el));
   return possibleFinalVals
}

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
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
