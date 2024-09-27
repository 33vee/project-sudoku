const arr = [
    [0, 0, 7, 8, 6, 1, 0, 0, 0],
    [0, 0, 8, 0, 0, 3, 0, 0, 0],
    [5, 6, 0, 0, 9, 0, 0, 1, 0],
    [1, 0, 0, 0, 7, 0, 0, 8, 5],
    [0, 0, 0, 3, 4, 5, 0, 0, 0],
    [6, 3, 0, 0, 1, 0, 0, 0, 7],
    [0, 5, 0, 0, 2, 0, 0, 9, 8],
    [0, 0, 0, 6, 0, 0, 5, 0, 0],
    [0, 0, 0, 5, 3, 7, 1, 0, 0]
  ];

function checkCol(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i][0]);   
    }
}

console.log(checkCol(arr));


module.exports = checkCol;