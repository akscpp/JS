//for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello WOrld"

for(greet of greetings){
    // console.log(greet);
}


//Maps - key value pair (unique values)

const map = new Map()
map.set('IN',"INdia")
map.set("USA", "United States of America")
map.set("Fr","France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key , '-> ',value);
}

const myObject = {
    'game1':"NFS",
    'gam2':"Spiderman"
}

// for (const [key,value] of myObject) {            //GIVES ERROR -> DOESNOT WORK FOR OBJECTS
//     console.log(key , '-> ',value);
    
// }