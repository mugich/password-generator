// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input



var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var upperCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];



function generatePassword(){

  var passLengthInt = parseInt(prompt("Please enter password length between 8 to 128!"));  

while (passLengthInt < 8 || passLengthInt > 128){
  alert("invalid number! Try again");  
  var passLengthInt = parseInt(prompt("Please enter password length between 8 to 128!"));
}

var confirmLowerCase = confirm("Do you want to include Lower Case?");
var confirmUpperCase = confirm("Do you want to include Upper Case?");
var confirmSpecialChar = confirm("Do you want to include Special?");
var confirmNumber = confirm("Do you want to include Numbers?");



if(!confirmLowerCase && !confirmUpperCase && !confirmSpecialChar && !confirmNumber){

  for(var i = 1;  ;  i++){
    alert("Please choose at least one!");
    var confirmLowerCase = confirm("Do you want to include Lower Case?");
    var confirmUpperCase = confirm("Do you want to include Upper Case?");
    var confirmSpecialChar = confirm("Do you want to include Special?");
    var confirmNumber = confirm("Do you want to include Numbers?");

    if(!(!confirmLowerCase && !confirmUpperCase && !confirmSpecialChar && !confirmNumber)){
      break;
    }
  } 
}
var lastArray = []

if(confirmLowerCase){
  lastArray = lastArray.concat(lowerCase);
}
if(confirmUpperCase){
  lastArray = lastArray.concat(upperCase);
}
if(confirmSpecialChar){
  lastArray = lastArray.concat(specialChar);
}
if(confirmNumber){
  lastArray = lastArray.concat(numbers);
}

var randomPassword = " "

for(var i = 0; i < passLengthInt; i++){
    randomPassword = randomPassword + lastArray[Math.floor(Math.random() * lastArray.length)];
}



return randomPassword;

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
