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

var finddonut = "Donuts"

for(var i =0; i < foods.length; i++) {
  if(foods[i]===finddonut){
    foods.splice( i, 1)
  }
}
console.log(foods)
