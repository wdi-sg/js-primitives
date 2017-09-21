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

var Allfriends = myFriends.concat(yourFriends);

console.log(Allfriends);

// create two arrays
var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];

/* call concat() on the first array passing
   the second as an argument */
var arr3 = arr1.concat(arr2);
