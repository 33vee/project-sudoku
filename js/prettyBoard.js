export function prettyBoard(board) {
  let html = '<table class="sudoku-table">';

  for (let i = 0; i < 9; i++) {
    html += '<tr>';

    for (let j = 0; j < 9; j++) {
      const cell = board[i][j] === '-' ? '' : board[i][j];
      html += `<td>${cell}</td>`;
    }

    html += '</tr>';
  }

  html += '</table>';
  return html;
}
