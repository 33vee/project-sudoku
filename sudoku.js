const { log } = require("console");
const fs = require("fs");

const massForTest = [
  [5,3,,,7,,,,],
  [6,,,1,9,5,,,],
  [,9,8,,,,,6,],
  [8,,,,6,,,,3],
  [4,,,8,,3,,,1],
  [7,,,,2,,,,6],
  [,6,,,,,2,8,],
  [,,,4,1,9,,,5],
  [,,,,8,,,7,9]        
]

function read(num) {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const sudokuField = fs.readFileSync("./puzzles.txt", "utf8").split("\r\n");
  
  const fullBoards = [];
  
  for (let i = 0; i < sudokuField.length - 1; i++) {
    fullBoards.push(
      sudokuField[i]
        .split("")
        .reduce(
          (prev, cur, i, a) =>
            !(i % 9) ? prev.concat([a.slice(i, i + 9)]) : prev,
          []));
  }
  // fs.writeFileSync(`stats.txt`, board.join("\r"));
  const board = fullBoards[num];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "-") {
        board[i][j] = undefined;
      } else {
        board[i][j] = Number(board[i][j]);
      }
    }
  }

  return board;
}

function firstBlank(mass) {
  if (mass === undefined) {
    return null;
  }
  for (let i = 0; i < mass.length; i++) {
    for (let j = 0; j < mass.length; j++) {
      if (mass[i][j] === undefined) {
        const coordinates = [i, j];
        return coordinates;
      }
    }
  }
  return false;
}

function lineCheck(mass, cell){
  const line = mass[cell[0]];
  let possibleLineVals = [1,2,3,4,5,6,7,8,9];
  possibleLineVals = possibleLineVals.filter(el=> !line.includes(el));
  return possibleLineVals;
}

function columnCheck(mass, cell){
  const column = [];
  let possibleColumnVals = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < mass.length; i++)
      column.push(mass[i][cell[1]]);
  possibleColumnVals = possibleColumnVals.filter(el=> !column.includes(el));
  return possibleColumnVals;
}

function squareCheck(mass, cell) {
  const result = [];
  let possibleSquareVals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // проверка cell на позицию квадрата, если
  if (cell[0] >= 0 && cell[0] <= 2) {
    if (cell[1] >= 0 && cell[1] <= 2) {
      for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    } else if (cell[1] >= 3 && cell[1] <= 5) {
      for (let i = 0; i <= 2; i++) {
        for (let j = 3; j <= 5; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    } else {
      for (let i = 0; i <= 2; i++) {
        for (let j = 6; j <= 8; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    }
  } else if (cell[0] >= 3 && cell[0] <= 5) {
    if (cell[1] >= 0 && cell[1] <= 2) {
      for (let i = 3; i <= 5; i++) {
        for (let j = 0; j <= 2; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    } else if (cell[1] >= 3 && cell[1] <= 5) {
      for (let i = 3; i <= 5; i++) {
        for (let j = 3; j <= 5; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    } else {
      for (let i = 3; i <= 5; i++) {
        for (let j = 6; j <= 8; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    }
  } else {
    if (cell[1] >= 0 && cell[1] <= 2) {
      for (let i = 6; i <= 8; i++) {
        for (let j = 0; j <= 2; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    } else if (cell[1] >= 3 && cell[1] <= 5) {
      for (let i = 6; i <= 8; i++) {
        for (let j = 3; j <= 5; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    } else {
      for (let i = 6; i <= 8; i++) {
        for (let j = 6; j <= 8; j++) {
          if (mass[i][j] !== undefined) {
            result.push(mass[i][j]);
          }
        }
      }
    }
  }
  possibleSquareVals = possibleSquareVals.filter((el) => !result.includes(el));
  return possibleSquareVals;
  // пол
}

function finalPossibleVals(mass) {
  const cell = firstBlank(mass);
  const linesVal = lineCheck(mass, cell);
  const columnVal = columnCheck(mass, cell);  
  const squareVal = squareCheck(mass, cell);
  let possibleFinalVals = [1,2,3,4,5,6,7,8,9];

  possibleFinalVals = possibleFinalVals.filter(el=> linesVal.includes(el));
  possibleFinalVals = possibleFinalVals.filter(el=> columnVal.includes(el));
  possibleFinalVals = possibleFinalVals.filter(el=> squareVal.includes(el));

  return possibleFinalVals
}

function listNodes(arr){
  const scenarios = [];
  const blankCell = firstBlank(arr);
  const valuesForBlankCell = finalPossibleVals(arr)
  for (let i = 0; i < valuesForBlankCell.length; i++) {
      const copy = structuredClone(arr);
      copy[blankCell[0]][blankCell[1]] = valuesForBlankCell[i];
      scenarios.push(copy);
  }
  return scenarios;
}


function solve(current) {
  if(current === undefined) {
        return null}
  else if(firstBlank(current).lenght === 0){
          return null;
        }
  else if(firstBlank(current) === false ){
          return current;
        }

  else {return solve(listNodes(current)[0]) ||
               solve(listNodes(current)[1]) ||
               solve(listNodes(current)[2]) ||
               solve(listNodes(current)[3]) ||
               solve(listNodes(current)[4]) ||
               solve(listNodes(current)[5]) ||
               solve(listNodes(current)[6]) ||     
               solve(listNodes(current)[7]) ||         
               solve(listNodes(current)[8]) ||
               solve(listNodes(current)[9])                 
              }
   /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(mass) {
    /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
  for (let i = 0; i < mass.length; i++) {
    console.log(mass[i].join(" "));
  }
}

module.exports = {
  read,
  firstBlank,
  lineCheck,
  columnCheck,
  squareCheck,
  finalPossibleVals,
  solve,
  listNodes,
  prettyBoard
}