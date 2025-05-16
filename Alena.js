function prettyBoard(board) {
  if (typeof board !== 'object' || board.length !== 81) {
    // если не является строкой или длина переданного аргумента не равна 81 (9 по 9)
    console.log('Неправильный формат доски'); //  Выводим ошибку в консоль
    // Прекращаем выполнение функции
  }
  // const result = board.join('').split(',').join('');
  // console.log(result);

  //  вывод всех строк
  for (let row = 0; row < 9; row++) {
    // получаем текущую строку
    const rowString = board.flat().slice(row * 9, row * 9 + 9); // board.slice[start, end] start = row * 9  , end = row * 9 + 9
    console.log(rowString)
    // заменяем '-' и добавляем пробелы
    const formatRow = rowString.join('').replace(/-/gmi, '·').split('') // разбиваю строку на массив символов
      .join(' '); // соединяю массив в строку с проьбелами

    console.log(formatRow); //  выводим каждую строку
  }
}
prettyBoard();
