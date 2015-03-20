module.exports = function(app){
	console.log(app);
}
module.exports.sum = function(a,b) { return a+b; };
module.exports.Person = function Person(name) { 
  this.name = name;
  this.introduce = function() {
    console.log('my name is', this.name);
  }
};  //here we use a self invoking constructor pattern to create an object