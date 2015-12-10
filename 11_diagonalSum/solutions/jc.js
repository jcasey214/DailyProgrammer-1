function diagonalSum(array){
    var count = array.length;
    var total = 0;
    //console.log(count);
    for(var i =0; i < array.length; i += 1){
        total += array[i][i];
    }
    return total;
}

console.log(diagonalSum([[1, 0, 0, 0],
                         [0, 1, 0, 0],
                         [0, 0, 1, 0],
                         [0, 0, 0, 1]]));

console.log(diagonalSum([[2, 5, 1, 3, 9],
                         [4, 1, 3, 0, 8],
                         [1, 0, 9, 7, 6],
                         [1, 7, 7, 3, 0],
                         [3, 3, 8, 2, 4]]));
