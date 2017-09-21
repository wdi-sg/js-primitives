// 1.) Find the last name in the following array:

// var friends = [
//   'Moe',
//   'Larry',
//   'Curly',
//   'Jane',
//   'Emma',
//   'Elizabeth',
//   'Elinor',
//   'Mary',
//   'Darcy',
//   'Grey',
//   'Lydia',
//   'Harriet'
// ];
//
// console.log(friends[(friends.length-1)])

// // 2.) Sort the list of `friends` above in alphabetical order.

// console.log(friends.sort())

// 3.) There is a list of names in a string below. How could we sort them alphabetically? Hint: use string and array methods.
//
// ```js
// var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
// ```
// var array = friends.split(",")
// var sortedArray = array.sort()
// var sortedString = sortedArray.toString()
// console.log(sortedString)

// 4.) List all the `friends` above in reverse alphabetical order.

// var reverseArray = array.reverse()
// var reverseString = reverseArray.toString()
// console.log(reverseString)

// 5.) We have two lists of friends below. Combine the two arrays into one array, then sort them alphabetically.
//
// ```js
// var myFriends = [
//   'Rickon',
//   'Meera',
//   'Hodor',
//   'Jojen',
//   'Osha',
//   'Rickard',
//   'Maester',
//   'Rodrik',
//   'Jory',
//   'Septa',
//   'Jon'
// ];
//
// var yourFriends = [
//   'Bilbo',
//   'Boromir',
//   'Elrond',
//   'Faramir',
//   'Frodo',
//   'Gandalf',
//   'Legolas',
//   'Pippin'
// ];
// ```
// var joinarray = myFriends.concat(yourFriends)
// console.log(joinarray.sort())

// 6.) I have a list of favorite foods below. If `Popcorn` is my favorite food and `Potato chips` my second favorite, then how would you find the rank of another food? Try finding the rank of `Pho`.
//
// ```js
// var foods = [
//   'Popcorn',
//   'Potato chips',
//   'Shrimp',
//   'Chicken rice',
//   'Poutine',
//   'Tacos',
//   'Toast',
//   'French Toast',
//   'Crab',
//   'Pho',
//   'Lasagna',
//   'Brownie',
//   'Lobster',
//   'Donuts',
//   'Ice cream',
//   'Hamburger',
//   'Sushi',
//   'Chocolate',
//   'Pizza'
// ];
// ```
// for (i = 0; i < foods.length; i++) {
//   if (foods[i] === 'Pho') {
//     console.log(i+1)
//   }
// }


// 7.) I made a mistake with my favorite foods. How can I find the index of `Donuts` and remove it? **(Hint: look up `splice`)**

// var error = 'Donuts'
// for (i = 0; i < foods.length; i++) {
//   if (foods[i] === error) {
//     var errorNumber = i
//   }
// }
// console.log(errorNumber)
// foods.splice(errorNumber,1)
// console.log(foods)
// 8.) My friends want to know what my `5`th to `10`th favorite foods are. How would I find these foods?

// console.log(foods.splice(5-1,10-5))
// 9.) How would you create an object that efficiently stored the following information? Hint: You only need one object.
//
// ```js
  // 'Moe' is 18
  // 'Larry' is 19
  // 'Curly' is 20
  // 'Jane' is 20
  // 'Emma' is 21
  // 'Elizabeth' is 18
  // 'Elinor' is 23
  // 'Mary' is 25
  // 'Darcy' is 24
  // 'Grey' is 18
  // 'Lydia' is 24
  // 'Harriet' is 18
// ```

// var demo = [
//   { name: "Moe",
//     age: 18
//   } ,
//   { name: "Larry",
//     age: 19
//   } ,
//   { name: "Curly",
//     age: 20
//   } ,
//   { name: "Jane",
//     age: 20
//   } ,
//   { name: "Emma",
//     age: 21
//   } ,
//   { name: "Elizabeth",
//     age: 18
//   } ,
//   { name: "Elinor",
//     age: 23
//   } ,
//   { name: "Mary",
//     age: 25
//   } ,
//   { name: "Darcy",
//     age: 24
//   } ,
//   { name: "Grey",
//     age: 18
//   } ,
//   { name: "Lydia",
//     age: 24
//   } ,
//   { name: "Harriet",
//     age: 18
//   }
// ]


// 10.) **BONUS** - Here are a list of `ages`
//
// ```js
// var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
// ```
// find the `median` age. The median is the number that is halfway into the sorted set. To remember the definition of a median, just think of the median of a road, which is the middlemost part of the road.
//
// var numberages = ages.length + 1
// console.log(numberages)
// console.log(ages[numberages/2])
