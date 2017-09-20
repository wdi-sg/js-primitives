// 4.) List all the `friends` above in reverse alphabetical order.

var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

var res = friends.split(",");
var joined = res.sort();
var rev = joined.reverse();
var revOrder = rev.join();
console.log(revOrder);
