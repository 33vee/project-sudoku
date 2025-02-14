function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(result) {
  const tableResult = result.join('').split(',').join('');
  let biutifulTable = '';
  const line = '+—+———+———+———+—+———+———+———+—+———+———+———+—+';
  for (let i = 0; i < tableResult.length; i++) {
    if (i % (tableResult.length / 9) === 0) {
      if (i % 9 === 0 && i > 0) {
        biutifulTable += ` |`;
      }
      if (i % (tableResult.length / 3) === 0) {
        biutifulTable += `\n${line}`;
      }
      biutifulTable += `\n${line}`;
      biutifulTable += `\n|`;
    }
    if (i % 3 === 0) {
      biutifulTable += ` |`;
    }
    biutifulTable += ` ${tableResult[i]} |`;
  }
  biutifulTable += `\n${line}\n${line}`;
  return biutifulTable;
}
