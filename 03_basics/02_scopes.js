// var c = 300

let a = 300
if(true){
    let a = 10
    const b = 20
    
}
// console.log(a)
// console.log(b)
// console.log(a)

//NESTED SCOPE , CLOSURES 

function one(){
    const username = "Akshit"

    function two(){
        const website = "linkedin"
        console.log(username)
    }
    // console.log(website)
    // two()
}

// one()

if(true){
    const username = "Akshit"
    if(username=="Akshit"){
        const website = " raj"
        // console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

//+++++++++++++++++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++++++++++++

// addone(5)   //NO error

function addone(num){
    return num+1
}

addone(5) //NO error



// Hoisting in JS

// addTwo(5)    Error
const addTwo = function(num){               //addTwo -> expression 
    return num+2
}


addTwo(5)  //No error