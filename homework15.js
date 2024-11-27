function toCamelCase(str) {

   str = str.trim();
  let arr = str.split(' ');

return arr.map((element,index) => 
  index  === 0
 ? element.toLowerCase()
 : element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() ).join('')
 
}

console.log(toCamelCase('   first    name'))


function toSnakeCase(str) {
  str = str.toLowerCase().trim()
  let arr = str.split(' ')
  
  return arr.map((element,index) => 
    index === 0
  ? element.toLowerCase() 
  : '_' + element.toLowerCase()
).join('')
}

console.log(toSnakeCase(  'i love Java Script'))

function alternatingCase(str) {
  str = str.toLowerCase().trim()
  let arr = str.split('')

return arr.map((element, index) => (element <= 'z' && element >= 'a') && index % 2 === 0
? element.toUpperCase()
: element.toLowerCase() 
).join('')
}

console.log(alternatingCase('123%$^bAS'))


   
function isNeutral(str1, str2) {
 
  return str1.split('').map((char1, index) => {
    const char2 = str2[index]; 
    
    if (char1 === char2) {
      return char1; 
    } else {
      return '0'; 
    }
  }).join(''); 
}

console.log(isNeutral("-", "+"))
