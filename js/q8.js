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


var arrayFav = []
var findFav = function() {
for (var i =0; i<foods.length; i++) {
        if (i = 4) {
          arrayFav[0] = foods[i]
        }
        if (i = 9) {
          arrayFav[1] = foods[i]
        }
        else {
          break
        }
    return arrayFav
  }
}
    console.log(findFav());
