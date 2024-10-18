// Используйте для решения судоку необходимые функции из файла sudoku.js
function solve() {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const read1 = read();
    for (let i = 0; i < read1.length; i++) {
      for (let j = 0; j < read1[i].length; j++) {
        if (read1[i][j] === '-') {
          for (let k = 0; k < numbers.length; k++) {
            if (!read1[i].includes(numbers[k])) {
              const newStr = read1[i].replace(read1[i][j], numbers[k]);
              read1.splice(i, 1, newStr);
              break;
            }
          }
        }
      }
    }
    return content;
  }