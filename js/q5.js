var myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];

var yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];

// loop through each element in the yourFriends array and append to the myFriends array
for(var i = 0 ; i < yourFriends.length ; i++) {
  myFriends.push(yourFriends[i]);
}

myFriends.sort(); // sort the myFriends array alphabetically
myFriends.reverse(); // reverse the myFriends array

// loop through each element in the myFriends array and log to console
for(var i = 0 ; i < myFriends.length ; i++) {
  console.log(myFriends[i]);
}
