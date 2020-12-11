// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){

var passLengthInt = parseInt(prompt("Please enter password length between 8 to 128!"));

while (passLengthInt <= 8 || passLengthInt >= 128){
  alert("invalid number! Try again");  
  var passLengthInt = parseInt(prompt("Please enter password length between 8 to 128!"));
}



console.log(passLengthInt);

var confirmLowerCase = confirm("Do you want to include Lower Case?");
var confirmUpperCase = confirm("Do you want to include Upper Case?");
var confirmSpecialChar = confirm("Do you want to include Special?");
var confirmNumber = confirm("Do you want to include Numbers?");










  return "temporary password";

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
