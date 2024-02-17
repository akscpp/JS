const user = {
    username:"Akshit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

//this keyword refers to current context


// user.welcomeMessage() //akshit
// user.username = "sam"   //context
// user.welcomeMessage() //sam
// console.log(this)  // {}
//NOTE -> in node environment , the above "this" refers an empty object -> kyuki abhi global ke andar context hi ni hai

// Browser ke andar jo global object hai , wo hai " WINDOW OBJECT "

// function chai(){
//     let username = "Akshit"
//     console.log(this.username)    //"this" won't work in functions
// }
// chai()

//function declaration using arrow 

// const chai = function() {
//         let username = "Akshit"
//         console.log(this.username)    
//     }
//     chai()

const chai = () => {
    let username = "Akshit"
    console.log(this.username)    //undefined
    console.log(this) //{} 
}
// chai()





//The below arrow function is explicitly declared i.e., we have to use return 
// const addTwo = (num1 , num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(3,4))

//In arrow function , in implicit declaration , we dont use parenthesis

// const addTwo = (num1 , num2)=>num1+num2;

//If the above implicit declaration is confusing , new method->
// const addTwo = (num1 , num2)=> (num1+num2); //When we use {} , then use return , when we use () ,  dont use return 


// console.log(addTwo(3,4))


//But we we want to return an object from an arrow function , we have to use {}  ,but what if i dont want to use return?

const addTwo = (num1 , num2)=> ({username:"akshit"})
