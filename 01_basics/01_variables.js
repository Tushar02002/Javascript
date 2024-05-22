const accountId = 144553
let accountEmail = "utm@gmail.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState

// accountId = 2 not allowed

/*
prefer not to use var
because of issue in block scope and functional scope 
*/

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId)


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

