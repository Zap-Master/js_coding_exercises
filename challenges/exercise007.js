/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (n < 0) throw new Error("n should be positive");
  if (!Number.isInteger(n)) throw new Error("n should be an integer");
  const arrSt = n.toString().split("");
  const digits = arrSt.map(i => parseInt(i, 10));
  let result = digits.reduce(function (accumulator, currentValue){
    return accumulator + currentValue}, 0);
  return result;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (isNaN(start)) throw new Error("start should be a number");
  if (isNaN(end)) throw new Error("end should be a number");
  if (step === undefined) {step = 1;}
  if (start > end && (step > 0)) throw new Error("end should be greater then start for step > 0");
  if (start < end && (step <0)) throw new Error("end should be less then start for step < 0");
  
  let resultRange = [];
  if (start < end) {
    for (let i = start; i <= end;  i = i +step){
      resultRange.push(i);
    }
  }
  if (start > end) {
    for (let i = start; i >= end; i = i + step){
      resultRange.push(i);
    }
  }
  return resultRange;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let usernames = [];
  for (let i = 0; i <users.length; i++) {
    let user = users[i];
    user.screenTime.forEach(screentime => {
      if (screentime.date === date) {
        let minutes = 0;
        for (const property in screentime.usage){
          minutes += screentime.usage[property];
        }
        if (minutes > 100) {
          usernames.push(user.username);
        }
      }
    });
  }
  return usernames;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 *   
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr.length != 7) throw new Error("incorrect hexStr");
  let letters = /[0-9A-Fa-f]{6}/g;
  if (!letters.test(hexStr)) throw new Error("incorrect hexStr");
  let rgbStr ="";
  const red = parseInt(hexStr.substring(1,3), 16);
  const green = parseInt(hexStr.substring(3,5), 16); 
  const blue = parseInt(hexStr.substring(5), 16);
  rgbStr = "rgb(" + red + "," + green + "," + blue + ")";
  return rgbStr;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  let winner;
  //brute force
  //rows
  for (let i = 0; i < 3; i++){
    if ((board[i][0] === board[i][1]) && (board[i][0] === board[i][2])) {
      winner = board[i][0];
    }
  }
  //columns
  for (let j = 0; j < 3; j ++) {
    if ((board[0][j] === board[1][j]) && (board[0][j] === board[2][j])) {
      winner = board[0][j];
    }
  }
  //1st diagonal
  if ((board[0][0] === board[1][1]) && (board[0][0] === board[2][2])) {
    winner = board[0][0]
  }
  //2nd diagonal
  if ((board[2][0] === board[1][1]) && (board[2][0] === board[0][2])) {
    winner = board[2][0]
  }
  return winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
