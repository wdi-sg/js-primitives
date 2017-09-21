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
Method 1:
console.log(foods.slice(4,9));

Method 2:
var answer = []
for(var i = 4; i < 9; i++) {
  answer.push(foods[i])
}
console.log(answer)
