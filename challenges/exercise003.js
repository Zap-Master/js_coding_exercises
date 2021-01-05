function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => num * num);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCase = "";
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      camelCase = words[i];
    }
    else {
      camelCase +=  words[i].substring(0, 1).toUpperCase() + words[i].substring(1, words[i].length);
    }
  }
  return camelCase;
}

function getTotalSubjects(people)
 {
  if (people === undefined) throw new Error("people is required");
  let TotalSubjects = 0;
  people.forEach(element => {
    TotalSubjects += element.subjects.length;
  });
  return TotalSubjects;

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let isIncluded = false;
  menu.forEach(meal =>{
    if (meal.ingredients.includes(ingredient)) {
      isIncluded = true;
      return;
    }
  });
  
  return (isIncluded);
  
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicateNums = [];
  arr1.forEach(element =>{
    if (arr2.includes(element) && !duplicateNums.includes(element)) {
      duplicateNums.push(element);
    }

  });
  return duplicateNums.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
