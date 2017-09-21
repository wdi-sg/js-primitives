
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

var sortAge =ages.sort(function(a, b) {
  return a - b });

var totalCount = sortAge.length;

var medianNumber= (totalCount - 1) / 2
var medianAge =(sortAge[medianNumber]);

console.log(medianAge);





// calculate total number in list
// if divided by 2 has a remainder, (index+1)
// if (totalNumber)
//
// 30 15
// 31 15.5 = 16
//
// 35 +2 = 17.5
// 36 = 18
// 18
