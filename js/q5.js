 //We have two lists of friends below. Combine the two arrays into one array, then sort them alphabetically.

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

 var container = myFriends.concat(yourFriends)
  var sorted = container.sort()

console.log(sorted)
