const myArr = [0,1,2,3,4,5]
// console.log(myArr[0])

//We copy operation is performed on arrays in JS , it makes shallow copy. 
// (shallow copy -> reference to same element , not copy is made)

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[2])

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()  //converts  array elements to string

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join(''));
// // Expected output: "Fire-Air-Water"




// console.log(myArr)
// console.log(newArr)

//slice , splice
console.log("A ", myArr)
// A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log(myn1)
// [ 1, 2 ]

console.log("B ", myArr)
// B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)

//Many people tell in interviews that the main diff. b/w slice and splice is that slice doesnot include last value as index 
//but splice includes last value as index.         T H I S   I S   W R O N G

console.log("C ", myArr)

console.log(myn2)
// [ 1, 2, 3 ]



//Slice DOES NOT manipulates with original array
//Splice manipulates with original array 