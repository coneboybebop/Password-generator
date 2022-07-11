function generatePassword() {
  input = window.parseInt(prompt("How many characters would you like your password to contain? (Please select between 8 and 128."));

  if (!input) {
    window.alert("Please input a number");
  } else if (input > 128 || input < 8) {
    window.alert("You must use the specified number of characters")
  } else {
    var confirmCap = window.confirm("Would you like your password to include capital letters?");
    var confirmLow = window.confirm("Would you like your password to include lower case letters?");
    var confirmNum = window.confirm("Would you like your password to include numbers?");
    var confirmSpec = window.confirm("Would you like your password to include special characters?");
  };

  if (confirmCap) {
    var capital = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  } else {
    var capital = [];
  }

  if (confirmLow) {
    var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  } else {
    var lower = [];
  }

  if (confirmNum) {
    var num = ['0','1','2','3','4','5','6','7','8','9'];
  } else {
    var num = [];
  }

  if (confirmSpec) {
    var special = ['!','#','$','%','&','(',')','*','+','-','/',':',';','<','>','=','?','@','[',']','^','_','`','{','}','|','~'];
  } else {
    var special = [];
  }

// convert arrays to string
var capitalString = capital.join("");
var lowerString = lower.join("");
var numString = num.join("");
var specString = special.join("");

// combine arrays into string to randomize
var random = (capitalString + lowerString + numString + specString);
console.log(random);


}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
