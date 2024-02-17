const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// 1) coding.forEach( function name() {}  )

//callback , so remove function's name

// coding.forEach( function (item) {

// }  )



// coding.forEach(function (i){
//     console.log(i);
// })

// using arror function

// coding.forEach( (item)=>{
//     console.log(i);
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)


// coding.forEach( (item , index ,  arr)=> {
//     console.log(item,index,arr);
// } )



const myCoding = [
    {
        langName: "Javascript",
        lanFile : "js"
    },
    {
        langName: "JAva",
        lanFile : "Java"
    },
    {
        langName: "Python",
        lanFile : "py"
    },
]

myCoding.forEach(  (item)=> {
    console.log(item.langName);
}  )