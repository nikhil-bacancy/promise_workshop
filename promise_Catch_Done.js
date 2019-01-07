 'use strict';



function alwaysThrows() {
	throw new Error("OH NOES");
}

function iterate(num) {
	console.log(num);
	return num + 1 ;
}


var promise = Promise.resolve(iterate)

promise.then(function(){
	for (var i = 1; i < 10 ; i++) {

		if (i > 5) {
			alwaysThrows();	
		}
		iterate(i);	
	
	}
}).then(null,function(err){
	 
      console.log(err.message);
});



// alternate solution
    
    // function onReject(error) {
    //   console.log(error.message);
    // }
    
    // Promise.resolve(iterate(1))
    // .then(iterate)
    // .then(iterate)
    // .then(iterate)
    // .then(iterate)
    // .then(alwaysThrows)
    // .then(iterate)
    // .then(iterate)
    // .then(iterate)
    // .then(iterate)
    // .then(iterate)
    // .catch(onReject);
