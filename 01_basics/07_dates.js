//Date
let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

let myCreatedDate = new Date(2024,0,23)
// console.log(myCreatedDate.toLocaleDateString())

let myCreatedDate1 = new Date("02-15-2024")
// console.log(myCreatedDate1.toLocaleDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate1.getTime())

// console.log(Math.floor(Date.now()/1000)) //convert milliseconds to seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())//starts from 0 , add 1 to avoid confusion to user

newDate.toLocaleString('default',{
    weekday:"long"
})