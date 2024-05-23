/*
Stack (primitive) => copied value, Heap (non-primitive) => referenced value
*/


// Heap Storage
let userOne = {
    name: "Utkarsh",
    email: "utkarsh@google.com"
}

let userTwo = userOne   //userTwo gets the reference of userOne (NOT a copied value)
userTwo.name = "Tushar" //since referenced value thus change the original value also

console.log(userOne.name)