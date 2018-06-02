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
var donIndex = foods.indexOf('Donuts');
var foodsAmended = foods.splice(donIndex, 1);
var foodFifthToTenth = foods.slice(4, 11);
console.log(foodFifthToTenth);
