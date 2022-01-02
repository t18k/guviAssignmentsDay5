// 1.addFive
var num = 10;
function addFive(num) {
  return num + 5;
}
var result = addFive(num);
console.log(result);

// 2.getOpposite
var num = "5";
function getOpposite(num) {
  return num * -1;
}
var result = getOpposite(num);
console.log(result);

// 3.toSeconds
var min = 5;
function toSeconds(min) {
  return min * 60;
}
var secs = toSeconds(min);
console.log(secs);

// 4.toInteger
var mystr = "5";
function toInteger(mystr) {
  return parseInt(mystr);
}
var myint = toInteger(mystr);
console.log(myint);

// 5.nextNumber
var myint = 0;
function nextNumber(myint) {
  return myint + 1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);

// 6.getFirstElement
var arr = [1, 2, 3];
function getFirstElement(arr) {
  return arr[0];
}
var data = getFirstElement(arr);
console.log(data);

// 7.hourToSeconds
var arr = [1, 2, 3];
function hourToSeconds(arr) {
  let result = arr.map((num) => num * 3600);
  return result;
}
var data = hourToSeconds(arr);
console.log(data);

// 8.findPerimeter
function findPerimeter(num1, num2) {
  return 2 * (num1 + num2);
}
var peri = findPerimeter(6, 7);
console.log(peri);

// 9.lessThan100
function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}
var res = lessThan100(22, 15);
console.log(res);

// 10.remainder
function remainder(num1, num2) {
  return num1 % num2;
}
var res = remainder(1, 3);
console.log(res);

// 11.CountAnimals
function CountAnimals(tur, horse, pigs) {
  return tur * 2 + horse * 4 + pigs * 4;
}
var legs = CountAnimals(2, 3, 5);
console.log(legs);

// 12.frames
function frames(num1, num2) {
  return num1 * 60 * num2;
}
var fps = frames(1, 2);
console.log(fps);

// 13.divisibleByFive
function divisibleByFive(num1) {
  return num1 % 5 === 0;
}
var divisible = divisibleByFive(5);
console.log(divisible);

// 14.isEven
function isEven(num) {
  if (Number.isInteger(num)) return num % 2 === 0;
  return -1;
}
var even = isEven(5);
console.log(even);

// 15.areBothOdd
function areBothOdd(num1, num2) {
  return num1 % 2 === 1 && num2 % 2 === 1;
}
var bothOdd = areBothOdd(5, 9);
console.log(bothOdd);

// 16.getFullName
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// 17.getLengthOfWord
function getLengthOfWord(word1) {
  return word1.length;
}

// 18.isSameLength
function isSameLength(word1, word2) {
  return word1.length === word2.length;
}

// 19.getDistance
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 20.getNthElement
function getNthElement(array, n) {
  return array[n];
}

// 21.getLastElement
function getLastElement(array) {
  let n = array.length - 1;
  return array[n];
}

// 22.getProperty
var obj = {
  mykey: "value",
};
function getProperty(obj, key) {
  return obj[key];
}

// 23.addProperty
var obj = {};
function addProperty(obj, key) {
  obj[key] = true;
}
addProperty(obj, "mykey");
console.log(obj);

// 24.removeProperty
var obj = { mykey: true };
function removeProperty(obj, key) {
  delete obj[key];
}
removeProperty(obj, "mykey");
console.log(obj);

// 25.countPositivesSumNegatives
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
  let pos = 0;
  let neg = 0;
  for (let num of arr) {
    if (num > 0) pos += num;
    else neg += num;
  }
  let array = [pos, neg];
  return array;
};
console.log(ar2(arr));

// 26.getPositives
function getPositives(ar) {
  let res = ar.filter((num) => {
    if (num > 0) return true;
  });
  return res;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);

// 27.powersOfTwo
function powersOfTwo(n) {
  for (let i = 0; i <= n; i++) {
    if (i === n) res += Math.pow(2, i);
    else res += Math.pow(2, i) + "";
  }
  return res;
}
console.log(powersOfTwo(3));

// 28.findMax
function findMax(ar) {
  let max = ar[0];
  for (let i = 1; i < ar.length; i++) {
    if (max < ar[i]) max = ar[i];
  }
  return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

// 29.printPrimes
printPrimes(100);
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " → ", i);
      n++;
    }

    i++;
  }
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

// 30.getPrimes
function getPrimes(nPrimes, startAt) {
  let count = 10;
  num = startAt + 1;
  let primes = [];
  while (primes.length < 10) {
    if (isPrime(num)) primes.push(num);
    num += 1;
  }
  return primes;
}
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
console.log(getPrimes(10, 100));

// 31.reverseString
function reverseString(s) {
  return s.split("").reverse().join("");
}
var s = reverseString("JavaScript");
console.log(s);

// 32.mergeArrays
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2) {
  var result = [];
  //this will add the first array to the result array
  for (let el of ar1) {
    result.push(el);
  }

  for (let el of ar2) {
    result.push(el);
  }

  return result;
}

// 33.sumCSV
function sumCSV(s) {
  let arr = s.split(",").map(Number);
  let result = arr.reduce((acc, item) => acc + item);
  return result;
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
