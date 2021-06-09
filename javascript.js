//Code for test
//Time greeting
let date = new Date();
let timeNow = date.getHours();
const greet = document.getElementById("greeting");
let greeting;

if(timeNow < 12){
    greeting = "Good morning!"
} else if(timeNow < 18){
    greeting = "Good afternoon!"
} else if(timeNow <= 23){
    greeting = "Good evening!"
}
greet.innerHTML = greeting + " This website is designed to demonstrate abilities in JavaScript and HTML."
//End of Time greeting

//Code for color changer
let changeBgBtn = document.getElementById("changeBackColor");
let changeTextBtn = document.getElementById("changeTextColor");
let newBgValue = document.getElementById("bgColor");
let newTxtValue = document.getElementById("textColor");
let randomColor = document.getElementById("randomColor");
let resetColor = document.getElementById("resetColor");
let hexcode = document.getElementById("hexcode");

changeBgBtn.onclick = function(){
    document.body.style.backgroundColor = newBgValue.value;
    newBgValue.value = "";
    hexcode.innerHTML = "";
}
changeTextBtn.onclick = function(){
    document.body.style.color = newTxtValue.value;
    newTxtValue.value = "";
}
randomColor.onclick = function(){
    let letters = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let result;
    let randomArray =[];
    for(let i = 0; i < 6; i++){
      let randomNumber = Math.floor(Math.random() * letters.length);
      result = letters[randomNumber];
      randomArray.push(result);
    }
    let randHexcode = randomArray.join("");
    document.body.style.backgroundColor = "#" + randHexcode;
    document.getElementById("hexcode").innerHTML = "The Hexcode for this color is: #" + randHexcode;
}
resetColor.onclick = function(){
    document.body.style.color = "black";
    document.body.style.backgroundColor = "orange";
    hexcode.innerHTML = "";
}
//End code for color changer

//Code for Magic 8Ball
let askBtn = document.getElementById("askQuestion");
let eightBallResult = document.getElementById("eightBallAnswer");

askBtn.onclick = function(){
    let result;
    let randomNumber = Math.floor(Math.random() * 8);
    let userQuestion = document.getElementById("userQuestion");
    switch(randomNumber){
        case 0:
            result = "It is certain";
            break;
        case 1:
            result = "Definitely not...";
            break;
        case 2:
            result = "The answer is true";
            break;
        case 3:
            result = "The answer is false";
            break;
        case 4:
            result = "It is likely";
            break;
        case 5:
            result = "It is unlikely";
            break;
        case 6:
            result = "I am not sure";
            break;
        case 7:
            result = "Ask again";
            break;
    }
    if(userQuestion.value === ""){
        result = "Ask me a question!"
    }
    userQuestion.value = ""
    document.getElementById("eightBallAnswer").innerHTML = "The Magic 8-Ball says: <br>" + result
}   
//End of code for Magic Eight Ball


//Code for Credit Card Validator w/ Luhn algorithm:


//End of Credit Card Validator

//Code for age calculator
let nDate = new Date();
const currentYear = nDate.getFullYear();

function calculateAge() {
    let userAge = document.getElementById("userAge").value;
    let userYear = document.getElementById("userYear").value;
    let resultParagraph = document.getElementById("ageResult").value;
    let userBirthYear = currentYear - userAge;
    let ageDiff = userYear - userBirthYear;
    let yearDiff = userBirthYear - userYear;
    let futureAge = userYear - userBirthYear;
    let result;

    if(userBirthYear > userYear){
        result = `The year ${userYear} was ${yearDiff} years before you were born.`
    } if (yearDiff === 1) {
        result = `The year ${userYear} was ${yearDiff} year before you were born.`
    }  else if (userBirthYear < userYear && userYear > currentYear){
        result = `You will be ${futureAge} in the year ${userYear}.`
    }else if (userBirthYear < userYear){
        result = `You were ${ageDiff} in the year ${userYear}.`
    } else if (userYear == userBirthYear){
        result = `You were 0 years old in this year`
    } else if (userYear == false || userAge == false){
        result = "Please enter the required information."
    } else if (userAge < 1){
        result = "Your age must be above 0."
    }

    document.getElementById("ageResult").innerHTML = result;

}