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



