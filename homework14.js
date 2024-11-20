//1

function repeatingX(str) {
    str = str.toLowerCase(); 
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === 'x' && str[i + 1] === 'x') {
            return true;
        }
    }
    return false;
}


console.log(repeatingX("xTechxGlobalx"));  // false
console.log(repeatingX("Hello Xx World")); // true
console.log(repeatingX("x x"));            // false
console.log(repeatingX(""));               // false
console.log(repeatingX("xxxxx"));          // true


//2
function isPerfectSquare(num) {
    if (num < 0) return false; 
    const sqrt = Math.sqrt(num); 
    return Number.isInteger(sqrt); 
}


console.log(isPerfectSquare(25));  
console.log(isPerfectSquare(24));  
console.log(isPerfectSquare(0));   
console.log(isPerfectSquare(1));   
console.log(isPerfectSquare(-1));  
console.log(isPerfectSquare(144)); 

//3
function convertTemperature(temp, unit) {
    return unit === 'Celsius' 
        ? (temp * 9 / 5) + 32 
        : unit === 'Fahrenheit' 
        ? (temp - 32) * 5 / 9 
        : null; 
}


console.log(convertTemperature(100, 'Celsius')); 
console.log(convertTemperature(32, 'Fahrenheit')); 
console.log(convertTemperature(0, 'Celsius')); 
console.log(convertTemperature(212, 'Fahrenheit')); 
console.log(convertTemperature(-40, 'Celsius')); 

//4

function sumOfEvenNumbers(arr) {
    return arr.reduce((sum, num) => sum + (num % 2 === 0 ? num : 0), 0);
}


console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])); 
console.log(sumOfEvenNumbers([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])); 
console.log(sumOfEvenNumbers([])); 
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5])); 
console.log(sumOfEvenNumbers([10, 20, 30, 40, 50])); 

//5

function capsOdds(arr) {
    return arr.map((element, index) => index % 2 === 1 ? element.toUpperCase() : element);
}


console.log(capsOdds(["Hello", "World"])); 
console.log(capsOdds(["Jan", "Feb", "Mar", "Apr"])); 
console.log(capsOdds(["Apple", "Banana", "123", "456", "Peach", "Kiwi"])); 
console.log(capsOdds([])); 
console.log(capsOdds(["John !@#$%", "^&*() Doe"])); 

