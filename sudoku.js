function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

const sudoArr = [
  '1-58-2---',
  '-9--764-5',
  '2--4--819',
  '-19--73-6',
  '762-83-9-',
  '----61-5-',
  '--76---3-',
  '43--2-5-1',
  '6--3-89--',
];

const board = sudoArr.map((row) => row.split(''));
console.log(board);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */
function solve() {
  for (let row = 0; row < read.length; row++) {
    for (let column = 0; column < read[row].length; column++) {
      if (read[column][column] === '-') {
        for (let num = 1; num < 9; num++) {
          resultSolve.push(read[column][column]);
          const numStr = num.toString();
          if (isSolved(row, column, numStr)) {
            resultSolve.push(numStr);
          }
        }
        if (!isSolved()) {
          
        }
      }
    }
  }

  return ;
}

console.log();

function isSolved(resultSolve) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  // if (solveArr)
  //   for (let column = 0; column < resultSolve.length; column++) {
  //     for (let row = 0; row < resultSolve[column].length; row++) {
  //       if (condition) {
  //       }
  //     }
  //   }
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
