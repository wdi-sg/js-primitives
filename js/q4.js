var friends =
  "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";

var comma = ",";

var friendsArr = friends.split(comma);
// console.log(friendsArr);

friendsArr.sort().reverse();

// var freindsReverse = friendsSort.reverse();

console.log(friendsArr);
