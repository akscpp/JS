// const tinderUser = new Object()     //Object declaration using constructor (object singleton)
// console.log(tinderUser) 

const tinderUser ={}     //Non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"

tinderUser.isLoggedIn = false

// console.log(tinderUser)


//Object in object
const regularUser = {
    email : "akshit@abc.com",
    fullname : {
        userfullname : {
            firstname: "akshit",
            lastname: "raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

//                                  combining / merging objects
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}
const obj4 = {
    5:"a",
    6:"b"
}

// const obj3 = {obj1 , obj2}               Problem of object inside object

// const obj3 = Object.assign({},obj1,obj2,obj4)      //Object.assign(target , source(s))
// console.log(obj3)

// mdn
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true


// BEST -> USE SPREAD OPEARTOR

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

//When data is fetched from database , it comes in a form of array of objects

const users = [
    {
        id : 1,
        email: "akshit@gmail.com"
    },
    {
        id : 2,
        email: "ayush@gmail.com"
    }
]

// console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))    //keys ko liya and arrays me rakh diya , now we can iterate over it
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))