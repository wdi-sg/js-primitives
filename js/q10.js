var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14]
var agesSort = ages.sort(function(a, b){return a-b})
//sort the ages first by values &find the total index, divide to halfway

//console.log(agesSort)

var length = ages.length
//console.log(length)
var medianNum = (Math.floor(length/2))
var median = agesSort[medianNum]
console.log(median)
