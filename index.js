function findMinAndRemove(array){

  let min = array[0];
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){

  let sortedArray = [];
  let current

  while (array.length > 0) {
    let current = findMinAndRemove(array)
    sortedArray.push(current)
  }
  return sortedArray

}
