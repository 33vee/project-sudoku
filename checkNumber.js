function checkNumber(smallSquare, arrRow, arrColumn, number) {
  if (
    !smallSquare.includes(number) &&
    !arrRow.includes(number) &&
    !arrColumn.includes(number)
  ) {
    return true;
  }
  return false;
}

module.export = {checkNumber}