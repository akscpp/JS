// Immediately Invoked Function Expression ( I I F E)



// WHY ? ->
//Gloabl Scope se pollution hume nahi chahiye  // Immediately execute ho jaye

// function chai(){
//     console.log(`DB Connected`)
// }
// chai()


// () ()
// (Function definition)(Function CAll)
(function chai(){ //named iife
    console.log(`DB Connected`)
})(); /// WIll give error if we dont use ; 
(function aurcode(){
    console.log(`DB Connected Two`)
})();

//IMPORTANT -> After iife , use ; . Reason -> IIFE started but it does not know where to stop the context . So use ;


//Arrow FUnction
(()=> console.log(`DB Connected Two`))();//unnamed iife

//Arrow function with parameters
((name)=> console.log(`DB Connected Two ${name}`))("Akshit"); //unnamed iife
