// 1.a) Print odd numbers in an array
// Anonymous function
let odd = function (arr) {
  let result = arr.filter((num) => num % 2 === 1);
  console.log(result);
};
let oddArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
odd(oddArr);

// IIFE
(function oddNumbers(arr) {
  let result = arr.filter((num) => num % 2 === 1);
  console.log(result);
})(oddArr);

// 1.b) Convert all the strings to title caps in a string array
// Anonymous function
let titleCase = function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
};
titleCase("gja jaha ajdahda ajad");

// IIFE
(function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
})("gja jaha ajdahda ajad");

// 1.c) Sum of all numbers in an array
// Anonymous function
let arr = [1, 2, 3, 4, 5];
let addition = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
};
console.log(addition(arr));

// IIFE
(function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  console.log(sum);
})(arr);

// 1.d) Return all the prime numbers in an array
// Anonymous function
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let primeNumbers = function (arr) {
  let primes = [];
  for (let num of arr) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && num > 1) primes.push(num);
  }
  console.log(primes);
};
primeNumbers(a);

// IIFE
(function (arr) {
  let primes = [];
  for (let num of arr) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime && num > 1) primes.push(num);
  }
  console.log(primes);
})(a);

// 1.e) Return all the palindromes in an array
// Anonymous function
let pal = [
  1, 10, 11, 13, 22, 100, 111, 113, 112, 222, 112, 333, 1000, 1111, 2222,
];
let palindromeNumbers = function (arr) {
  let palin = [];
  for (let number of arr) {
    let num = number;
    let rev = 0;
    while (num !== 0) {
      let rem = num % 10;
      rev = rev * 10 + rem;
      num = parseInt(num / 10);
    }
    if (number === rev) palin.push(number);
  }
  console.log(palin);
};
palindromeNumbers(pal);

// IIFE
(function (arr) {
  let palin = [];
  for (let number of arr) {
    let num = number;
    let rev = 0;
    while (num !== 0) {
      let rem = num % 10;
      rev = rev * 10 + rem;
      num = parseInt(num / 10);
    }
    if (number === rev) palin.push(number);
  }
  console.log(palin);
})(pal);

// 1.f) Return median of two sorted arrays of same size
function getMedian(ar1, ar2, n) {
  var i = 0;
  var j = 0;
  var count;
  var m1 = -1,
    m2 = -1;
  for (count = 0; count <= n; count++) {
    if (i == n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    } else if (j == n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }

    if (ar1[i] <= ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      i++;
    } else {
      m1 = m2;
      m2 = ar2[j];
      j++;
    }
  }

  return (m1 + m2) / 2;
}

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 === n2) console.log("Median is " + getMedian(ar1, ar2, n1));
else console.log("Doesn't work for arrays of unequal size");

// 1.g) Remove duplicates from an array
// Anonymous function
let dupArr = [1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8];
let removeDup = function (arr) {
  let sorted = arr.sort();
  let resultArray = [arr[0]];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] !== sorted[i]) resultArray.push(sorted[i]);
  }
  console.log(resultArray);
};
removeDup(dupArr);

// IIFE
(function (arr) {
  let sorted = arr.sort();
  let resultArray = [arr[0]];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] !== sorted[i]) resultArray.push(sorted[i]);
  }
  console.log(resultArray);
})(dupArr);

// 1.h) Rotate an array by k times
// Anonymous function
let rotArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rotatenNTimes = function (arr, n) {
  for (let i = 0; i < n; i++) {
    let temp = arr[0];
    arr = arr.slice(1);
    arr.push(temp);
  }
  console.log(arr);
};
rotatenNTimes(rotArr, 6);

// IIFE
(function (arr, n) {
  for (let i = 0; i < n; i++) {
    let temp = arr[0];
    arr = arr.slice(1);
    arr.push(temp);
  }
  console.log(arr);
})(rotArr, 6);
