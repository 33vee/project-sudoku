const fs = require('fs');

function readTxt(){
    const txt = fs.readFileSync('./puzzles.txt','utf-8');
    // console.log(txt);
    const regex = /[\d-]{81}(?=\s|$)/g;
    const matches = txt.match(regex);
    // console.log(matches.map((el)=>el.split(','))[0].map((el)=>el.split('')))
    console.log(matches.map((el)=>el.split(','))[0].map((el)=>el.split(''))) 
}
readTxt()

