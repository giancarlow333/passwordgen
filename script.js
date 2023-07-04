// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add constants for each character type
const upper_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_chars = "abcdefghijklmnopqrstuvwxyz";
const number_chars = "0123456789";
const special_chars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // I excluded spaces

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate the password
function generatePassword() {
  var length = prompt("Please enter the password length:");
  if (length < 8 || length > 128) {
    alert("Length must be between 8 and 128 characters!");
    return;
  }

  var lower = confirm("Include lower case characters?");
  var upper = confirm("Include upper case characters?");
  var numbers = confirm("Include numbers?");
  var specials = confirm("Include special characters?");

  // Validate
  if (lower == false && upper == false && numbers == false && specials == false) {
    alert("You rejected all password criteria!\nUnable to generate password!");
    return;
  }

  var chosen_characters = ""; // these are the character types chosen via the confirms above
  if (lower == true) {
    chosen_characters += lower_chars;
  }
  if (upper == true) {
    chosen_characters += upper_chars;
  }
  if (numbers == true) {
    chosen_characters += number_chars;
  }
  if (specials == true) {
    chosen_characters += special_chars;
  }
  
  // random generation
  // functionality via https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  var result = "";
  var ctr = 0;
  while (ctr < length) {
    result += chosen_characters.charAt(Math.floor(Math.random() * chosen_characters.length));
    ctr += 1;
  }
  
  return result;
}