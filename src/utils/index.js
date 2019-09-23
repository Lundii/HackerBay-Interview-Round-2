export const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const closestSquare = (randomSquares, mainSquare) => {
  let minSum = 500;
  const sumSquares = randomSquares.map((square) => {
    const column = Math.abs(square[0] - mainSquare[0])
    const row = Math.abs(square[1] - mainSquare[1])
    return column + row;
  });
  let minIndex;
  sumSquares.forEach((sum, index) => {
    if (sum <= minSum) {
      minSum = sum;
      minIndex = index;
    }
  });
  return ({
    minIndex,
    nearest: randomSquares[minIndex],
  })
} 

export const isArrayInArray = (arr, item) => {
  var item_as_string = JSON.stringify(item);

  var contains = arr.some(function (ele) {
    return JSON.stringify(ele) === item_as_string;
  });
  return contains;
}
