function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function main() {
  for (let i = 1; i < 2; i++) {
    let arrI = read(i);
    console.log(arrI);
    for (let i = 0; i < 81; i++) {
      if (isSolved(arrI)) {
        return prettyBoard(arrI);
      } else {
        return (arrI = solve(arrI));
      }
    }
  }
}

function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === 'number') {
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
  const arrResult = [];
  for (let i = 1; i < 9; i++) {
    if (!arrSmall.find((el) => el == i)) {
      arrResult.push[i];
    }
  }
  return arrResult;
}

function vert(arr,j) {
  return [1,2,3]
}
function squr (arr,i,j){ 
  return [4,5,6]
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
