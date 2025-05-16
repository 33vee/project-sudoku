// принимаю Массив массивов от Димы и мне нужно сделать из этого измененный массив массивов со вставкой туда чисел новых
function solve(arr) {
  const newArr = arr.map((number) =>
    number.map((num) => (num === '-' ? (num = '0') : num)),
  );
  return newArr;
}

// function certainNumbers(arr) {
//   newArr1 = []
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       newArr1.push(arr[i][j]);
//     }
//   }
//   return newArr1;
// }
