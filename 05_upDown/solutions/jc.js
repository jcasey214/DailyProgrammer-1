function upDown(arr){
  var result = [];
  for(var i = 1; i < arr.length; i += 1){
    if(arr[i] > arr[i - 1]){
      result.push('up');
    }
    else if(arr[i] < arr[i - 1]){
      result.push('down');
    }
    else {
      result.push('even');
    }
  }
  return result;
}
upDown([6,3,5,4,3,4,4,5]);
