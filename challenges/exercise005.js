const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  var result = null;
  var indexOfN = nums.indexOf(n);
  //console.log(indexOfN + '  ' + nums.length);
  switch (indexOfN) {
    case nums.length -1: //last element
      result = null;
      break;
    case -1: //element not found
      result = null;
      break;
    default:
      result = nums[indexOfN+1];
  }
  return result;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  var arr = str.split("");
  var i = 0;
  var cnt1 = 0 ;
  var cnt0 = 0;
  arr.forEach(element =>{
    switch (arr[i]){
      case "1":
        cnt1 ++;
        break;
      case "0":
        cnt0 ++;
        break;
    }
    i ++;
  });
  const counter = {1: cnt1, 0: cnt0};
  return counter;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  var result = "";
  var i = 0;
  var arr = n.toString().split("");
  arr.reverse();
  arr.forEach(element =>{
    result = result + arr[i];
    i++;
  })
  return parseInt(result,10);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  var result = 0;
  var i = 0;
  var sums = [];
  function GetSum(total, value){
    return total + value;
  }
  arrs.forEach(element => {
    sums[i] = arrs[i].reduce(GetSum);
    i++;
  });



  return sums.reduce(GetSum);

};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
