const fs = require('fs');
const { vert } = require('./funcVert.js');
const { squr } = require('./square.js');

function read(num) {
  try {
    const file = fs.readFileSync('puzzles.txt', 'utf-8');
    const arrs = file
      .trim()
      .split('\n')
      .map((el) => el.split(','));
    const [n] = arrs[num - 1].map((el) => el.split(''));
    const array = [];
    for (let i = 0; i < 81; i += 9) {
      array.push(n.slice(i, i + 9));
    }
    return array;
  } catch (error) {
    console.error(`${error}\nВведите число от 1 до 15`);
  }
}

function main(j) {
  if (j) {
    mainI(j);
  } else {
    for (let i = 1; i < 16; i++) {
      mainI(i);
    }
  }
}

function mainI(i) {
  let arrI = read(i);
  console.log(`         Судоку номер ${i}: \n`);
  for (let i = 0; i < 81; i++) {
    if (isSolved(arrI)) {
      return prettyBoard(arrI);
    }
    arrI = solve(arrI);
  }
  console.log('          Не могу решить \n');
}

function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Number(arr[i][j]);
      if (isNaN(arr[i][j])) {
        const numArr = sort(arr, i, j);
        if (numArr.length === 1) {
          arr[i][j] = numArr[0];
        }
      }
    }
  }
  return arr;
}

function sort(arr, i, j) {
  const arrSmall = [...arr[i], ...vert(arr, j), ...squr(arr, i, j)];
  let arrResult = [];
  for (let i = 1; i < 10; i++) {
    if (!arrSmall.find((el) => el == i)) {
      arrResult.push(i);
    }
  }
  return arrResult;
}

function isSolved(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (isNaN(Number(arr[i][j]))) {
        count += 1;
      }
    }
  }
  if (!count) {
    return true;
  } else {
    return false;
  }
}

function prettyBoard(arr) {
  for (let i = 0; i < arr.length; i++) {
    let line = '';

    for (let j = 0; j < arr[i].length; j++) {
      line += ' ' + arr[i][j] + ' ';
      if (j === 2 || j === 5) {
        line += ' ┃ ';
      }
    }
    console.log(line);
    if (i === 2 || i === 5) {
      console.log(' ━━ ━━ ━━ ━━ ━━ ━━ ━━ ━━ ━━ ━━ ━━');
    }
  }
  console.log('\n');
}

main();
