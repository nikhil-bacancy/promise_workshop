require('es6-promise');

 // 'use strict';

var promise = new Promise(function(fulfill, reject){
		fulfill('I FIRED');
		reject(new Error('I DID NOT FIRE'));
});


function onRejected(error){
	console.log(error.message);
};

function onFulfilled(resolved){
	console.log(resolved);	
};


promise.then(onFulfilled,onRejected);