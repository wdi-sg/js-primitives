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

for (var i = 0; i<= foods.length - 1; i++) {
  //console.log(foods[i]);
  if (foods[i] === 'Donuts') {
   foods.splice(i,1)
  }
}

console.log(foods)
