// variables and compiling
const bob: string = "Hey im Bob";
console.log(bob);

const a: number = 5.312;
// same as
const ab: number = 5.55;

// creating an interface for it to check for value types
interface myObj {
  x: number;
  y: number;
  // adding an optional property with ?
  z?: number;
}

const obj: myObj = {
  x: 5.32,
  y: 7
};

// these wont work
// obj.x = "123"
// obj.y = true

// to compile run tsc variables.ts
// this will compile into JS and  make a JS file in the same name

// making a type 
type AddFunc = (x: number, y: number) => number;

// functions
const add1: AddFunc = (x: number, y: number) => x + y
console.log(add1(2, 3))

// destructuring 
const add2 = (nums:  { a: number;  b: number }) => nums.a + nums.b;

// unions

let maybeNumber: number | string = 5;
maybeNumber = "Hello."

interface dog {
  bark: string
}

interface cat {
  purr: string
}

type DogCat = dog & cat;
const dogCat: DogCat = {
  bark: "bark",
  purr: "purr"
};

if (typeof dogCat === "string") {
  console.log("this is a string")
}


// casting

// any

//
