function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  var result = [];
  var i = 0;
  nums.forEach(element => {
    result[i] = Math.pow(nums[i],2);
    i ++;
  });
  return result;
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
  var result = 0;
  var i = 0;
  people.forEach(element => {
    result = result + people[i].subjects.length;
    i ++;
  });
  return result;
  
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
