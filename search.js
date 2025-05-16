const test = [1, '-', 8, '-', '-', 4, '-', 5, '-']; //тестовая строка проверки

// const test2 = [
//   [1, 58, 2, 0, 0, 0, 9, 0, 764],
//   [52, 0, 4, 0, 819, 19, 0, 73, 6762],
//   [83, 9, 0, 0, 0, 0, 61, 5, 0],
//   [0, 76, 0, 0, 3, 43, 0, 2, 5],
//   [16, 0, 3, 89, 0, 0, 0, 5, 3],
//   [0, 819, 285, 0, 6, 6, 0, 0, 0],
//   [4, 5, 0, 0, 74, 283, 34976, 0, 0],
//   [5, 0, 83, 0, 49, 15, 0, 87, 0],
//   [2, 9, 0, 0, 0, 6, 0, 0, 26],
// ];
function testNumSudoku(arr) {
  // получаем массив с цифрами и пробелами "-"
  const boxAll = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // библиотека заполненого ящицка box
  const boxUniqualNum = []; // очищеный ящик от пробелов "-"
  const boxMissingNum = []; // ящик с доступными числами

  if (arr.length === 9) {
    // проверка по длинне массива он должен всегда равняться 9
    for (let i = 0; i < arr.length; i++) {
      // перебираем массив
      if (typeof arr[i] === 'number') {
        // вычленяем из массива исключительно цифры
        boxUniqualNum.push(arr[i]); // добавляем в ящик цифры
      }
    }
    for (let key = 0; key < boxAll.length; key++) {
      // перебираем полную библиотеку
      if (!boxUniqualNum.includes(boxAll[key])) {
        // если в библиотеке отсуствует необходимое значение
        boxMissingNum.push(boxAll[key]); // то добавляем в ящик
      }
    }
    return boxMissingNum; // выдаем массив который содиржит в себе все возможные варианты цифр.
  }
}

console.log(testNumSudoku(test));

// ]; // тест для проверки работы создания вертикальной линии

function getColumn(arrays) {
  //получаем на вход массив с массивами горизонтальные данные
  const columnAll = []; //формируем массив с массивами вертикально расположенных
  for (let arr = 0; arr < 9; arr++) {
    // перебираем массив с массивами
    const column = []; // создаем ящик куда будем подавать значения и с каждого массива
    for (let num = 0; num < 9; num++) {
      //перебираем каждый горизонтальный массив
      column.push(arrays[num][arr]); //извлекаем из основного массива , горизонтальный массив со своим индексом arr, и находим значение под необходимым индексом
      //после чего добавляем его в массив вертикальный массив column
    }
    columnAll.push(column); // после чего собранный горизонтадбный массив загоняем в общий массив
  }

  return columnAll; //выводим массив для проверки на индивидуальные числа
}

console.log(getColumn(test2));

function getSudokuBox(grid) {
  // проверяем на наличие чисел в квадратах
  const boxes = [];

  // Квадрат 1
  const box0 = [];
  for (let arr = 0; arr <= 2; arr++) {
    for (let num = 0; num <= 2; num++) {
      if (num <= 2 && num >= 0 && arr >= 0 && arr <= 2) {
        box0.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box0);

  // Квадрат 2
  const box1 = [];
  for (let arr = 0; arr <= 2; arr++) {
    for (let num = 3; num <= 5; num++) {
      if (num - 3 <= 2 && num - 3 >= 0 && arr >= 0 && arr <= 2) {
        box1.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box1);

  // Квадрат 3
  const box2 = [];
  for (let arr = 0; arr <= 2; arr++) {
    for (let num = 6; num <= 8; num++) {
      if (num - 6 <= 2 && num - 6 >= 0 && arr >= 0 && arr <= 2) {
        box2.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box2);

  // Квадрат 4
  const box3 = [];
  for (let arr = 3; arr <= 5; arr++) {
    for (let num = 0; num <= 2; num++) {
      if (num <= 2 && num >= 0 && arr - 3 >= 0 && arr - 3 <= 2) {
        box3.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box3);

  // Квадрат 5
  const box4 = [];
  for (let arr = 3; arr <= 5; arr++) {
    for (let num = 3; num <= 5; num++) {
      if (num - 3 <= 2 && num - 3 >= 0 && arr - 3 >= 0 && arr - 3 <= 2) {
        box4.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box4);

  // Квадрат 6
  const box5 = [];
  for (let arr = 3; arr <= 5; arr++) {
    for (let num = 6; num <= 8; num++) {
      if (num - 6 <= 2 && num - 6 >= 0 && arr - 3 >= 0 && arr - 3 <= 2) {
        box5.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box5);

  // Квадрат 7
  const box6 = [];
  for (let arr = 6; arr <= 8; arr++) {
    for (let num = 0; num <= 2; num++) {
      if (num <= 2 && num >= 0 && arr - 6 >= 0 && arr - 6 <= 2) {
        box6.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box6);

  // Квадрат 8
  const box7 = [];
  for (let arr = 6; arr <= 8; arr++) {
    for (let num = 3; num <= 5; num++) {
      if (num - 3 <= 2 && num - 3 >= 0 && arr - 6 >= 0 && arr - 6 <= 2) {
        box7.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box7);

  // Квадрат 9
  const box8 = [];
  for (let arr = 6; arr <= 8; arr++) {
    for (let num = 6; num <= 8; num++) {
      if (num - 6 <= 2 && num - 6 >= 0 && arr - 6 >= 0 && arr - 6 <= 2) {
        box8.push(grid[arr][num]);
      }
    }
  }
  boxes.push(box8);

  return boxes;
}

console.log(getSudokuBox(test2));


