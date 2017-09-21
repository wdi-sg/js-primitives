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

function isDonuts(foods) {
  return foods === "Donuts"
}


var indexOfDonuts = foods.findIndex(isDonuts);
var deleteDonuts = foods.splice(indexOfDonuts,1);
console.log (foods);
