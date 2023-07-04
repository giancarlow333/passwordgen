// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  
  return "swordfish";
}