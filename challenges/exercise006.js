

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr))throw new Error("an Array is required");
  let total = 0;
  arr.forEach(i=>{
    if ((i%3 === 0) || (i%5 === 0)){
      total += i;
    }
  });
  return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string.
 * A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (str.length === 0) throw new Error("str is empty");
  const DNA = ["C", "G", "T", "A"];
  let isDNA = true;
  for (let i = 0; i < str.length; i ++){
      if (DNA.findIndex(char => char === str[i]) === -1) {
        isDNA = false;
        break;
    }  
  }
  return isDNA;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, 
 * and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  const validDNA = isValidDNA(str);
  if (validDNA === false) throw new Error("valid DNA is required");
  let result = "";
  str.split("").forEach(letter =>{
    switch (letter) {
      case "T": 
        result += "A";
        break;
      case "C":
        result += "G";
        break;
      case "A": 
        result += "T";
        break;
      case "G":
        result += "C";
        break;
    }
  });
  return result;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not.
 * A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (!Number.isInteger(n)) throw new Error("n should be an integer");
  let result = true;
  for (let i = 1; i <= n; i++){
    if (n % i === 0 && i != 1 && i != n){
      result = false;
      break;
    }
  }
  return result;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items.
 * The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (!Number.isInteger(n)) throw new Error("n should be an integer");
  let resultArray = new Array (n);
  for (let i = 0; i < n; i++){
    resultArray[i] = new Array (n);
    for (let j = 0; j < n; j++){
      resultArray[i][j] = fill;
    }
  }
  return resultArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length == 0) {
    return false;
  }
  let cnt = 0;
  let result = false;
  staff.forEach(Employee => {
    if (Employee.rota.indexOf(day) > -1 ) cnt ++;
  });
  if (cnt >= 3) result = true;
  return result;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
