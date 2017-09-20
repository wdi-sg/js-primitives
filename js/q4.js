//List all the friends above in reverse alphabetical order.

 var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
 var alphaFriends = friends.split(",")
 var sortF = (alphaFriends.sort());
  console.log(sortF.reverse());
