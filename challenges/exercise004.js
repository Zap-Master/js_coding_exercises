function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => (num < 1));
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => (name.substring(0, 1).toUpperCase() === char.toUpperCase()))
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => (word.indexOf("to ") != -1));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return  nums.filter(num => (Number.isInteger(num)));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(num => Number(Math.round(Math.sqrt(num) + "e2") + "e-2"));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(s => (s.toUpperCase().search(str.toUpperCase()) != -1));
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
