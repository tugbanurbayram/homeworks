const { getRandomNumber } = require('../utils/MathHelper.js');

//  1  Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).

for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}

// 2  Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).

for(let i = 0; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0) console.log(i)
}

// 3  Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).

for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i)
}

// 4 ----- Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).

for(let i = 0; i <= 7; i++){
    console.log(`The square of ${i} is ${i * i}`)
}

// 5 ---- Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
// Calculation => 1+2+3+4+5+6+7+8+9+10

let sum = 0;
for(let i = 0; i <= 10; i++){
    sum += i;
}
console.log(sum);

//6 ---- Write a program generates a random number between 1 and 10 (both inclusive).
//And find the factorial of the number.
let random = getRandomNumber(1, 10);
console.log(random);

let factorial = 1;
for(let i = 1; i <= random; i++){
    factorial *= i;

}
console.log(`${random}! = ${factorial}`);

// 7 ---- Write a program generates a random number between 1 and 100 (both inclusive).
//Keep generating a new number till you get a number that is divisible by 5.
//The program should also count how many attempts it takes to generate such a number.
//Eventually, print the random number divisible by 5 with the number of attempts as below.


let att = 0;
let ran;

do {
  ran = getRandomNumber(1, 100);
  att++;
} while(ran % 5 !== 0);

console.log(`We got a number divisible by 5 after ${att} attempts! The number is ${ran}.`);


// 8 ---- Create an array that stores countries below. 
// Germany, Argentina, Ukraine, Romania
// Output the entire array
// Ouput the entire array sorted lexicographically

let array = ['Germany', 'Argentina', 'Ukraine', 'Romania'];
let array1 = [];

for( let i = 0; i < array.length; i++){
    array1.push(array[i]);
}
console.log(array1);
console.log(array);


// 9 
/* Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true */

let ar1 = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(ar1.includes('Pluto'));
console.log(ar1);



// 10 
/* Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

let arr1 = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(arr1);
if(arr1.includes('Garfield') && arr1.includes('Felix')) console.log(true);
else console.log(false);


// 11 
/*
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element

Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75  
*/

let arrayy = [10.5, 20.75, 70, 80, 15.75];
console.log(arrayy);

for ( element of arrayy){
    console.log(element);
}

// 12
/*
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.
Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/

let material = ['Pen', 'notebook', 'book', 'paper', 'bag', 'pencil', 'Ruler'];
count = 0;
count2 = 0;

for (elements of material){
    if(elements.toLowerCase().startsWith('b') || elements.toLowerCase().startsWith('p') ){
        count++;
    }
}
console.log(material);
console.log(`Elements starting with 'b' or 'p' = ${count}`);

for (elements of material){
if (elements.toLowerCase().includes('book') || elements.toLowerCase().includes('pen')) {
    count2++;
    }   
}
console.log(`Elements having book or pen = ${count2}`);


// 13----
/* 
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
 */

let number = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
console.log(number);
count = 0;
count2 = 0;
count3 = 0;

for (elements of number){
    if (elements > 10){
        count++;
    }
    else if (elements < 10){
        count2++
    }
    else if(elements = 10){
        count3++;
    }
}
console.log(`Elements that are more than 10 = ${count}`);
console.log(`Elements that are less than 10 = ${count2}`);
console.log(`Elements that are 10 = ${count3}`);


// 14 
/* 
    -Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/ 

let a = [5, 8, 13, 1, 2 ];
let b = [9, 3, 67, 1, 0 ];
console.log(a,b);
let greates;

let c = [];

for (i = 0; i < a.length; i++){
    greates = Math.max(a[i], b[i]);
    c.push(greates);
}
console.log(c);

// 15 
/*

*/
