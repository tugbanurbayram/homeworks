// 1
function calculateTotalPrice1(items) {
    const prices = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    };
    
    let total = 0; 
     
    for (let item in items) {
        total += (prices[item] || 0) * items[item];
    }
    return total
}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); 
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); 
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); 
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })); 


/*
other way
*/

function calculateTotalPrice1(items) {
    const prices = {
        apple : 2.00,
        orange : 3.29,
        mango: 4.99,
        pineapple: 5.25
    };
    return Object.entries(items).reduce((total, [item, quantity]) => total + (prices[item] || 0) * quantity, 0);
}
console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); 
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); 
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); 
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }));


//2 

function calculateTotalPrice2(items) {
    const prices = { 
        Apple : 2.00,
        Orange : 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    };
    let total = 0;

    for (let item in items ){
        let quantity = items[item];

        if (item === 'Apple') {
            const discountedApples = Math.floor(quantity / 2);
            total += (quantity * prices[item]) - (discountedApples * prices[item] * 0.5);
        }else if (item === 'Mango') {
            const freeMangos = Math.floor(quantity / 4);
            const paidMangos = quantity - freeMangos;
            total += paidMangos * prices[item];
        }
        else {
            total += quantity * prices[item];
        }
    }
    return total.toFixed(2);
} 
console.log(calculateTotalPrice2({ Apple: 3, Mango: 5 })); 
console.log(calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })); 
console.log(calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })); 
console.log(calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango: 3 }));


// 3

const nthWord = (str, num) => {
    const arr = str.split(' ');
    let strength =arr.length;

    if (strength >= num) return arr[num - 1];
    else return '';
} 

console.log(nthWord("I like programming languages", 2)); 
console.log(nthWord("QA stands for Quality Assurance", 4)); 
console.log(nthWord("Hello World", 3));
console.log(nthWord("Javascript", 1)); 
console.log(nthWord("", 1)); 


//4

const isArmstrong = (num) => {
    const arrNum = num.toString().split('');
    const arrlength = arrNum.length;
    let total =  0;

    for (const number of arrNum){
        total += number ** arrlength;

    }
    return total === num;

}
console.log(isArmstrong(153));


//5 

function reverseNumber(num) {
    let reversed = 0; 

    if (num === 0) return 0;

    while (num > 0) {
        const lastDigit = num % 10; 
        reversed = (reversed * 10) + lastDigit; 
        num = Math.floor(num / 10); 
    }

    return reversed; 
}


console.log(reverseNumber(371));
console.log(reverseNumber(123));  
console.log(reverseNumber(12));   
console.log(reverseNumber(0));   
console.log(reverseNumber(111));  



//6 
const doubleOrTriple = (arr, bool) => {
    if (bool) {
        return arr.map((num) => num * 2);
    }
    else return arr.map((num) => num * 3);

}

console.log(doubleOrTriple([3, 7, 2], false))


//7
const splitString = (str, num) => {
    if (str.length < num || str.length % num != 0) return '';
    else if (str.length >= num) {
        return str.slice(0, num) + ' ' + str.slice(num);
    }


}

console.log(splitString("JavaScript", 5)); 
console.log(splitString("Java", 2)); 		
console.log(splitString("Automation", 3)); 	
console.log(splitString("Hello", 6));	
console.log(splitString("12", 1));
