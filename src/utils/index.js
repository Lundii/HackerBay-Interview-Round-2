/**
 * Generates a random integer between min and max include
 * @param {integer} min - the minimum number
 * @param {integer} max - the maximum number
 * @return - a randomly generated number between the min and max inclusive
 */
export const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Gets ths closet green Sprite to the red Sprite
 * @param {array} randomSquares - an array of arrays holding the green Sprites
 * @param {array} mainSquare - an array holding the axis of the axis Sprites
 * @returns an object holding the index of the closest green sprites and the axis of the 
 * green Sprites
 */
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

/**
 * Determines if an array is present in an array of arrays
 * @param {array} arr - the array of arrays
 * @param {array} item - the array to search for
 * @return boolean
 */
export const isArrayInArray = (arr, item) => {
  var item_as_string = JSON.stringify(item);

  var contains = arr.some(function (ele) {
    return JSON.stringify(ele) === item_as_string;
  });
  return contains;
}
