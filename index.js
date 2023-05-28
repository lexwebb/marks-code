function fizzBuzz(n) {
  var isMultipleOfThree;
  var isMultipleOfFive;

  if (n == 0) {
    return 0;
  }

  if (n % 3 == 0) {
    isMultipleOfThree = true;
  }

  if (n % 5 == 0) {
    isMultipleOfFive = true;
  }

  if (isMultipleOfThree == true && isMultipleOfFive == true) {
    return "fizzbuzz";
  }

  if (isMultipleOfThree == true) {
    return "fizz";
  }

  if (isMultipleOfFive == true) {
    return "buzz";
  }

  return n;
}

for (var i = 0; i < 50; i = i + 1) {
  console.log(fizzBuzz(i));
}

// var i = 0;
// var limit = 50;
// var go = true;
// while (go) {
//   if (i > limit) {
//     go = false;
//   }
//   console.log(fizzBuzz(i));
//   i = i + 1;
// }

console.log("end");
// console.log(fizzBuzz(1));
// console.log(fizzBuzz(2));
