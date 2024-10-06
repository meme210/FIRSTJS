//1.Email validation
let email = prompt("Please input your email: ");
let emailOutput = email.endsWith("@mail.com");
if (emailOutput) {
  console.log("Email is valid");
} else {
  console.log("Email is invalid");
}
//2.Password strength checker
let password = prompt("Enter your password: ");
let lastLetter = password.charAt(password.length - 1).toUpperCase();
let firstLetter = password.charAt(0).toLowerCase();
if (lastLetter && firstLetter && password.includes(0) && password.length > 8) {
  console.log("Strong password");
} else {
  console.log("Weak password");
}
//3.Url protocol detection
let url = prompt("Input url: ");
let firstUrlDetector = url.startsWith("http://");
let secondUrlDetector = url.startsWith("https://");
if (firstUrlDetector || secondUrlDetector) {
  console.log("It's a resource locator");
} else {
  console.log("It's not a resource locator");
}
//4.Palindrome detector
let palindrome = prompt("Enter a palindrome word: ");
let palindromeFirstLetter = palindrome.charAt(0);
let palindromeLastLetter = palindrome.charAt(palindrome.length - 1);
let palindromeSecondToTheLastLetter = palindrome.charAt(palindrome.length - 2);
let palindromeSecondLetter = palindrome.charAt(1);
let palindromeThirdToTheLastLetter = palindrome.charAt(palindrome.length - 3);
let palindromeThirdLetter = palindrome.charAt(2);
let palindromeFourthToTheLastLetter = palindrome.charAt(palindrome.length - 4);
let palindromeFourthLetter = palindrome.charAt(3);
let palindromeFifthToTheLastLetter = palindrome.charAt(palindrome.length - 5);
let palindromeFifthLetter = palindrome.charAt(4);
if (
  palindromeFirstLetter === palindromeLastLetter &&
  palindromeSecondToTheLastLetter === palindromeSecondLetter &&
  palindromeThirdToTheLastLetter === palindromeThirdLetter &&
  palindromeFourthToTheLastLetter === palindromeFourthLetter &&
  palindromeFifthToTheLastLetter === palindromeFifthLetter
) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}
//5.Username length validation
let userName = prompt("Type your username");
if (userName.length >= 5 && userName.length <= 15) {
  console.log("It is a good username!");
} else if (userName.length < 5) {
  console.log("It is too short!");
} else {
  console.log("It is too long!");
}
//6.Case conversion in messages
let namee = prompt("Input your name");
let firstName = namee.charAt(0).toUpperCase();
let remainingName = namee.substring(1, namee.length).toLowerCase();
console.log(firstName.concat(remainingName));
//7.Detect file type from extension
let graphics = prompt("Input your extension link: ").toLowerCase();
let jgpgraphicsExtension = graphics.endsWith(".jpg");
let pnggraphicsExtension = graphics.endsWith(".png");
let jpeggraphicsExtension = graphics.endsWith(".jpeg");
let mp2recordExtension = graphics.endsWith(".mp2");
let mp3recordExtension = graphics.endsWith(".mp3");
if (jgpgraphicsExtension) {
  console.log("It is a JPG file");
} else if (pnggraphicsExtension) {
  console.log("It is a PNG file");
} else if (jpeggraphicsExtension) {
  console.log("It is a JPEG file");
} else if (mp2recordExtension) {
  console.log("It is an MP2 file");
} else if (mp3recordExtension) {
  console.log("It is an MP3 file");
}
//8.Sanitize User phone input
let phoneNumber = prompt("Input your phone number").trim();
let countryOfOrigin = prompt("What country are your from?: ")
  .trim()
  .toLowerCase();
if (phoneNumber.length === 11 && phoneNumber.startsWith("0")) {
  if (countryOfOrigin === "nigeria") {
    let nigeriaCode = "+234";
    let nigeriaPhoneNumber = phoneNumber.substring(1, phoneNumber.length);
    let fullNumber = nigeriaCode.concat(" ", nigeriaPhoneNumber);
    let fullNumberOutput = "As you're Nigerian, your full phone number is ";
    console.log(fullNumberOutput.concat(fullNumber));
  }
  if (countryOfOrigin === "ghana") {
    let ghanaCode = "+233";
    let ghanaPhoneNumber = phoneNumber.substring(1, phoneNumber.length);
    let fullNumber = ghanaCode.concat(" ", ghanaPhoneNumber);
    let fullNumberOutput = "As you're Ghanaian, your full phone number is ";
    console.log(fullNumberOutput.concat(fullNumber));
  }
  if (countryOfOrigin === "britain") {
    let britainCode = "+44";
    let britainPhoneNumber = phoneNumber.substring(1, phoneNumber.length);
    let fullNumber = britainCode.concat(" ", britainPhoneNumber);
    let fullNumberOutput = "As you're British, your full phone number is ";
    console.log(fullNumberOutput.concat(fullNumber));
  }
} else if (isNaN(phoneNumber)) {
  console.log("Input numbers only and your country");
}
//9.Forbidden words bot
// let wordChecker = prompt('Type in a bad word').toLowerCase()
// let badWordOne = "bad"
// let badWordTwo = "spam"
// if()
//All power belongs to God😔🙏
//10.Scores Grader
let studentGrade = prompt("Enter your grade in number");
if (studentGrade >= 75 && studentGrade <= 100) {
  console.log("Grade A");
} else if (studentGrade >= 60 && studentGrade < 75) {
  console.log("Grade B");
} else if (studentGrade >= 50 && studentGrade < 60) {
  console.log("Grade C");
} else if (studentGrade < 50) {
  console.log("You are advised to retake the exam.");
}
