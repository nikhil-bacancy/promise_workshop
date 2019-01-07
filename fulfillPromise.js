require('es6-promise');


 'use strict';
    
    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
      setTimeout(function(){
      	fulfill('FULFILLED!')
      },300);

      // setTimeout(function(){
      // 	reject('REJECTED!')
      // },300);

    });



promise.then(function(valFulfill){
	console.log(valFulfill);
},function(valReject){
	console.log(valReject);
});