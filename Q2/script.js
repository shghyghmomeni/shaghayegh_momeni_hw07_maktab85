function sortArrays(...arr) {
  let emptyArr = [];
  emptyArr = emptyArr.concat(...arr).sort((a, b) => b - a);
  console.log(...emptyArr);
}
sortArrays([5, 6, 2], [3, 7, 1], [2, 4, 8]);
