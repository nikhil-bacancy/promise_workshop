require('es6-promise');


function parsePromised(json) {
	
	 return new Promise(function(fulfill,reject){
	   try{

	     	var data = JSON.parse(json);
			fulfill(data);
		
		}catch (e) {
						
			reject(e);
	 	}
		
	});

}


function onReject(error) {
      console.log(error.message);
 };

function onFulfilled(resolved){
   console.log(resolved);  
  
};

parsePromised(process.argv[2]).then(onFulfilled,onReject);