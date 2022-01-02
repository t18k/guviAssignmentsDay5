// 3.a) Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = arr.filter((num) => num % 2 === 1);
console.log(odd);

// 3.b) Convert all the strings to title caps in a string array
titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(" "));
};
titleCase("gja jaha ajdahda ajad");

// 3.d) Return all the prime numbers in an array
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let primeNumbers = a.filter((num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
});
console.log(primeNumbers);

// 3.e) Return all the palindromes in an array
let pal = [
  1, 10, 11, 13, 22, 100, 111, 113, 112, 222, 112, 333, 1000, 1111, 2222,
];
let palindromeNumbers = pal.filter((number) => {
  let num = number;
  let rev = 0;
  while (num !== 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }
  if (number === rev) return number;
});
console.log(palindromeNumbers);
