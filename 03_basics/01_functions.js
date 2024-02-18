

function sayMyName(){
    console.log("A")
    console.log("K")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("T")
}

// sayMyName  //Reference of function
// sayMyName()  //Execute function (function call)

// sayMyName()

// function addTwoNums(num1 , num2){
//     console.log(typeof (num1 + num2))
// }
// addTwoNums("3",5)

// console.log( ("1" + 2) )   //string-> 12
// console.log( (1 + "2"))   // number ->12
// console.log(("1" + 2 + 2) )  //string-> 122
// console.log((1 + 2 + "2")); 

function addTwoNums(num1 , num2){
    return num1 +num2
        
}

const result = addTwoNums(3,5)
// console.log(result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aks"))



//Situation-> Shopping cart -> user keeps adding items. We dont know the count of items user will add. If just have to calc.
// amount 

// function calculateCartPrice(...num1){   //Rest opeartor
//     return num1
// }

// console.log(calculateCartPrice(100,200,300))

function calculateCartPrice(val1,val2,...num1){   //Rest opeartor
        return num1
}
    
// console.log(calculateCartPrice(100,200,300,400))



//Passing object in functions
const user = {
    username : "akshit",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}
// handleObject(user)
handleObject({username : "akshit",price:199})

const myNewArray = [200,400,600,1000]

function returnSecondVal(getArray){
    return getArray[1]
}

console.log(returnSecondVal(myNewArray))