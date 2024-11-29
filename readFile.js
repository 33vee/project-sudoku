const fs =require ('fs')
const { EOL } =require('os')

function readFile() {
    const table = fs
        .readFileSync('./puzzles.txt', 'utf-8')
        .split(EOL)
    console.log(table);
    const line = table[0]
    console.log(line);
    const result = []   
    for (let i = 0; i < 9; i++) {
        const row = []
        for (let j = 0; j < 9; j++) {
            row.push(line[i*9 + j])
            
        }
        result.push(row)
    } 
    return result

  }
  console.log(readFile()); 
  module.exports =  readFile