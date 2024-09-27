function read() {
  const text = fs.readFileSync('puzzles.txt', 'utf-8');
  const arr = [...text];
  const newArr = arr.filter(el => el !== '\n' && el !== '\r');
  const newArr2 = newArr.map((el) => {
    if(el === '-'){
      return el = null
    }
    return el
  })

const newArr3=newArr2.slice(0,81)
const one = newArr3.slice(0, 9);
const two = newArr3.slice(9, 18);
const three = newArr3.slice(18, 27);
const four = newArr3.slice(27, 36);
const five = newArr3.slice(36, 45);
const six = newArr3.slice(45, 54);
const seven = newArr3.slice(54, 63);
const eath = newArr3.slice(63, 72);
const nine = newArr3.slice(72, 81);

const arr1 = []
arr1.push(one,two, three, four, five, six, seven, eath,nine )
  console.log(newArr3, arr1)
}
read()

  function solve(arr1) {

    let line;
    for (let k = 0; k < arr.length; k++) {
      line = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      for (let i = 0; i < arr[k].length; i++) {
        for (let j = 0; j < line.length; j++) {
          if (arr[k][i] === line[j]) {
            line.splice(j, 1)
          }
        }
      }
      if (line[0] !== undefined) {
        break
      }
    }
  
    let findArr = 0
    let findNull = 0
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === '-') {
          findNull = j
          findArr = i
  
          let column = [1, 2, 3, 4, 5, 6, 7, 8, 9]
          arr.map((el) => {
            for (let thisColumn = 0; thisColumn < column.length; thisColumn++) {
              if (el[findNull] === column[thisColumn]) {
                column.splice(thisColumn, 1)
              }
            }
            return column
          })
          let square = [1, 2, 3, 4, 5, 6, 7, 8, 9]
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              for (let k = 0; k < square.length; k++) {
                if (arr[i][j] === square[k]) {
                  square.splice(k, 1)
                }
              }
            }
          }
          console.log(square);
          let same = line.filter(el => (column.indexOf(el) > -1) && (square.indexOf(el) > -1))
          console.log(same);
  
          if (same.length === 1) {
            arr[findArr].splice([findNull], 1, same)
          }
        }
      }
    }
  
    let column = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    arr.map((el) => {
      for (let thisColumn = 0; thisColumn < column.length; thisColumn++) {
        if (el[findNull] === column[thisColumn]) {
          column.splice(thisColumn, 1)
        }
      }
      return column
    }
    )
  
    if (same.length === 1) {
      arr[findArr].splice([findNull], 1, same)
    }
  }
  
  console.log(solve(arr1));

function isSolved() {
  if(arr1.includes('-')){  
    return false; 
} 

function checkline(arr){ 
    let resultsumofline = 0;  
     for (let i=0; i < arr.length; i++){ 
 resultsumofline += arr[i]; 
    } 
    if (resultsumofline!=45){ 
     return false; 
    } 
    return true; 
 } 
 
 function checkcolumn(arr1){ 
let resultsumofcolumn = 0; 
for (let i=0; i < arr.length; i++){ 
    for (let j=0; j<arr.length; j++){ 
        resultsumofcolumn += arr[i][j] 
    } 
} 
if (resultsumofcolumn!=45){ 
    return false; 
   } 
   return true; 
 } 

 function checksquare(arr) { 
    let resultsumofsquare = 0; 
       for (let i=0; i < 3 ; i++) { 
           for (let j = 0; j < 3; j++){ 
              console.log(arr[j][i]) 
           } 
       }  
       if (resultsumofsquare != 45 ) { 
           return false; 
         } 
   return true         
     } 

checkline(arr); 
checkcolumn(arr); 
checksquare(arr) 

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

function prettyBoard() {
  const sudoku = 
  const sudokuEl = sudoku.map(el => el.join(' '));
  const newSudoke = sudokuEl.join('\n')

   console.log(newSudoke);
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Выводит в консоль/терминал судоку.
 * Подумай, как симпатичнее его вывести.
 */
}