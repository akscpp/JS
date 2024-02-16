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
//     console.log(this.username)    "this" won't work in functions
// }
// chai()