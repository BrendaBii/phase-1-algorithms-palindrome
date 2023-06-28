function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;

  for (let i = 0; i < len / 2; i++) {
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
  }
  return true;
}

/* 
  Declare isPalindrome function
  Find length of string
  Loop through half of string
  Check if first and last characters are same
*/

/*
  Inside the isPalindrome function, use the .length() method to determine the length of the string.
  Save this in len variable.
  Use a for loop to loop through half of the string using len/2.
  Use an if statement to check if the first character of the string is the same as the last character.
  The comparison continue inwards through half of the string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
