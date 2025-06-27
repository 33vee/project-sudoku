const { read } = require('./sudoku.js');

const sudoku = read();

// Используйте для решения судоку необходимые функции из файла sudoku.js


const squares = squareCheck(sudoku)


function checkIfExists(arr, num){
    for (let j = 0; j < arr.length; j++) {
        if(Array.isArray(arr[j])){
            if(checkIfExists(arr[j], num)){
                return true
            }
        } else if(arr[j].includes(num)){
                return true
        }
    }
}

console.log(checkIfExists(squares, 3))
