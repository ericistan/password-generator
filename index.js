const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatePasswordButton = document.getElementById("generate-password-btn");
let passwordResultOne = document.getElementById("password-result-one");
let passwordResultTwo = document.getElementById("password-result-two");

generatePasswordButton.addEventListener("click", function(){
    let newPassword = "";
    let newPasswordTwo = "";
    for ( i=0; i < 15; i++) {
        let randomPasswordOne = Math.floor(Math.random() * characters.length);
        let randomPasswordTwo = Math.floor(Math.random() * characters.length);
        newPassword += characters[randomPasswordOne];
        newPasswordTwo += characters[randomPasswordTwo];
        passwordResultOne.textContent = newPassword;
        passwordResultTwo.textContent = newPasswordTwo;
    }
})
