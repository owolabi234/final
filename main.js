/*
const greeting = "hello";
console.log("hello".charAt(0));


let customer = true;
let shoe = "available";
let cloth = "cloth";
let reply;

if (customer && shoe && cloth){
  reply = `here's your order of ${cloth}`;
} else {
  reply = "Sorry, we're out of stock.";
}
console.log(reply);


let evenNumber = 5
let oddNumber = 7
let result;

if (evenNumber >= oddNumber) {
  result = "true";
} else if (evenNumber <= oddNumber) {
  result = "false";
}

console.log(result);


 document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    let message = "";

    if (name.trim() === "") {
      message = "Name is required.";
    } else if (email.trim() === "") {
      message = "Email is required.";
    } else if (!email.includes("@")) {
      message = "Please enter a valid email.";
    } else {
      message = "All good! Thank you, " + name.trim() + "!";
    }

    document.getElementById("message").textContent = message;
  });




  let name = "  dunsin  ";
console.log(name.trim().length);


let word = "hello world";
console.log(word.toUpperCase());

"admin" === "admin"
"dunsin@gmail.com".includes("@");

let email = "dunsin@gmail.com";
if (email.includes("@")) {
  console.log("Valid");
} else {
  console.log("Invalid");
}


let Word = "JavaScript";
console.log(Word.slice(0, 4));

let gmail = "Dunsin@Gmail.com";
if (gmail.toLowerCase().includes("@")) {
  console.log("Valid");
}

let randomNumber = Math.floor(Math.random() *10) + 1;
console.log(randomNumber);

console.log(Math.sqrt(81));
console.log(Math.pow(2, 3));

let score = 65;

if (score >= 70) {
  console.log("Excellent");
} else if (score >= 50) {
  console.log("pass");
} else {
  console.log("fail");
}

let age = 17;
if (age > 18) {
  console.log("Adult");
} else if (age = 18) {
  console.log("Just === 18");
}

let namee = "Dunsin";
let message = name.trim() === "" ? "Name is required": "Welcome";
console.log(message);*/


console.log("Hello World".slice(0, 5));

let text = "JavaScript";
console.log(text.charAt(4));

let greeting = "Hello World";
let newGreeting = greeting.replace("World", "Everyone");
console.log(newGreeting);
 

let str = "Programming";
   console.log(str.substring(0, 4));

   let MyName = "favour";
   console.log(MyName.toUpperCase());

   let word = "JavaScript"; 
   console.log(word.includes("Script"));

   let texts = "I love JavaScript";
   let result = texts.slice(7);
   console.log(result);

let count = "Frontend Developer";
console.log(count.length);


//number method
//Write a statement to convert the number 50 into a string.
let number = 50;
console.log(number.toString()); 

/*Write a JavaScript program that:
Stores the value 45.6789 in a variable.
Displays the value rounded to 2 decimal places.*/
let num = 45.6789;
console.log(num.toFixed(2));

/*Write a program that converts the string "200" into a number and adds 50 to it.*/
let string = 200;
let numb = parseInt(string);
console.log(numb + 50);

/*Create a program that checks if the value "Hello" is a valid number using isNaN().*/
let value = "Hello";
console.log(isNaN(value));

/*Write a program that:

Accepts the number 100.5678.
Displays it in exponential notation.
Displays it with 3 significant digits.*/

let myNumber = 100.5678;
console.log(myNumber.toExponential());
console.log(myNumber.toPrecision(3));


//maths method
//Write a statement to calculate 5 raised to the power of 3.
console.log(Math.pow(5, 3));

//Write the JavaScript statement that returns the smallest value from the numbers 12, 8, 25, and 3.
console.log(Math.min(12,8,25,3));

//Write a program that generates a random number between 1 and 10.
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

//Write a program that calculates the square root of 144.
console.log(Math.sqrt(144));

//Create a program that finds the maximum value in the array: [12, 45, 7, 89, 23]
let numbers = [12, 45, 7, 89, 23];
console.log(Math.max(...numbers));

/*Write a program that:
Stores the value 5.67.
Rounds it down.
Rounds it up.
Rounds it to the nearest whole number.*/
let program = 5.67;
console.log(Math.floor(program));
console.log(Math.ceil(program));
console.log(Math.round(program));


//if statement

//Write an if statement that checks whether a variable age is greater than or equal to 18.

let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// OR

let ages = 16;
if (ages >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}


/*Write a program that checks whether a student has passed or failed.
Pass mark = 50
Score is stored in a variable.*/

let score = 50;
if (score <= 49) {
  console.log("You failed");
} else {
  console.log("You passed");
}

//OR

let passMark = 50;
if (passMark >= 50) {
  console.log("You failed");
} else {
  console.log("You passed");
}
