var mylib = require('/Users/Joanna/nodes/exercise1/library/mylib.js');

//Accessing methods from module
console.log("starting app.js");
console.log("sum is " + mylib.sum(4,5));
simi = new mylib.Person("simi tresa antony");
console.log("name is "+simi.name);
console.log("introduce " + simi.introduce()); 
console.log(simi);

//Passing object to the module

var app = 5;
var mylib = require('/Users/Joanna/nodes/exercise1/library/mylib.js')(app);