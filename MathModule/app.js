var math = require('./library/mathlib.js');
 
 
operation = new math();

console.log("Addition = ",operation.add(9,5));

console.log("Mutl = ",operation.multiply(9,5));

console.log("square = ",operation.square(9));
a = 10
b = 30
console.log("Random between "+ a +" , "+b+" = ",operation.random(a,b));
