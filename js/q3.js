var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
var word = "";
var newArr = [];

// loop through friends variable till last char
for(var i = 0 ; i < friends.length ; i++) {
  // everytime a comma is read, push word into newArr, then reset word to an empty string
  if(friends[i] === ',') {
    if(word !== "") {
      newArr.push(word);
      word = "";
    }
  }
  // else append a single character to word
  else {
    word += friends[i];
  }
}

// push last word to the array
newArr.push(word);

// run through newArr and print to console
for(var i = 0 ; i < newArr.length ; i++) {
  console.log(newArr[i]);
}
