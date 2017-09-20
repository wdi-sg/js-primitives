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

var ourFriends = myFriends + ',' +yourFriends
var ourFriendsArray = ourFriends.split(",")
var ourFriendsAlpha = ourFriendsArray.sort()
console.log(ourFriendsAlpha);
