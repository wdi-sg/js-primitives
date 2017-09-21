// var alphabetKey = "1abcdefghijklmnopqrstuvwxyz"; // Var to hold alphabets, 1 at the start is to bump the index
// var input = ("Hello World"); // User input

function high(sentence) {

  var wordArr = sentence.split(' ') /// 1. split the sentence into word
  var letterArr =[]/// split word into letter
  for(var i = 0; i<=wordArr.length; i++) {
    console.log('each word' , wordArr[i])
    letterArr.push(wordArr[i].split(''))
  }
  }
//   var alphaArr =[]
//   for (var num = 0; num < letterArr.length; num++) {
//     console.log('each lettrArr item', letterArr[num])
//     for(var j=o; j < letterArr[num].length; j++) {
//       console.log('each letter', letterArr[num][j]) // getting an single array from two arrays (arr[0][0])
//     }
//   }
// }
//
// function convertLetterIntoNumber(letter) {
//   //conver letter into alphabet position
//   console.log('letter',letter)
//   console.log(letter.charCodeAt(0) -96)
//   return letter.charCodeAt(0) -96
// }

// convertLetterIntoNumber('z')
high('man i need')
///split array into two arrays.
/// individual character for each array
// compare


// var alphabet_position = function() { // Function to check position of alphabet from user input
//
//  var numberedAlpha = '';  //numberedAlpha is used to return the string of numbers after comparing with user input
//   input = input.toLowerCase(); //make user input lowercase because our check string is lowercase
//
//
//  for (var i = 0; i < input.length; i++) {    // for loop to run the check on the length of user input
//     // console.log(input[i]);
//     for (var j = 0; j < alphabetKey.length; j++) { // for loop to check whether alphabet from user input matches database
//       if (input[i] === alphabetKey[j]) {   //if letter from user input matches alphabet from database
//         numberedAlpha = numberedAlpha + ' ' + j;  //add index number to numberedAlpha string
//       }
//     }
//   }
//   return numberedAlpha; //return numberedAlpha variable
// };
//
//
// console.log(alphabet_position());  //log result of function


// / function high(sentences) {
// console.log(sentences)
// split the sentence into word
// sentence.split()
// }
// high('man i need a taxi up to ubud') output => 'taxi'
