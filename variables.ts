// variables and compiling
const bob = "Hey im Bob";
console.log(bob);

const a = 5.312
// same as 
const ab: number = 5.55

// creating an interface for it to check for value types
interface myObj {
    x: number,
    y: number,
    // adding an optional property with ?
    z?: number
}

const obj: myObj = {
    x: 5.32,
    y: 7
}

// these wont work
// obj.x = "123"
// obj.y = true

// to compile run tsc variables.ts
// this will compile into JS and  make a JS file in the same name




// functions 

// unions

// casting 

// any

//