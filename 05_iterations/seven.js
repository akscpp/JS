const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNUms = myNums.map((num)=>num+10)

// console.log(newNUms);

// const newN=myNums.forEach((nums)=>{
//     console.log(nums+10);
// })
// console.log(newN); undefined

//CHAINING

const newNums = myNums
                    .map( (nums)=> nums*10)
                    .map((num)=> num+1)
                    .filter((num)=>num>=40)

console.log(newNums)