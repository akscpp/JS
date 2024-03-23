console.log("2" > 1);
console.log("02" > 1);

//Compare two same datatypes


// avoid these comparisons #clean code
console.log(null > 0);
console.log(null == 0);
console.log(null >=0);

//The reason is that an equality check == and comparison > < >= <= work differently. Comparisons convert null to a number ,
// treating it as 0;
console.log(undefined == 0)
console.log(undefined>0)
console.log(undefined>=0);

// strict check => === (check values and datatypes)

console.log("2" == 2); //true as conversion happens
console.log("2" === 2);//false as datatype is different (conversion does not happen)
