// variables and compiling
var bob = "Hey im Bob";
console.log(bob);
var a = 5.312;
// same as
var ab = 5.55;
var obj = {
    x: 5.32,
    y: 7
};
// functions
var add1 = function (x, y) { return x + y; };
console.log(add1(2, 3));
// destructuring 
var add2 = function (nums) { return nums.a + nums.b; };
// unions
var maybeNumber = 5;
maybeNumber = "Hello.";
var dogCat = {
    bark: "bark",
    purr: "purr"
};
if (typeof dogCat === "string") {
    console.log("this is a string");
}
// casting
// any
//
