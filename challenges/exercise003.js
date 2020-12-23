function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squaredNums = nums.map(function (num) {
    return num * num;
  });
  return squaredNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result = words[i];
    }
    else {
      result = result + words[i].substring(0, 1).toUpperCase() + words[i].substring(1, words[i].length);
    }
  }
  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let result = 0;
  people.forEach(element => {
    result = result + element.subjects.length;
  });
  return result;

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let result = false;
  menu.forEach(meal =>{
    //console.log(meal.ingredients  + "     " + ingredient + "    " + meal.ingredients.includes(ingredient));
    if (meal.ingredients.includes(ingredient)) {
      result = true;
      return;
    }
  });
  
  return (result);
  
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = [];
  arr1.forEach(element =>{
    if (arr2.includes(element) && !result.includes(element)) {
      result.push(element);
    }

  });
  return result.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
