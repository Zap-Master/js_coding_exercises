function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = [];
  smallNums = nums.filter(num => (num < 1));
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let result = [];
  result = names.filter(name => (name.substring(0, 1).toUpperCase() === char.toUpperCase()))
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let result = [];
  result = words.filter(word => (word.indexOf("to ") != -1));
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let result = [];
  result = nums.filter(num => (Number.isInteger(num)));
  return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let result = [];
  result = users.map(user => user.data.city.displayName);
  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];
  squareRoots = nums.map(num => Number(Math.round(Math.sqrt(num) + "e2") + "e-2"));
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let result = [];
  result = sentences.filter(s => (s.toUpperCase().search(str.toUpperCase()) != -1));
  return result;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach(element => {
    longestSides.push(Math.max.apply(null, element));
  });
  return longestSides;
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
