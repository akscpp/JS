//There are 2 ways to declare objects ->  1) Like Literal 2) Like Constructor

//singleton ->  If we make object by constructor , then it is singleton

//object literals
// Object.create   //constructor method of creating object -> singleton

const mySym = Symbol("key1") //declaration of symbol


const JsUser={
    name:"Akshit",
    age:22,
    location:"rnc",
    email:"test@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["monday","saturday"],
    [mySym]:"myKey1" 
}


//Good method but not the best
// console.log(JsUser.name)
// console.log(JsUser.age)

//Best method
// console.log(JsUser["name"])
// console.log(JsUser["email"])

// console.log(typeof JsUser.mySym)  

// in object , use [mySym] : "myKey1"
//Use square bracket -> JsUser[mySym]
// console.log (JsUser[mySym])   //now , it is being used as symbol

//changing values

JsUser.email="akshit.123@gmail.com"

//Now ,if we want that values can't be changed in object -> use freeze

// Object.freeze(JsUser)

// JsUser.email="ayush@gmail.com"
// console.log(JsUser)


// F U N C T I O N

JsUser.greeting = function(){
    console.log("Hello JsUser")
}


JsUser.greetingTwo = function(){
    console.log(`Hello JsUser , ${this.name}`)
}

console.log(JsUser.greeting()) //Funtion 
console.log(JsUser.greetingTwo()) 

