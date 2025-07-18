function vert(array, j) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i][j]);
  }
  return newArr;
}
