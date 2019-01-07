require('es6-promise');


var secondPromise;

secondPromise = first().then(function (firstReturn) {
  return second(firstReturn);
});


function onFulfilled(resolved){
   console.log(resolved);  
  
};

secondPromise.then(onFulfilled);



