// Primitive -> (Call by value)
// 7
// String, Number, Boolean, null, undefined, Symbol, BigInt

// JJavaScript is a dynamically typed language, which means that data types of variables are determined by the value
//  they hold at runtime and can change throughout the program as we assign different values to them.

const score = 100
const scoreVal = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;//undefined

// declaring symbols
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id==anotherId); //false

const bigNumber = 77869927726883863739n //(for BigInt)

// Reference Type (Non-Primitive)
// Array, Objects, Functions                //typedef(NonPrimitive)-> Function
// Function , Function , Funtion Object

const heroes = ['shaktiman','nagraj','doga']//array

let myObj={                 //object
    name:"Akshit",
    age:22,
}

// console.log(myObj.name);

const myFunction = function(){
    console.log("Hello World");
}


// console.log(typeof myFunction);

// -------------------------------------------Memory-----------------------------------------------

// Stack (Primitive) , Heap (Non-Primitive)

let myName = "Akshit"

let anotherName = myName
anotherName = "Raj"

// console.log(anotherName);
// console.log(myName);

let userOne={
    email:"akshit28.aayush@gmai.com",
    upi:"abc@ybl"
}

let userTwo = userOne
userTwo.email = "Akshit.aayush@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);