#!javascript
# min-max
exports.findMinMax = function(arr) {
  
  
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  function getMinOfArray(numArray) {
     return Math.min.apply(null, numArray);
  }
  var min = getMinOfArray(arr);
  var max = getMaxOfArray(arr);
  var result = 0;
  if(min === max){
    result = [max];
  }
  else{
    result = [min,max];
  }
  return result;
}

/*var a = findMinMax([4, 4, 4, 4]);
console.log(a)*/