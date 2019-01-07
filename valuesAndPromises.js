require('es6-promise');


function attachTitle(firstargument){
	return 'DR. ' + firstargument;
}

var promise = new Promise(function(fulfill,reject){
		fulfill('MANHATTAN');
});




promise.then(attachTitle).then(console.log);

// alternate solution

// promise.then(function(result){
// 	return attachTitle(result);;
// }).then(console.log);