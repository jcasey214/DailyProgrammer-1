function parensChecker(str){
    var arr = str.split('');
    console.log(arr);
    if(arr[0] === ')'){
        return false;
    }else{
        
    }
}

console.log(parensChecker("()(((())))")); //=> true

console.log(parensChecker("())))(")); //=> false

console.log(parensChecker(")(")); //=> false
