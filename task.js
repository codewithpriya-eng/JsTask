
/*-----Task 1 - Employee Name---- */

let employeeName = prompt("Please enter your name:");

console.log(employeeName);

document.writeln("Welcome " + employeeName);


/* ---Task 2 - Company Entry Confirmation--- */


let answer = confirm("Are you ready to join today's JavaScript training?");

console.log(answer);


/*---Task 3 - Customer Greeting---*/


alert("Welcome to Stackly Solutions!");


console.log("Customer entered the website.");


/*---- Task 4 - Student Details----*/


let name = prompt("Enter your name:");

let age = prompt("Enter your age:");

console.log(name);
console.log(age);


/*--- Task 5 - Product Price---*/


let price = 100;

price = 250;


console.log(price);


/*----Task 6 - Login Validation---*/


let username = prompt("Enter your username:");


if (username === "" || username === null) {
    console.warn("Username is empty.");
} else {
    
    console.log("Login Successful: " + username);
}


/*---- Task 7 - Website Maintenance---*/


alert("Website is under maintenance.");

console.error("Website is currently unavailable.");


/*----Task 8 - Feedback Collection----*/


let feedback = prompt("How was today's JavaScript session?");

console.log(feedback);

document.writeln("Thank you for your feedback!");


/*---- Task 9 - Profile Information---*/

let name = prompt("Enter your name:");

let city = prompt("Enter your city:");

let language = prompt("Enter your favorite programming language:");

console.log(name);
console.log(city);
console.log(language);


/*--- Task 10 - Mini Registration Form---*/


let fullName = prompt("Enter your Full Name:");
let email    = prompt("Enter your Email:");
let mobile   = prompt("Enter your Mobile Number:");

console.log("===== Registration Details =====");
console.log("Name   : " + fullName);
console.log("Email  : " + email);
console.log("Mobile : " + mobile);

alert("Registration Successful!");