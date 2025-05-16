const {read, solve, isSolved, prettyBoard} = require('./sudoku')
function run(num) {
  try {
    const board = read(num);
    console.log('Исходная судоку:');
    console.log(prettyBoard(board));

const solvedBoard = solve(board);

console.log('\nРешённая судоку:');
console.log(prettyBoard(solvedBoard));

console.log(
  '\nСтатус:',
  isSolved(solvedBoard) ? '✅ Решено!' : '❌ Не удалось решить.',
);
  } catch (error) {
    console.error(error.message);
  }
}

run(Math.floor(Math.random() * 15) + 1)