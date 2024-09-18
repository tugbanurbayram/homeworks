console.log('\n------------------------TASK01------------------------/n');
/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

const hasUpperCase = (str) => [...str].some((letter) => letter >= 'A' && letter <= 'Z');

console.log(hasUpperCase('1234'));
console.log(hasUpperCase("javascript"));
console.log(hasUpperCase("John"));
console.log(hasUpperCase("$125.0"));
console.log(hasUpperCase(""));  

console.log('\n------------------------TASK02------------------------/n');
/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World"
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

const noDigit = (str) => [...str].filter((char) => !(char >= 0 && char <= 9)).join('');

console.log(noDigit("Javascript"));
console.log(noDigit("123Hello"));
console.log(noDigit("123Hello World149"));
console.log(noDigit("123Tech456Global149"));

console.log('\n------------------------TASK03------------------------/n');

/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

const noVowel = (str) => [...str].filter((char) => !('aeiouAEIOU'.includes(char))).join('');

console.log(noVowel("TechGlobal"));
console.log(noVowel("125$"));

console.log('\n------------------------TASK04------------------------/n');
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument 
and return a new array with all 13s replaced with 0s.  
Examples:
no13([1, 2, 3 ,4])  -> [1, 2, 3 ,4] 
no13([13, 2, 3])  -> [0, 2, 3]
no13([13, 13, 13 , 13, 13])  -> [0, 0, 0, 0, 0]
no13([])  -> []
*/

const no13 = (arr) => arr.map((num) => num === 13 ? 0 : num);

console.log(no13([1, 2, 3 ,4]));
console.log(no13([13, 2, 3]));
console.log(no13([13, 13, 13 , 13, 13]));
console.log(no13([]));

console.log('\n------------------------TASK05------------------------/n');

/*
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/

const middleInt = (num1, num2, num3) => [num1, num2, num3].sort((a, b) => a - b)[1];

console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 3, 5));
console.log(middleInt(-1, 25, 10));
console.log(middleInt(1, 1, 1));

console.log('\n------------------------TASK06------------------------/n');
/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John's age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

const sumOfDigits = (str) => [...str].reduce((acc, curr) => curr >= 0 && curr <= 9 ? Number(curr) + acc : acc, 0);

console.log(sumOfDigits("John's age is 29"));

console.log('\n------------------------TASK07------------------------/n');
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
*/


const arrFactorial = (arr) => arr.map((num) => {
    let total = 1;
    for(i = num; i > 1; i--) {
    total *= i
    }
    return total;
});

console.log(arrFactorial([1, 0, 6]));

console.log('\n------------------------TASK08------------------------/n');
/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
*/

const categorizeCharacters = (str) => {
    let letter = [];
    let digit = [];
    let specialChar = [];

   str.split('').forEach((char) => {

    if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        letter.push(char);
        }
    else if(char >= 0 && char <= 9) {
        digit.push(char);
        }
    else specialChar.push(char);

    });
   
    return[letter.join(''), digit.join(''), specialChar.join('')];
    
}


 console.log(categorizeCharacters("12ab$%3c%"));
