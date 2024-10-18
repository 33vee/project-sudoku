const fs = require('fs');

function read() {
  const fileContent = fs.readFileSync('puzzles.txt', 'utf8');
  const content = fileContent.split('\n')[0];
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(content.slice(i * 9, i * 9 + 9));
  }
  return arr;
}

const read1 = read();

function solve() {
  const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < read1.length; i++) {
    const newReadArray = read1[i].split('');
    const firstNum = newReadArray.filter((char) => char !== '-');
    const secondNum = array.filter((num) => !firstNum.includes(num));

    let index = 0;
    for (let j = 0; j < newReadArray.length; j++) {
      if (newReadArray[j] === '-') {
        if (index < secondNum.length) {
          newReadArray[j] = secondNum[index++];
        }
      }
    }
    read1[i] = newReadArray.join('');
  }

  // console.log(read1);
  // read1.forEach((line) => console.log(line));
  return read1;
}
solve();

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  const str = solve();
  const result = [];
  let newArray = [];
  let count = 2;
  for (let i = 0; i < str.length; i++) {
    const strIndex = str[i];
    if (str[i] === count) {
      result.push(str.slice(i, count));
      result.push('             ');
      result.push(str.slice(count + 1));
      count += 3;
    }
    newArray = result;

    let newStr = '';
    for (let j = 0; j < strIndex.length; j++) {
      newStr += strIndex[j];
      if ((j + 1) % 3 === 0 && j !== strIndex.length - 1) {
        newStr += '  | ';
      }
      if ((j + 1) % 1 === 0 && j !== strIndex.length - 1) {
        newStr += '  ';
      }
    }
    if (i % 3 === 0 && i !== str.length - 1) {
      newArray.push('---------------------------------');
    }
    newArray.push(newStr);
  }
  console.log(newArray);
  // newArray.forEach((line) => console.log(line));
  return newArray;
}
prettyBoard();
