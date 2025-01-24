const fs = require('fs');

function read() {
    const puzzlesStr = fs.readFileSync('./puzzles.txt', 'utf-8')
    return puzzlesStr.trim().replaceAll('-', '0')
  }

