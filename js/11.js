
var alphabetKey = "1abcdefghijklmnopqrstuvwxyz"; // Var to hold alphabets, 1 at the start is to bump the index
var input = ("The sunset sets at twelve o' clock."); // User input


var alphabet_position = function() { // Function to check position of alphabet from user input

 var numberedAlpha = '';  //numberedAlpha is used to return the string of numbers after comparing with user input
  input = input.toLowerCase(); //make user input lowercase because our check string is lowercase


 for (var i = 0; i < input.length; i++) {    // for loop to run the check on the length of user input
    // console.log(input[i]);
    for (var j = 0; j < alphabetKey.length; j++) { // for loop to check whether alphabet from user input matches database
      if (input[i] === alphabetKey[j]) {   //if letter from user input matches alphabet from database
        numberedAlpha = numberedAlpha + ' ' + j;  //add index number to numberedAlpha string
      }
    }
  }
  return numberedAlpha; //return numberedAlpha variable
};


console.log(alphabet_position());  //log result of function
