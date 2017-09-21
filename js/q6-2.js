
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

function checkRanking(food) {
  var index = foods.indexOf(food)
  var ranking = index + 1
  console.log("The ranking of " + food + " is " + ranking)
}



checkRanking("Pho")
