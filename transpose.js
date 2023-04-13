const transpose = function (matrix) {
  let arr = [];
  
  for (let row = 0; row < matrix[0].length; row++){
    arr.push([]);
    for (let col = 0; col < matrix.length; col++) {  
      arr[row].push(matrix[col][row])
    }
  }
  
  return arr;
};

module.exports = transpose;