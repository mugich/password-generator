// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passLengthString = prompt("Please enter password length between 8 to 128!");
var passLengthNum = parseInt(passLengthString);

var confirmLowerCase = confirm("Do you want to include Lower Case?");
var confirmUpperCase = confirm("Do you want to include Upper Case?");
var confirmSpecialChar = confirm("Do you want to include Special?");
var confirmNumber = confirm("Do you want to include Numbers?");








function generatePassword(){

  return "temporary password";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
