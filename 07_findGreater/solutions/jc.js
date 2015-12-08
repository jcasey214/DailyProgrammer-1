function findGreater(array, ref){
  var result = [];
  array.map(function(num){
    if(num > ref){
      result.push(num);
    }
  });
  return result;
}

console.log(findGreater([1,2,3,4,5,6,7,8], 5));
