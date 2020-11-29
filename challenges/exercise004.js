function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  var result = [];
  var i = 0;
  nums.forEach(element => {
    if (nums[i] < 1) {
      result.push(nums[i]);
    }
    i ++;
  });

  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  var result = [];
  var i = 0;
  names.forEach(element => {
    if (names[i].substring(0,1).toUpperCase() === char.toUpperCase()){
      result.push(names[i]);
    }
    i ++;
  })
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  var result = [];
  var i = 0;
  words.forEach(element => {
    if (words[i].indexOf("to ") != -1 ){
      console.log(words[i]);
      result.push(words[i]);
    }
    i ++;
  })
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
