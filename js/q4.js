
var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

// 4.) List all the `friends` above in reverse alphabetical order.



var arr = friends.split(",");
var sortedFriends = arr.sort();
var reverseFriends = sortedFriends.reverse();

console.log(reverseFriends);
