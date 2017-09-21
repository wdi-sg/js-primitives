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
  'Pizza']

var error = 'Donuts'
var foodTwo = []
for (i = 0; i < foods.length; i++) {
    if (foods[i] === error) {
      continue
    }
  foodTwo.push(foods[i])
  }
console.log(foodTwo)
