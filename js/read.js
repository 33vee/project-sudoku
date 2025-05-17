export function read(number) {
  // Загружаем puzzles.txt асинхронно
  const request = new XMLHttpRequest();
  request.open('GET', '../puzzles.txt', false); // синхронно для простоты
  request.send(null);
  const data = request.responseText;

  const arrStrData = data.trim().split('\n');
  const sudokuStart = [];

  arrStrData.forEach((el) => {
    const board = [];
    let index = 0;

    for (let j = 0; j < 9; j++) {
      board.push([]);
      for (let i = 0; i < 9; i++) {
        board[j].push(el[index]);
        index++;
      }
    }

    sudokuStart.push(board);
  });

  return sudokuStart[number];
}
