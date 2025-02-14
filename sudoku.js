
const fs = require('fs')
const {EOL} = require('os')

function read(variant) {
  const board = fs.readFileSync('./puzzles.txt', 'utf8')
  const result = board.split(EOL)
  const puzzles = []
  for (let item of result) {
    const newArr = []
    for (let i = 0; i < 9; i++) {
      newArr.push(item.slice(i * 9, (i + 1) * 9).split(''))
    }
    puzzles.push(newArr)
    
  }
  return puzzles[variant+1]
    
}
console.log(read(2))

function solve() {
  // 
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(array, line, column, value) {
    for (let i = 0; i < array[line].length; i++) {
        if (array[line][i] === value) {
            return false;
        }
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i][column] === value) {
            return false;
        }
    }
    
    const lineSquere = Math.floor(line / 3) * 3
    const columnSquere = Math.floor(column / 3) * 3
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[lineSquere + i][columnSquere + j] === value) {
                return false
            }
        }
    }

    return true

}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
