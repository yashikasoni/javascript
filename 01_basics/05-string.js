const name = "yashika"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${ repoCount }`);


const gameName = new String('yashika-ys-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('y'));


const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);


const newStringOne ="  yashika  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://yashika.com/yashika%02soni"

console.log(url.replace('%02', '05')) 

console.log(url.includes('yashika')) 
console.log(url.includes('yash')) 


console.log(gameName.split('-'))