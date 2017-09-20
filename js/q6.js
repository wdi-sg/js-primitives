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

var rank;

// loop through the food array and search for 'Pho', then store the value of i+1 into rank
for(var i = 0 ; i < foods.length ; i++) {
  if(foods[i] === 'Pho') {
    rank = i+1
  }
}

// print rank
console.log("Pho is rank " + rank)
