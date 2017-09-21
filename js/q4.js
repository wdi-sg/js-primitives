var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var separator =','
var friendsArray = friends.split(separator);

var friendsReverse = friendsArray.sort();
console.log(friendsReverse.reverse());
