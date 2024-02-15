const marvel = ["spiderman","IronMan","thor"]
const dc = ["superman","flash","batman"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])

// const newArr=marvel.concat(dc)
// console.log(newArr)

// Alternative of above-> spread operator
const all_new = [...marvel, ...dc]
// console.log(all_new)

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherArr = anotherArr.flat(Infinity)
// console.log(real_anotherArr)


console.log(Array.isArray("Akshit")) //false
console.log(Array.from("Akshit")) //converts in array
console.log(Array.from({name:"akshit"})) //gives empty array -> we have to tell if i want to make keys as array or values as array

//                              I N T E R E S T I N G      C A S E      A B O V E


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
