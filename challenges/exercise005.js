const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let indexOfN = nums.indexOf(n);
  switch (indexOfN) {
    case nums.length - 1: //last element
      return null;
    case -1: //element not found
      return null;
    default:
      return nums[indexOfN + 1];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const counter = {
    1: 0,
    0: 0
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (counter[char] === undefined) {
      counter[char] = 1;
    } else {
      counter[char] += 1;
    }
  }
  return counter;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let result = "";
  n.toString().split("").reverse().forEach(element => result += element);
  return parseInt(result, 10);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  function getSum(total, value) {
    return total + value;
  }
  const sums = arrs.map(element => element.reduce(getSum));
  return sums.reduce(getSum);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let result = false;
  for (let key in haystack) {
    let inspectedStr = haystack[key].toString().toLowerCase();
    if (inspectedStr.includes(searchTerm.toLowerCase())) {
      result = true;
    }
  }
  return result;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let inspectedStr = str.toLowerCase().replace(/[&/\\#,+()$~%.'":*?<>{}!]/g, '');
  let arrOfWords = inspectedStr.split(" ");
  let wrdFreqObj = {};
  for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i];
    if (wrdFreqObj[word] === undefined) {
      wrdFreqObj[word] = 1;
    } else {
      wrdFreqObj[word] += 1;
    }
  }
  return wrdFreqObj;
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
