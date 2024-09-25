// Task 1 

/*
Write a function named hasLowerCase() which takes a string argument and returns true
 if there is a lowercase letter and false if it there isn’t. 
*/


function hasLowerCase(str) {
   let arr = str.split('').filter(character => character >= 'a' && character <= 'z') 
   return arr.length > 0 ? true : false;  
}

console.log(hasLowerCase("")); 		
console.log(hasLowerCase("JAVASCRIPT"));
console.log(hasLowerCase("hello"));	
console.log(hasLowerCase("125$"));
console.log(hasLowerCase("   a   "));



// TASK 02 
/*
Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.
noZero([1]) 		-> [1]
noZero( [1, 1, 10]​) 	-> [1, 1, 10]​
noZero([0, 1, 10]) 	-> [1, 10]
noZero([0, 0, 0]) 	-> []
noZero([10, 100 0]) 	-> [10, 100]
*/

function noZero(array){
    return array.filter(number => number != 0)   
}

console.log(noZero([1]));
console.log(noZero( [1, 1, 10] ) );
console.log(noZero([0, 1, 10]));
console.log(noZero([0, 0, 0]));
console.log(noZero([10, 100, 0]));


// TASK 03 
/*
Write a function named numberAndSquare() which takes an array of numbers as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3]) 	-> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4]) 	-> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0]) 	-> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]
*/

function numberAndSquare(array) {
    return array.map(number =>[ number, number ** 2]);
}

console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));


// TASK 04
/*
Write a function named containsValue() which takes a string array and a string as arguments and returns a boolean value.
Search the string variable inside of the array and return true if it exists in the array. If it doesn’t exist, return false. ​
NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello") 			-> false
containsValue(["abc", "def", "123"], "Abc") 			-> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true
*/

function containsValue(array , string) {
    return array.includes(string);
}

console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123"], "Abc"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));

// TASK 05 
/*
Write a function named reverseSentence() which takes a string as argument and returns the words in reverse order.​ 
If there is no enough words reverse, return "There is not enough words!".
Examples:
reverseSentence("Hello") 		-> "There is not enough words!"
reverseSentence("Javascript is fun") 		-> "Fun is javascript"
reverseSentence("This is a sentence") 	-> "Sentence a is this"
*/

function reverseSentence(string) {
    let arr = string.split(' ').reverse();
    if(arr.length < 2) console.log('There is not enough words!');
    return arr.join(' ');
}

console.log(reverseSentence("Hello"));
console.log(reverseSentence("Javascript is fun"));
console.log(reverseSentence("This is a sentence"));


// TASK 06
/*
Write a function named removeStringSpecialsDigits() which takes a string as argument and 
return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") 		-> "Cypress"
removeStringSpecialsDigits("Automation123#$%") 	-> "Automation"
*/

function removeStringSpecialsDigits(string) {
    let a = string.toLowerCase().split('').filter(abc => abc >= 'a' && string <= 'z');
    return a.join('');

}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));


// TASK 07
/*
Write a function named removeArraySpecialsDigits() which takes a string array as argument and return back without 
the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) 	-> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"]) 	-> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"]) 	-> ["Automation", "tool"]
*/

function removeArraySpecialsDigits(array) {
 return array.map(element =>  element.split('').filter(char =>  char.toLowerCase() <= 'z' && char.toLowerCase() >= 'a').join(''))
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"]));
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"]));


// TASK 08
/*
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	-> ["C#"]
*/

function getCommons(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){

        for(let j = 0; j < arr2.length; j ++){


            if(arr1[i] === arr2[j]) return arr1[i]
        }


    }

    return []


}

console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) );
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ));
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ));


// TASK 09
/*
Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
Examples:
noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) 		-> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]
*/

function noXInVariables(array) {
    return array.filter(item => {
        if (typeof item === 'string') {
            let filteredStr = item.split('').filter(char => char.toLowerCase() !== 'x').join('');
                return filteredStr !== '';
            }
            return true; 
        })
        .map(item => {
            if (typeof item === 'string') {
                return item.split('').filter(char => char.toLowerCase() !== 'x').join('');
            }
            return item; 
        });
}

console.log(noXInVariables(["abc", 123, "#$%"])); 
console.log(noXInVariables(["xyz", 123, "#$%"])); 
console.log(noXInVariables(["x", 123, "#$%"])); 
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])); 
