// console.log("2" > 1)     => true
// console.log("002" > 1)   => true

// console.log(null > 0)    => false
// console.log(null == 0)   => false
// console.log(null >= 0)   => true

/*
Reason => an equality check == and comparisons >, <, >= and <= work differently
Comparisons convert null to a number, treating it as 0
That's why null >= 0 => true and null > 0 => false  
*/

// console.log("2" ==2)     => true
// console.log("2" ===2)    => false (also check datatype)
