function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  var result = "";
  //result = words.reduce((a,b) => a + b.substring(0,1).toUpperCase() + b.substring(1,b.length), "");
  for (let i = 0; i < words.length; i ++){
    if (i === 0){
      result = words[i];
    }
    else{
      result = result + words[i].substring(0,1).toUpperCase() + words[i].substring(1,words[i].length);
    }
  }
  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
