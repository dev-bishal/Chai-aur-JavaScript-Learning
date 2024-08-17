const DOB = "04-07-1996"
let favouriteGame = "Cricket"
var age = 28
state = "West Bengal"   //Not recommended way of Assigning
let bankBalance;        // if no value is assigned, variable is undefined


// DOB = "4-7-1996" -   This gives error, because Constant variable cannot be changed.
favouriteGame = "Rubiks"
age = "29"
state = "Mumbai"

/* 
    Why not use var? - Because Earlier JavaScript had issues in Block and Functional Scope
*/

console.table([DOB, favouriteGame, age, state, bankBalance]);
