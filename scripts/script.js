`use strict`;

// DOM =&gt; Logical problem questions:

// 11. You are given a list of numbers. Write a program that finds the second smallest number in the
// list and displays the result on a web page.
// Given input:10, 5, 20, 3, 8, 15
// Expected output:5

const inputs = [10, 5, 20, 3, 8, 15];

const getSmallest = (arr) => {
  let smallestNumber = arr[0];
  let secondSmallestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (smallestNumber > arr[i]) {
      secondSmallestNumber = smallestNumber;
      smallestNumber = arr[i];
    }
  }
  console.log(secondSmallestNumber);
};

getSmallest(inputs);

// 12. You are given a list of words. Write a program that sorts the words in alphabetical order and
// displays the result on a web page.
// Given input:g,h,r,n,d,d
// Expected output:d,d,g,h,n,r

const descending = ["g", "h", "r", "n", "d", "d"];
descending.sort();
console.log(descending);

// 13. You are given two arrays of numbers. Write a program that finds the common elements
// between the two arrays and displays the result on a web page.
// Given input:[1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// Expected Output:3,4,5

const set1 = [1, 2, 3, 4, 5];
const set2 = [3, 4, 5, 6, 7];

const findCommonNumber = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        console.log(arr1[i], arr2[j]);
      }
    }
  }
};

findCommonNumber(set1, set2);

// 14. You are given a sentence. Write a program that capitalizes the first letter of each word in the
// sentence and displays the result on a web page.
// Given input:this is a sample sentence
// Expected output:This Is A Sample Sentence

const upperCase = (str) => {
  let sentence = str.split(" ");
  let newArray = [];
  for (let i = 0; i < sentence.length; i++) {
    newArray.push(sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1));
  }
  return newArray.join(" ");
};

console.log(upperCase("this is a sample sentence"));

// 15. You are given an array of strings. Write a program that finds the longest string in the array and
// displays the result on a web page.
// Given input:apple, banana, orange, pear, grapefruit
// Expected output:grapefruit

const fruits = ["apple", "banana", "orange", "pear", "grapefruit"];

const longestStr = (arr) => {
  let maxStr = arr[0].length;
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let maxi = arr[i].length;
    if (maxi > maxStr) {
      ans = arr[i];
      maxStr = maxi;
    }
  }
  return ans;
};

console.log(longestStr(fruits));

// 16. You are given a list of names. Write a program that sorts the names in reverse alphabetical
// order and displays the result on a web page.
// Given input:Coimbatore,Skill,Safari,Experience.
// Expected Output:Skill,Safari, Experience,Coimbatore.

const reverseAlpha = ["Coimbatore", "Skill", "Safari", "Experience"];
reverseAlpha.sort();
console.log(reverseAlpha.reverse());

// 17. You are given a string. Write a program that removes all whitespace characters from the string
// and displays the result on a web page.
// Given input: Hello World !
// Expected output:HelloWorld!

const toSpace = "Hello World";

const removeSpace = toSpace.split(" ").join("");
console.log(removeSpace);

// 18. You are given a list of numbers. Write a program that finds the sum of the squares of the
// numbers in the list and displays the result on a web page.
// Given input: 1, 2, 3, 4, 5
// Expected output:55

const numbers = [1, 2, 3, 4, 5];
function squareAverage(n) {
  let sum = 0;
  for (let i = 1; i <= n.length; i++) {
    sum += i * i;
  }
  return sum;
}

console.log(squareAverage(numbers));

// 19. You are given a list of strings. Write a program that concatenates all the strings in the list
// together and displays the result on a web page.

// Given input: &quot;Hello&quot;, &quot;world&quot;, &quot;!&quot;, &quot;This&quot;, &quot;is&quot;, &quot;a&quot;, &quot;concatenation&quot;, &quot;example&quot;
// Expected output:Hello world!Thisisaconcatenationexample

const para = [
  "Hello",
  "world",
  "!",
  "This",
  "is",
  "a",
  "concatenation",
  "example",
];

const result = "".concat(...para);

console.log(result);

// 20. You are given a sentence. Write a program that finds the most common word in the sentence
// and displays the result on a web page.
// Given input: The quick brown fox jumps over the lazy dog.
// Expected output:the

let quote = "The quick brown fox jumps over the lazy dog";

function repeatedWord(str) {
  let words = str.match(/\w+/g);

  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  let max = 0;
  let mostRepeatedWord = "";

  for (let word of words) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }
  return mostRepeatedWord;
}
console.log(repeatedWord(quote));
