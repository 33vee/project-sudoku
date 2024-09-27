const arr = [
  [[], [], 7, 8, 6, 1, [], [], []],
  [[], [], 8, [], [], 3, [], [], []],
  [5, 6, [], [], 9, [], [], 1, []],
  [1, [], [], [], 7, [], [], 8, 5],
  [[], [], [], 3, 4, 5, [], [], []],
  [6, 3, [], [], 1, [], [], [], 7],
  [[], 5, [], [], 2, [], [], 9, 8],
  [[], [], [], 6, [], [], 5, [], []],
  [[], [], [], 5, 3, 7, 1, [], []],
];

const all = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkCol(arr) {
  // добавляем в пустую ячейку все возможные значения
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 9; j++) {
      if (Array.isArray(arr[i][j])) {
        arr[i][j] = [...all];
        arr[i][j] = new Set(arr[i][j]); //
      }
    }
  }
  // идем по колонке и убираем из каждого сета значения, которые встречаются в колонке
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][j] instanceof Set) {
        for (k = 0; k < 9; k++) {
          if (arr[i][j].has(arr[k][j])) {
          }
          arr[i][j].delete(arr[k][j]);
        }
      }
    }
  }
  return arr;
}

function checkRow(arr) {
  // добавляем в пустую ячейку все возможные значения
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 9; j++) {
      if (Array.isArray(arr[i][j])) {
        arr[i][j] = [...all];
        arr[i][j] = new Set(arr[i][j]); //
      }
    }
  }
  // идем по колонке и убираем из каждого сета значения, которые встречаются в колонке
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][j] instanceof Set) {
        for (k = 0; k < 9; k++) {
          if (arr[i][j].has(arr[k][j])) {
          }
          arr[i][j].delete(arr[k][j]);
        }
      }
    }
  }
  return arr;
}

console.log(checkCol(arr));

module.exports = checkCol;
