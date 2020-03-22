module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return []};

    var sort = matrix.reduce((res, arr, i) => {
        
      arr = i % 2 == 1 ? arr.reverse() : arr;
      return res.concat(arr);
    }, [])
    return sort;
  }
