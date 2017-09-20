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

function findPos(food){
  for (var i = 0; i < foods.length; i++) {
    if( foods[i] === food){
      console.log("The ranking of food is "+[i+1]);
    }
  }
}

findPos("Pho");
