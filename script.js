// Print Hello Name
var printHelloName = function(firstName) {
  return `Hello, ${firstName}`;
}

// console.log(printHelloName('Kevin'));
// console.log(printHelloName(''));

// Get Initials
var getInitials = function(name) {
  var nameSplit = name.split(' ');
  var initials = nameSplit[0][0].toUpperCase() + '.' +
  nameSplit[1][0].toUpperCase();
  return initials;
}
// console.log(getInitials('Kevin Scheffler'));
// console.log(getInitials('John Smith'));
// console.log(getInitials('ulysses grant'));

// sumOfPositive
var sumOfPositive = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum += nums[i];
    }
  }
  if (sum < 1) {
    return 0;
  } else {
    return sum;
  }
}

// console.log(sumOfPositive([1, -2, 3, 4]));
// console.log(sumOfPositive([-2, -5, -10, -1]));
// console.log(sumOfPositive([4, 40, -40, -4]));

var multiplyNumbers = function(num1, num2) {
  return num1 * num2;
}

console.log(multiplyNumbers(1, 0));
console.log(multiplyNumbers(5, 5));
console.log(multiplyNumbers(100, 500));