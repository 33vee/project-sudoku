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

  // функция которая собирает недостающие цифры для линии
  const array = [1,null,5,8,null,2,null,null,null]

  function missedNumsInLine(arr) {
    
    const standart = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filtring = [];
    let uniqueArr = [];
    
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
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
