const { EOL } = require('os');

const sudokuField = [
  [1, 2, 3, '-', 5, '-', 7, '-', 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

// const spaceTable = sudokuField.splice(3, 0, '--------------------')
function consolSudoku(sudokuTXT){
    const arrNumb = sudokuTXT.map((arr) =>
      arr.map((num) => (num === '-' ? '   ' : num + '  ')),
    );
    const table = arrNumb.map((el) =>
      el.map((numb, i) => ((i + 1) % 3 === 0 ? numb + '|' : numb)).join(' '),
    );

    table.splice(3, 0, '--------------------------------------');
    table.splice(7, 0, '--------------------------------------');


    return console.log(table.join(EOL));
}



console.log(consolSudoku(sudokuField));
