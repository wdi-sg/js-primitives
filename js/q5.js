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

var newArr = []

for (var i=0; i < myFriends.length; i++){
  newArr.push(myFriends[i])
}
for(var j=0; j < yourFriends.length; j++){
  newArr.push(yourFriends[j])
  }
newArr.sort();
console.log(newArr);
