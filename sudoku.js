/* eslint-disable no-unreachable-loop */
const {EOL} = require("os")
  const fs = require('fs');
   const data = fs.readFileSync('./puzzles.txt', 'utf8')
   const newData = data.split(EOL)
function read() {
   return newData[0].split("")
}


function solve() {
  const sudokuBoard = [];

  let oldData = read(newData)
  for(let i = 0; i < oldData.length; i+= 9) {
    
    sudokuBoard.push(oldData.slice(i, i + 9))
    }


   return sudokuBoard[0]
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

console.log(solve())

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

module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard
}

