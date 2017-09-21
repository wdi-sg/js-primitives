// var a = [42,32,53,42,12];
//
// function printArray(a) {
//
//   if(a.length > 0) {
//     console.log(a[0]);
//   }
//   for (var i = 1; i < a.length; i++) {
//     console.log("," + a[i]);
//   }
// }
// console.log(

function printArray(a) {
  // Deal with the fence post by printing the first item in the array
  // without a comma and only when we're it is a non-empty array!
  function printArray(a) {
  // Don't print anything when the array is empty. Simply return to exit
  // the function.
  if (a.length === 0) {
    return;
  }

  // Start i at zero and print each element in the array followed by a comma.
  // Set the for loop to end before `a.length - 1` to leave one element left
  // for the fence post at the end after the for loop.
  for (var i = 0; i < a.length - 1; i++) {
    console.log(a[i] + ",");
  }

  // Print the final element at the end of the list without a comma.
  console.log(a[a.length - 1]);
}
