const fs = require('fs');
const { EOL } = require('os');

function read(variant) {
  const board = fs.readFileSync('./puzzles.txt', 'utf8');
  const result = board.split(EOL);
  const puzzles = [];
  for (const item of result) {
    const newArr = [];
    for (let i = 0; i < 9; i++) {
      newArr.push(item.slice(i * 9, (i + 1) * 9).split(''));
    }
    puzzles.push(newArr);
  }
  return puzzles[variant + 1];
}
console.log(read(2));


//
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

function solve (pole = read(1), startLine = 0) {
  


  for (let line = startLine; line < pole.length; line++) {            // проходимся по массивам строк внутри поля 
    if (pole[line].includes('-')) {                                   // проверяем есть ли вообще в строке пропуски
      for (let el = 0; el < 9; el++) {                                // если есть, то проваливаемся в строку и идем по элементам
        if (pole[line][el] === '-') {                                 // идем по элементам и проверяем, если элемент === '-'
          for (let number = 1; number <= 9; number++) {               // начинаем перебор цифр вместо '-'
            pole[line][el] = number;    
            // if (pole[line].include)     

            if (isSolved((pole, line, el, number))) {                 // проверяем, проходят ли условия
              solve(pole, 0)                                          // если да, то результат функции (поля) сохраняем и запускаем заново

            } else {
              pole[line][el] = '-';                                   //  если число не подходит, то возвращаем пропуск обратно

            }
          }
        }
      }
    }
  
    
  }
  




}

function findEmpty(arr) {
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          if (arr[i][j] === '-') return [i, j]
      }
  }
  return [-1, -1]
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
