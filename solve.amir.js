const arr1 = [
  [5, 3, '-', '-', 7, '-', '-', '-', '-'],
  [6, '-', '-', 1, 9, 5, '-', '-', '-'],
  ['-', 9, 8, '-', '-', '-', '-', 6, '-'],
  [8, '-', '-', '-', 6, '-', '-', '-', 3],
  [4, '-', '-', 8, '-', 3, '-', '-', 1],
  [7, '-', '-', '-', 2, '-', '-', '-', 6],
  ['-', 6, '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', 4, 1, 9, '-', '-', 5],
  ['-', '-', '-', '-', '-', '-', '-', 7, 9],
];

const arr2 = [5, 3, '-', '-', 7, '-', '-', '-', '-'];

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function line(arr) {
  const row = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '-') {
      row.push(arr[i]);
    }
  }
  return row;
}

//console.log(line(arr2));

function colmn(arr, index) {
  const row = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][index] !== '-') {
      row.push(arr[i][index]);
    }
  }
  return row;
}

//console.log(colmn(arr1, 2));

function box(arr, boxLine, boxColm) {
  const row = [];
  const startLine = boxLine * 3;
  const startColm = boxColm * 3;
  for (let i = startLine; i < startLine + 3; i++) {
    for (let j = startColm; j < startColm + 3; j++) {
      if (arr[i][j] !== '-') {
        row.push(arr[i][j]);
      }
    }
  }
  return row;
}

//console.log(box(arr1, 1, 1));

function unic() {
  const unicNumbers =[]
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const colmn1 = colmn(arr1, 0);
  const line1 = line(arr2);
  const box1 = box(arr1, 0, 0);
  //console.log(colmn1, line1, box1, )
  const testArray = colmn1.concat(line1, box1)
  for(let i = 0; i < array.length; i++) {
    const includesNum = testArray.includes(array[i])
    if(includesNum === false) {
      unicNumbers.push(array[i])
    }
  }
  return unicNumbers
}

//console.log(unic())