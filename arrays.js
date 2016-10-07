// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

// ---------------------------
// 1. Find largest number
// ---------------------------
function largest(numbers) {
  var largestNum = numbers[0]; //this starts out being the first number
  for (var x = 0; x < numbers.length; x++) {
    if (numbers[x] > largestNum) {  //initially, it compares numbers[0] to number 1, itself
//      console.log(numbers[x] + ' is larger than ' + largestNum);
      largestNum = numbers[x]; // updates the largest number
    }
  }
  return largestNum;
};

//sort from highest to lowest then get the first position.
// numbers.sort(function largest(a, b) {
//     return (b - a)}) [0];

// ---------------------------
// 2. Find longest string
// ---------------------------
function longest(strings) {
    var longestString = strings[0];
    for (var x = 0; x < strings.length; x++) {
      if ((strings[x].length) > (longestString.length)) {
        longestString = strings[x];
      }
    }
  return longestString;
};

// ---------------------------
// 3. Find even numbers
// ---------------------------
function even(numbers) {
  var evenNum = [];
  for (var x = 0; x < numbers.length; x++) {
    if (numbers[x] % 2 === 0) {
      evenNum.push(numbers[x]);
    }
  }
  return evenNum;
};


// ---------------------------
// 4. Find odd numbers
// ---------------------------
function odd(numbers) {
  var oddNum = [];
  for (var x = 0; x < numbers.length; x++) {
    if (!(numbers[x] % 2 === 0)) {
      oddNum.push(numbers[x]);
    }
  }
  return oddNum;
};

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
function find(wordIs) {
  var arrayIs = [];
  for (var x = 0; x < strings.length; x++) {
    if (strings[x].includes("is")) {
      arrayIs.push(strings[x]);
    }
  }
  return arrayIs;
};

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------
function joinBoth(numbers, strings) {
  var newArray = [];
  for (var x = 0; x < numbers.length; x++) {
      newArray.push(numbers[x]);
    }
  for (var x = 0; x < strings.length; x++) {
      newArray.push(strings[x]);
    }
  return newArray;
};

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------

// I was not able to complete this one tonight.

function javaScriptT(instructors) {
  var teachArray = [];
  for (var i = 0; i < instructors.length; i++) {
    if (instructors.includes('JavaScript'))
    teachArray.push(instructors[i]) {
    }
  }
  return teachArray;
};

  function compare(a,b) {
    if (a.fristname < b.firstname)
      return -1;
    if (a.firstname > b.firstname)
      return 1;
    return 0;
  }
