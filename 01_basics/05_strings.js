const name = 'Akshit'
const repoCount = 38

console.log(name + repoCount + " Value")//Not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)//recommended

const gameName = new String('Akshit-AK')

// console.log(typeof gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('A'));
// console.log(gameName);

// const newString = gameName.substring(0,4);
// console.log(newString);
const anotherString = gameName.slice(-7,5);

console.log(anotherString);

const newSTringOne = "       aks-akshit-raj";
console.log(newSTringOne);
console.log(newSTringOne.trim());

const url = "https://akshit.com/akshit%20raj"

console.log(url.replace('%20','-'));

console.log(url.includes('akshit'));

console.log(newSTringOne.split('-'))