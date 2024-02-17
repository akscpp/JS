const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Swift",
    swift : "Swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} shortcut for ${myObject[key]}`);
}


const programming  = ["js" , "cpp" , "rb" , "py" , "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}
const map = new Map()
map.set('IN',"INdia")
map.set("USA", "United States of America")
map.set("Fr","France")

for (const key in map) {
    // console.log(key);               //map not iteratable
}

