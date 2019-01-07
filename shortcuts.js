require('es6-promise');

/*
var promise = new Promise(function (fulfill, reject) {
      fulfill('SECRET VALUE');
    });
    

  // Introducing: Promise.resolve
  // It does the exact same thing as above:

var promise = Promise.resolve('Promise Is Resolved.!')
*/

 // Likewise...

 var promise = new Promise(function (fulfill, reject) {
      reject(new Error('Promise Is Resolved.!'));
    });


 // Introducing: Promise.reject
  // It does the exact same thing as above:


var promise = Promise.reject(new Error('Promise Is Resolved.!'));


  

promise.catch(function(err){
	 console.error('THERE IS AN ERROR!!!');
      console.error(err.message);
});