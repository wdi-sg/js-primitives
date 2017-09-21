var alphabetsAZ = "1abcdefghijklmnopqrstuvwxyz"
var userInput = "The sunset sets at twelve o' clock.".toLowerCase()

var alphabetPosition = function () {

  var answer = ''

  for(var i = 0; i < userInput.length ; i++) {
    for(var a = 0; a < alphabetsAZ.length ; a++) {
      if(alphabetsAZ[a] === userInput[i]) {
        answer = answer +'' + i
      }
    }
  }
  return answer;
}
console.log(alphabetPosition())


var matt = '1'.length 
