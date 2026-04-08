const problems = [
  {
    id: 1,
    title: "Sum of Two Numbers",
    description: "Return the sum of two numbers.",
    starterCode: "function sum(a, b) {\n return a + b;\n}\n\nsum(2, 3);",
  },
  {
    id: 2,
    title: "Reverse String",
    description: "Reverse a given string.",
    starterCode: "function reverse(str) {\n return str.split('').reverse().join('');\n}\n\nreverse('hello');",
  },
  {
    id: 3,
    title: "Check Even or Odd",
    description: "Check whether a number is even or odd.",
    starterCode: "function check(num) {\n return num % 2 === 0 ? 'Even' : 'Odd';\n}\n\ncheck(7);",
  },
  {
    id: 4,
    title: "Find Maximum",
    description: "Find the largest number in an array.",
    starterCode: "function findMax(arr) {\n return Math.max(...arr);\n}\n\nfindMax([2, 5, 1, 9, 3]);",
  },
  {
    id: 5,
    title: "Factorial",
    description: "Find factorial of a number.",
    starterCode: "function factorial(n) {\n let result = 1;\n for(let i = 1; i <= n; i++) {\n  result *= i;\n }\n return result;\n}\n\nfactorial(5);",
  },
  {
    id: 6,
    title: "Palindrome Check",
    description: "Check if a string is a palindrome.",
    starterCode: "function isPalindrome(str) {\n return str === str.split('').reverse().join('');\n}\n\nisPalindrome('madam');",
  },
  {
    id: 7,
    title: "Count Vowels",
    description: "Count number of vowels in a string.",
    starterCode: "function countVowels(str) {\n return str.match(/[aeiou]/gi)?.length || 0;\n}\n\ncountVowels('hello world');",
  },
  {
    id: 8,
    title: "Sum of Array",
    description: "Find sum of all elements in array.",
    starterCode: "function sumArray(arr) {\n return arr.reduce((a, b) => a + b, 0);\n}\n\nsumArray([1,2,3,4]);",
  }
];

export default problems;