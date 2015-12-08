function longestString(arr){
  var res = arr.map(function(str){
    return str.length;
  });
  var maxLength = Math.max.apply(null, res);
  var indexOfLongest = res.indexOf(maxLength);
  var longestWord = arr[indexOfLongest];
  var result = {};
  result[longestWord] = maxLength;
  return result;

}
console.log(longestString(['truck', 'sidewalk', 'book', 'jonathan']));
