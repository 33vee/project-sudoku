function prettyBoard(board) {
  if (typeof board !== 'object') {
    console.log('Неправильный формат судоку');
  }
  //  вывод всех строк
  for (let row = 0; row < 9; row++) {
    const rowString = board.flat().slice(row * 9, row * 9 + 9);
    // console.log(rowString)
    const beautyBoard = rowString.join('').split('').join(' ');
    if (row % 3 === 0 && row !== 0) {
      console.log(`-------+--------+-------`);
    }

    const part1 = beautyBoard.slice(0, 6);
    const part2 = beautyBoard.slice(6, 12);
    const part3 = beautyBoard.slice(12);

    console.log(`${part1} | ${part2} | ${part3}`);
  }
  console.log(`------------------------`);
}

prettyBoard();
