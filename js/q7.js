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

// loop through the food array and search for 'Donuts', then remove
for(var i = 0 ; i < foods.length ; i++) {
  if(foods[i] === 'Donuts') {
    foods.splice(i, 1)
  }
}

// print rank
for(var i = 0 ; i < foods.length ; i++) {
  console.log(foods[i])
}
