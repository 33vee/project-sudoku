const { log, table } = require('console');
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

function solve() {
  //
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

const result = read(-1);

function prettyBoard(result) {
  const tableResult = result.join('').split(',').join('');
  let newStr = '';
  for (let i = 0; i < tableResult.length; i++) {
    if (i % 9 === 0) {
      newStr += `\n ||`;
    }
    newStr += `${tableResult[i]}|`;
  }
  return newStr;
}

console.log(prettyBoard(result));

