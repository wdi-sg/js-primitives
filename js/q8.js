var foods = [
  "Popcorn",
  "Potato chips",
  "Shrimp",
  "Chicken rice",
  "Poutine",
  "Tacos",
  "Toast",
  "French Toast",
  "Crab",
  "Pho",
  "Lasagna",
  "Brownie",
  "Lobster",
  "Donuts",
  "Ice cream",
  "Hamburger",
  "Sushi",
  "Chocolate",
  "Pizza"
];

var foodsRemoved = foods.splice(foods.indexOf("Donuts"), 1);

console.log(foods[5 - 1]); // 5th favorite food
console.log(foods[10 - 1]); // 10th favorite food
