// const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');
// const content = fs.readFileSync("./puzzles.txt", "utf-8"); 
// console.log(content);


function read() {
 
    const content = fs
    .readFileSync("./puzzles.txt", "utf-8")
    .split(EOL)
    const firstSudoku = content[0];
    let res = [];
    for(i = 0; i < 9; i++) {
        let row = [];
        for (let j = 0; j < 9; j++) {
            row.push(firstSudoku[i*9 + j]);
        }
        res.push(row)
    }

    

    return res
}      

    
    

    
  console.log(read());
  