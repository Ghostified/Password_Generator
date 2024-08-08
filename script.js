const passWordBox = document.getElementById("password");
//password length
const length = 20;

//define characters that are allowed in the password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialSymbols = "@#$%^&*()_+~|{}[]<>?/=-";

const allCharacters = upperCase + lowerCase + number + specialSymbols;

//Function to generate the random password by selecting randomly
function createPassword(){
    let password = " ";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random() *lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

    //Ensure the password is length is equivalent to the defined length = 12
    while (length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    //Display the randomly generated password
    passWordBox.value = password;
}

//Function to activate the copy button to select the generated password on the clip board
function copyPassword () {
    passWordBox.select();
    document.execCommand("copy");
}