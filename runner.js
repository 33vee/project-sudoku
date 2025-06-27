
const { read } = require('./sudoku.js');

const sudoku = read();

console.log(checkIfExists(squares, 3))

 const squareCheck = (arr) => {
   
  const sq1 = [];
  const sq2 = [];
  const sq3 = [];
  const sq4 = [];
  const sq5 = [];
  const sq6 = [];
  const sq7 = [];
  const sq8 = [];
  const sq9 = [];
   
  for (let i = 0; i < 3; i++) {
    // const part = arr[i].slice(0,3)
    sq1.push(...arr[i].slice(0, 3))
    sq2.push(...arr[i].slice(3, 6));
    sq3.push(...arr[i].slice(6, 9));
    // sq1.push(...part)
    // return sq1
  }
 for (let i = 3; i < 6; i++) {
    sq4.push(...arr[i].slice(0, 3));
    sq5.push(...arr[i].slice(3, 6));
    sq6.push(...arr[i].slice(6, 9));
  }
  for (let i = 6; i < 9; i++) {
    sq7.push(...arr[i].slice(0, 3));
    sq8.push(...arr[i].slice(3, 6));
    sq9.push(...arr[i].slice(6, 9));
    
  }
  const result = []
  result.push(sq1,sq2,sq3,sq4,sq5,sq6,sq6,sq7,sq8,sq9)
  return result

//   return { sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9 };
};

const squares = squareCheck(sudoku)

function checkIfExists(arr, num){
    for (let j = 0; j < arr.length; j++) {
        if(Array.isArray(arr[j])){
            if(checkIfExists(arr[j], num)){
                return true
            }
        } else if(arr[j].includes(num)){
                return true
        }
    }
}


