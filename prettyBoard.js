// const sudoku = [[1,2,3,4,5,6,7,8,9],
//                 [1,2,3,4,5,6,7,8,9],
//                 [1,2,3,4,5,6,7,8,9],
//                 [1,2,3,4,5,6,7,8,9],
//                 [1,2,3,4,5,6,7,8,9],
//                 [1,2,3,4,5,6,7,8,9],
//                 [1,2,3,4,5,6,7,8,9],
//                 [1,2,3,4,5,6,7,8,9],
//                 [1,2,3,4,5,6,7,8,9]]

function prettyBoard(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const index = [];
    for (let j = 0; j < arr[i].length; j++) {
      index.push(arr[i][j]);
      if ((j + 1) % 3 === 0 && j !== arr[i].length - 1) {
        index.push('|');
      }
    }
    str += `${index.join(' ')} \r\n`;
    if ((i + 1) % 3 === 0 && i !== arr.length - 1) {
      str += '——————+———————+—————— \r\n';
    }
  }
  return str;
}

// console.log(prettyBoard(sudoku));
