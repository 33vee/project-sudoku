function read() {
  const fs = require('fs');
  return JSON.stringify(fs.readFileSync('./puzzles.txt', 'utf-8'))
}
console.log(read())

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(solve) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */


for(let i = 0; i < array.length;i++){
  for(let j = 0; array[i].length;j++){

  }
  if(array[i][j] === array[i][j].Set()){
    return true
  }else{
    return false
  }
}
for(let i = 0; i < array.length;i++){
  for(let k = 0; k < array[0].length;k++){
    for(let w = 0; w <)
  }
}
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard
}

