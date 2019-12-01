function find(target, array) {
    var row = array.length; //行数
    var col = array[0].length; //列数

    var currentRow = row - 1;
    var currentCol = 0;
    while (currentRow >= 0 && currentCol <= col -1) {
        if (target > array[currentRow][currentCol]) {
            currentCol++;
        } else if (target < array[currentRow][currentCol]) {
            currentRow--;
        } else {
            return true;
        }
    }
    return false;
}

array1 = [[1, 2, 8, 9],
          [2, 4, 9, 12],
          [4, 7, 10, 13],
          [6, 8, 11, 15]];
target1 = 12;
console.log(find(target1, array1));