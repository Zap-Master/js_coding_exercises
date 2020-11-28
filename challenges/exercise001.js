function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName.substring(0,1).toUpperCase() + "." + lastName.substring(0,1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  var result = (originalPrice + (originalPrice * vatRate / 100))
  result = Math.floor(result*100)/100;
  //console.log(result);
  return (result);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  var result = (originalPrice - (originalPrice * reduction / 100))
  result = Math.floor(result*100)/100;
  return (result);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  var result = "";
  if (str.length%2 != 0){
    result = str.substring((Math.round(str.length/2)) - 1,Math.round(str.length/2));
  }
  else {
    result = str.substring((str.length/2)-1, (str.length/2) + 1);
  }
  //console.log(result);
  return result;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  var result = "";
  for (let i = word.length; i >= 0; i--){
    result = result + word.charAt(i);
  }
  //console.log(result);
  return result;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  for (let i = 0; i < words.length; i++){
    words[i] = reverseWord(words[i]);
  }
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  var result = 0;
  for (var i = 0; i < users.length; i++){
    if (users[i].type === "Linux"){
      result = result + 1;
    }
  }
  return result;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var result = scores.reduce((a,b) => a + b, 0) / scores.length;
  //result = Math.floor(result*100)/100;
  result = Number(Math.round(result + "e2") + "e-2");
  return result;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
