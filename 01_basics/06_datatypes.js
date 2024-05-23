/*
1) Primitive Data Types -> Call By Value (when copied its not reference, 
that means if we change the value of other, original will not be changed)
7 Types -
    1. String
    2. Number
    3. Boolean
    4. Null (empty)
    5. Undefined (variable declared and memory allocated but value not given)
    6. Symbol (making any value unique)
    7. BigInt

2) Non Primitive (Reference) Data Type -> Call By Reference
    1. Array
    2. Objects
    3. Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)   => false
// console.log(id === anotherId)  => false

//Array
const heroes = ["Ironman", "Spiderman", "Batman"];

//Object => Key-value pair
let myObj = {
    name: "Utkarsh",
    age: 22 
}

//Function
const myFunction = function(){
    console.log("Hello Utkarsh")
}

// myFunction() => Output - Hello Utkarsh


const bigNumber = 697970700970970n
// console.log(typeof bigNumber)    => bigint (datatype)