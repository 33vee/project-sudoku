const fs = require('fs');
const path = require('path');
const Table = require('cli-table');

// ~ №1 Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
function read(number) {
  // const data = fs.readFileSync('../puzzles.txt', 'utf-8'); // можно в одну строчку
  const filePath = path.join(__dirname, '../puzzles.txt');  
  const data = fs.readFileSync(filePath, 'utf-8');
  const arrStrData = data.trim().split('\n');

  // В этом массиве будут лежать все варианты судоку
  const sudokuStart = [];

  arrStrData.forEach((el) => {
    // Создаю доску для каждой строки из файла txt
    const board = [];
    let index = 0;

    for (let j = 0; j < 9; j++) {
      board.push([]);

      for (let i = 0; i < 9; i++) {
        board[j].push(el[index]);
        index++;
      }
    }

    // Пушу все полученные доски в sudokuStart
    sudokuStart.push(board);
  });

  // Возвращают вариант судоку под номером number
  return sudokuStart[number];
}

// ~ №2 Принимает игровое поле в том формате, в котором его вернули из функции read.
// * Возвращает игровое поле после попытки его решить.
function solve(board) {
  // Проходим по каждой строке (i) и столбцу (j)
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // Если клетка пустая (обозначена '-'), пытаемся вставить туда число
      if (board[i][j] === '-') {
        // Пробуем поставить цифры от 1 до 9
        for (let num = 1; num <= 9; num++) {
          const value = String(num); // Преобразуем число в строку, т.к. в board хранятся строки

          // Получаем текущую строку (i)
          const row = board[i];

          // Получаем текущий столбец (j)
          const column = board.map((row) => row[j]);

          // Находим координаты начала квадрата 3x3, в который входит клетка [i][j]
          const boxStartRow = Math.floor(i / 3) * 3;
          const boxStartCol = Math.floor(j / 3) * 3;
          const box = [];
          for (let r = boxStartRow; r < boxStartRow + 3; r++) {
            for (let c = boxStartCol; c < boxStartCol + 3; c++) {
              box.push(board[r][c]);
            }
          }

          // Если цифры нет ни в строке, ни в столбце, ни в квадрате — ставим её
          if (!row.includes(value) && !column.includes(value) && !box.includes(value)) {
            // Вставляем число в пустую клетку
            board[i][j] = value;

            // solve(board);
            if (solve(board)) {
              return board; // Успешно нашли решение
            }

            // Если не получилось — откатываем (возвращаем '-' в клетку, если зашли в тупик)
            board[i][j] = '-';
          }
        }

        // Ни одно число не подошло — возвращаем false (тупик)
        return false;
      }
    }
  }

  // Если нет пустых клеток — решение найдено
  return board;
}

// ~ №3 Принимает игровое поле в том формате, в котором его вернули из функции solve.
// * Возвращает булевое значение — решено это игровое поле или нет.
function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];

      // Если есть хотя бы одна пустая клетка — судоку не решено
      if (cell === '-') {
        return false;
      }
    }
  }

  return true;
}

// ~ №4 Принимает игровое поле в том формате, в котором его вернули из функции solve.
// * Выводит в консоль/терминал судоку.
// * Подумай, как симпатичнее его вывести.
function prettyBoard(board) {
  const table = new Table();

  for (let i = 0; i < 9; i++) {
    // Если встречается '-', то заменяем на пустоту
    const row = board[i].map((cell) => (cell === '-' ? ' ' : cell));

    table.push(board[i]);
  }

  console.log(table.toString());
}

module.exports = { read, solve, isSolved, prettyBoard };
