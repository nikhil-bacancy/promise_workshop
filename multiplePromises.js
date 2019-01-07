 'use strict';



function onRejected(error) {
      console.log(error.message);
 };

function onFulfilled(resolved){
  console.log(resolved);  
};


function all(p1,p2) {

	return new Promise( function (fulfill,reject){
		
		var counter = 0;
		var arr = [];

	    p1.then(function (val) {
	      arr[0] = val;
	      counter++;

	      if (counter >= 2) {
	        fulfill(arr);
	      }
	    });

	    p2.then(function (val) {
	      arr[1] = val;
	      counter++;

	      if (counter >= 2) {
	        fulfill(arr);
	      }
	    });

	});

}


all(getPromise1(), getPromise2())
      .then(onFulfilled, onRejected);
