console.log("hi");


/* // qn 1
var friends = [
    'Moe',
    'Larry',
    'Curly',
    'Jane',
    'Emma',
    'Elizabeth',
    'Elinor',
    'Mary',
    'Darcy',
    'Grey',
    'Lydia',
    'Harriet'
  ];

  console.log(friends[friends.length - 1]);

  // qn 2
  let alphaOrder = friends.sort();
  console.log(alphaOrder); */

  // qn 3 / 4
/*   var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
const friendsArr = friends.split(',');
const friendsArrSort = friendsArr.sort()
console.log(friendsArrSort); */

// qn 5
/* var myFriends = [
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

  yourFriends.push(myFriends);
  let allFriends = yourFriends
  let allFriendsSort = allFriends.sort()
  console.log(allFriendsSort); */

  
  var foods = [
    'Popcorn',
    'Potato chips',
    'Shrimp',
    'Chicken rice',
    'Poutine',
    'Tacos',
    'Toast',
    'French Toast',
    'Crab',
    'Pho',
    'Lasagna',
    'Brownie',
    'Lobster',
    'Donuts',
    'Ice cream',
    'Hamburger',
    'Sushi',
    'Chocolate',
    'Pizza'
  ];
// qn 6
/* let index = foods.indexOf('Pho');
let rank = index + 1;
console.log(rank); */

// qn 7
/* let index = foods.indexOf('Donuts');
console.log(index);
foods.splice(index, (index + 1));
console.log(foods); */

// qn 8
/* let y = foods.slice(6, 11);
console.log(y); */

// qn 9
const profile = [
    ['Moe', 18],
    ['Larry', 19],
    ['Curly', 20],
    ['Jane', 20],
    ['Emma', 21],
    ['Elizabeth', 18],
    ['Elinor', 23],
    ['Mary', 25],
    ['Darcy', 24],
    ['Grey', 18],
    ['Lydia', 24],
    ['Harriet', 18]
];

// bonus
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

const sortAges = ages.sort();
console.log(sortAges);
console.log(sortAges.length);
const length = sortAges.length;
const median = (length + 1) / 2;
console.log(median);
if (length % 2 == 1) {
    console.log(sortAges[median]);
}






