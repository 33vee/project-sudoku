const arr = [
  [[], [], 7, 8, 6, 1, [], [], []],
  [[], [], 8, [], [], 3, [], [], []],
  [5, 6, [], [], 9, [], [], 1, []],
  [1, [], [], [], 7, [], [], 8, 5],
  [[], [], [], 3, 4, 5, [], [], []],
  [6, 3, [], [], 1, [], [], [], 7],
  [[], 5, [], [], 2, [], [], 9, 8],
  [[], [], [], 6, [], [], 5, [], []],
  [[], [], [], 5, 3, 7, 1, [], []],
];

const all = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkCol(arr) {
    const box1 = []
    const box2 = []
    const box3 = []
    const box4 = []
    const box5 = []
    const box6 = []
    const box7 = []
    const box8 = []
    const box9 = []

    box1.push(arr[0][0], arr[0][1], arr[0][2], arr[1][0], arr[1][1], arr[1][2], arr[2][0], arr[2][1], arr[2][2])
    box2.push(arr[0][3], arr[0][4], arr[0][5], arr[1][3], arr[1][4], arr[1][5], arr[2][3], arr[2][4], arr[2][5])
    box3.push(arr[0][6], arr[0][7], arr[0][8], arr[1][6], arr[1][7], arr[1][8], arr[2][6], arr[2][7], arr[2][8])
    box4.push(arr[3][0], arr[3][1], arr[3][2], arr[3][3], arr[3][4], arr[3][5], arr[3][6], arr[3][7], arr[3][8])
    box5.push(arr[3][3], arr[3][4], arr[3][5], arr[4][3], arr[4][4], arr[4][5], arr[5][3], arr[5][4], arr[5][5])
    box6.push(arr[3][6], arr[3][7], arr[3][8], arr[4][6], arr[4][7], arr[4][8], arr[5][6], arr[5][7], arr[5][8])
    box7.push(arr[6][0], arr[6][1], arr[6][2], arr[7][0], arr[7][1], arr[7][2], arr[8][0], arr[8][1], arr[8][2])
    box8.push(arr[6][3], arr[6][4], arr[6][5], arr[7][3], arr[7][4], arr[7][5], arr[8][3], arr[8][4], arr[8][5])
    box9.push(arr[6][6], arr[6][7], arr[6][8], arr[7][6], arr[7][7], arr[7][8], arr[8][6], arr[8][7], arr[8][8])


    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(box[i][j])) {
                arr[i][j] = [...all];
                arr[i][j] = new Set(arr[i][j]); 
              }

        // for (let j = 0; j < 9; j++) {
        //   if (Array.isArray(arr[i][j])) {
        //     arr[i][j] = [...all];
        //     arr[i][j] = new Set(arr[i][j]); 
        //   }
        // }
      }

  console.log(box1);
  

}

console.log(checkCol(arr));


module.exports = checkCol;
