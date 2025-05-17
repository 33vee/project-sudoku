import { read } from './read.js';
import { solve } from './solve.js';
import { isSolved } from './isSolved.js';
import { prettyBoard } from './prettyBoard.js';

function solveSudoku() {
  const indexInput = document.getElementById('puzzle-number');
  const index = parseInt(indexInput.value);

  if (isNaN(index) || index < 0 || index > 14) {
    alert('Введите число от 0 до 14');
    return;
  }

  const board = read(index);
  const original = board.map(row => [...row]);

  // ВКЛЮЧАЕМ блок с исходным полем
  const output = document.getElementById('output');
  output.style.display = 'block';
  document.getElementById('initial-board').innerHTML = prettyBoard(original);

  solve(board);
  document.getElementById('solved-board').innerHTML = prettyBoard(board);

  const resultText = isSolved(board)
    ? 'Судоку решено!'
    : 'Судоку не решено';

  document.getElementById('result-text').textContent = resultText;
  document.getElementById('solution-block').style.display = 'block';
}
window.solveSudoku = solveSudoku;
