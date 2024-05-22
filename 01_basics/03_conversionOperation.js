let score = "33" 

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))

/*
"33" => 33
"33abc" => NaN(not a number)
true => 1 & false => 0 
*/

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)


/*
1 => ture & 0 => false
"" (empty string) => false
"abc" or " " (not empty) => true
*/

let someNumber = 44
let stringOfNumber = String(someNumber)
console.log(typeof stringOfNumber)