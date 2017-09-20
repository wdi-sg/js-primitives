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
// loop through the food array and log to console the foods from element position 4 to 9
for(var i = 0 ; i < foods.length ; i++) {
  if( i >= 4 && i <= 9 ) {
    rank = i+1
    console.log("Fav food rank " + rank + " is " + foods[i])
  }
}
