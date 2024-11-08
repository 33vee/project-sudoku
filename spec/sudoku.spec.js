const sudoku = require('../sudoku.js')


describe('Судоку', () => {
    beforeEach('Переменная с судоку', () => {
        const sudoku = fs.readFileSync('./puzzles.txt', 'utf-8');
    })
    // Леха
    // Возвращает многомерный массив строк с длинной 9
    test('Чтение', () => {
        expect(read()).toEqual(sudoku)
    });
    // Тёма
    test('Решение', () => {
        const answer = 'answer'
        expect(solve()).toEqual(answer)
    });
    // Стас
    test('Правильно ли решение?', () => {
        expect(isSolved()).toBe(true)
        // Использовать RegExp чтобы убедится что все правильно опрел
    });
    // Миша
    test('Корректно отобразить в терминале', () => {
        const prettyB = 
`1 - 5 8 - 2 - - -
 - 9 - - 7 6 4 - 5
 2 - - 4 - - 8 1 9
 - 1 9 - - 7 3 - 6
 7 6 2 - 8 3 - 9 -
 - - - - 6 1 - 5 -
 - - 7 6 - - - 3 -
 4 3 - - 2 - 5 - 1
 6 - - 3 - 8 9 - -`
        expect(prettyBoard()).toBe(prettyB)
    });

})