export function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '-') {
        for (let num = 1; num <= 9; num++) {
          const value = String(num);
          const row = board[i];
          const column = board.map((r) => r[j]);

          const boxStartRow = Math.floor(i / 3) * 3;
          const boxStartCol = Math.floor(j / 3) * 3;
          const box = [];

          for (let r = boxStartRow; r < boxStartRow + 3; r++) {
            for (let c = boxStartCol; c < boxStartCol + 3; c++) {
              box.push(board[r][c]);
            }
          }

          if (!row.includes(value) && !column.includes(value) && !box.includes(value)) {
            board[i][j] = value;

            if (solve(board)) return board;

            board[i][j] = '-';
          }
        }

        return false;
      }
    }
  }

  return board;
}
