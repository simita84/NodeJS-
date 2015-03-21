module.exports = function dojo(){
					 return 
					 {
					 	say: function(name){
					 		console.log("Hello!!"+name);
					 	}	
					 }
}

// module.exports = function() {
// 	return {
// 		say : function(name){
// 		console.log("Say hello to "+name);
// 		}
// 	}
// 	// body...
// }

// module.exports = function(){
// 	this.say = function(name){
// 		console.log("Hello to "+ name);
// 	}
//} 
 // 
 // //Stores as a variable
 // module.exports.say = function(name){
 // 	console.log("say hello to " , name);
 // }

//Immediate function #1
// -- enables you to execute a function as soon as it is defined.
 
 // module.exports = new (function(){
 // 	this.say = function(name){
 // 		console.log("say hi to " + name);
 // 	}
 // })();
// 
//Immediate function #2
// module.exports = (function Dojo(){
	//self = {};
// 	//self = {};
// 	self = this;
// 	self.say = function(name){
// 		console.log("Say hello to " + name);
// 	}
// 	return self;
// })();

​ 


