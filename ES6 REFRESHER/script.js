//Interview question
// Return array who is incrementing by 1  but one of the number can't excess 9
var convertArr = arr => {
  if (Array.isArray(arr)) {
    var newArr = arr.map(arrs => arrs + 1);
    var result = newArr.filter(item => item != 9 && item < 9);
  }
  return result;
};
