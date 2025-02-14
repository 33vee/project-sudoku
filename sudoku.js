function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

const array = read()

function solve(array) {
    
  let empty = findEmpty(array);
  let row = empty[0];
  let col = empty[1];

  if (row === -1) {
      return array
  }

  for (let num = 1; num <= 9; num++) {
      if (isSolved(array, row, col, num.toString())) {
          // console.log(isSolved(array, row, col, num.toString()))
          array[row][col] = num.toString()
          
          if (array[row].includes(num.toString())) {
              isSolved(array, row, col, (num + 1).toString())
          }
          solve(array)
      }
      
  }

  if (findEmpty(array)[0] !== -1) {

      array[row][col] = '-'

  }
  return array
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
