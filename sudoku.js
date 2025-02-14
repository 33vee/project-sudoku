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


const array = read()

function findEmpty(arr) {
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          if (arr[i][j] === '-') return [i, j]
      }
  }
  return [-1, -1]
}

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

function prettyBoard(result) {
  const tableResult = result.join('').split(',').join('');
  let biutifulTable = '';
  const line = '+—+———+———+———+—+———+———+———+—+———+———+———+—+';
  for (let i = 0; i < tableResult.length; i++) {
    if (i % (tableResult.length / 9) === 0) {
      if (i % 9 === 0 && i > 0) {
        biutifulTable += ` |`;
      }
      if (i % (tableResult.length / 3) === 0) {
        biutifulTable += `\n${line}`;
      }
      biutifulTable += `\n${line}`;
      biutifulTable += `\n|`;
    }
    if (i % 3 === 0) {
      biutifulTable += ` |`;
    }
    biutifulTable += ` ${tableResult[i]} |`;
  }
  biutifulTable += `\n${line}\n${line}`;
  return biutifulTable;
}
