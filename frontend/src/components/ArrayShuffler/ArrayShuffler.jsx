

export function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// var alphabet=["a","b","c","d","e"];
// randomArrayShuffle(alphabet); 
// console.log("Random Array Shuffler", randomArrayShuffle(alphabet))



