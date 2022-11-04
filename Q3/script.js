let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let uniqueChars = [...new Set(arr)];
  return uniqueChars;
}
alert(unique(values));
