const sudoky = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
];

//  arr.toString().split('').indexOf('-');

const arrAbsentNumber = [34679];
// функция принимает массив, индекс массива, индех вложенного массива
function getRow(arr, index1, index2) {
  const row = [];
  const blockRowStart = Math.floor(index1 / 3) * 3;
  const blockColStart = Math.floor(index2 / 3) * 3;

  // Перебираем 3 строки и 3 столбца блока
  for (let i = blockRowStart; i < blockRowStart + 3; i++) {
    for (let j = blockColStart; j < blockColStart + 3; j++) {
      row.push(arr[i][j]);
    }
  }

  return row;
}
console.log(getRow(sudoky, 7, 0));
