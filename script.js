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
  let product = 0;
  for (i = 0; i < num1; i++) {
    product += num2;
  }
  return product;
}

// console.log(multiplyNumbers(1, 0));
// console.log(multiplyNumbers(5, 5));
// console.log(multiplyNumbers(100, 500));

var repeatString = function(s, n) {
  let newString = '';
  for (let i = 0; i < n; i++) {
    newString += s;
  }
  return newString;
}

// console.log(repeatString("Abc", 3));
// console.log(repeatString("B", 5));
// console.log(repeatString("hello", 2));

// Is Palindrome
var isPalindrome = function(str) {
  for (let i = 0; i < str.length / 2; i++) {
    const rightIndex = str.length - 1 - i;
    if (str[i] !== str[rightIndex]) {
      return false
    }
  }
  return true;
}

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('abcd'))
// console.log(isPalindrome('Abcba'))

// CountOdd
// var countOdd = function(n) {
//   let odd = 0;
//   while (n--) {
//     if (n % 2 === 1) {
//       odd++;
//     }
//   }
//   return odd;
// }

var countOdd = function(n) {
  return Math.floor(n / 2);
}


// console.log(countOdd(5));
// console.log(countOdd(10));
// console.log(countOdd(1));


// sumMultiples
var sumMultiples = function(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if ((i % 3 === 0) || (i % 5 === 0))  {
      sum += i
    }
  }
  return sum;
}

// console.log(sumMultiples(10));
// var unbalancedArray = function(nums) {
//   return nums.reduce(function(sum, num) {
//     return sum + num;
//   });
// }

var unbalancedArray = function(nums) {
  return nums.reduce((sum, num) => {
    return sum + num
  });
}


// console.log(unbalancedArray([-1, 4, 1, 5, -4]));

// countVowels
var countVowels = function(s) {
  let split = s.split('')
  let vowels = 0;
  for (let i = 0; i < split.length; i++) {
    if (split[i] === 'a' || split[i] === 'e' || split[i] === 'i' || split[i] === 'o' || split[i] === 'u') {
      vowels++; 
    }
  }
  return vowels;
}

console.log(countVowels('adsbecdei'));