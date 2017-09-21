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

var hello = function (){
    for (var i=0; i<foods.length; i++)
        {
            if (foods[i] === "Pho")  {
              return i+1
              break
              }
        }
}
console.log(hello());
