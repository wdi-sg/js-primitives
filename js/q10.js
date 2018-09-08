var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

function sortNumber(a,b) {
  return a - b;
}
var sortAges = ages.sort(sortNumber);
//console.log(sortAges);
var numberOfValues = ages.length;
//console.log(numberOfValues);

function medianNumber(n) {
  if (numberOfValues % 2 == 0 ) {
  return n / 2
} else {
  return (n + 1)/2
  }
}

var indexPosition = ages[medianNumber(numberOfValues)-1];
console.log(indexPosition);
//console.log(ages[medianNumber]);

//console.log(medianNumber(numberOfValues))

//var medianNumber = numberOfValues / 2 ;
//console.log(medianNumber);
