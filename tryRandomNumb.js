const { EOL } = require('os');

const sudokuField = [
  [1, 2, 3, '-', 5, '-', 7, '-', 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

const randomnumb = ['ж', 'k', 'f']

function tryRandomNumb(arr){
    const arrNew = arr
    // for (let str=0;str < arr.length)
    function fillNext (){
        for (let i = 0; i < arrNew.length; i++) {
            const randomIndex = Math.floor(Math.random() * randomnumb.length);
            console.log(randomIndex);
        if (randomnumb.length === 0) {
            return 'Игра окончена';
        }
        if (arrNew[i] === '-') {
            arrNew[i] = randomnumb[randomIndex];
            console.log(arrNew[i]);
        }
        setTimeout(() => fillNext(index + 1), 1000);
    
    }
    return arrNew;
}
}
console.log(tryRandomNumb(sudokuField[0]))
