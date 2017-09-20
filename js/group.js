//create string

var alphabetKey = "1abcdefghijklmnopqrstuvwxyz";
var input = "a a abbcc";

// console.log(alphabetKey.length);
// console.log(input);

var alphabet_position = function() {
  var numberedAlpha = "";
  input = input.toLowerCase();
  // console.log(input);
  for (var i = 0; i < input.length; i++) {
    // console.log(input[i]);
    for (var j = 0; j < alphabetKey.length; j++) {
      if (input[i] === alphabetKey[j]) {
        numberedAlpha = numberedAlpha + " " + j;
        break;
      }
    }
  }
  return numberedAlpha;
};

// alphabet_position();

console.log(alphabet_position());
