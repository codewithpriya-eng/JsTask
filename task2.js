
/*---1.User Introduction---*/

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

console.log("My name is", name);
console.log("I am", age, "years old");

/*----2.Degree Confirmation---*/

let degree = confirm("Did you complete your degree?");

if (degree) {
console.log("Degree Completed");
} else {
console.log("Degree Not Completed");
}


/*----3.Mobile Price---*/

let mobilePrice = 250000;
let discount = 10000;
let finalPrice = mobilePrice - discount;

console.log("Final Price :", finalPrice);


/*---4.Age Eligibility---*/

let userAge = prompt("Enter your age:");

if (userAge >= 18) {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}

  /*---5.Shopping Cart----*/

  let cart = ["Rice", "Milk", "Sugar", "Tea Powder"];

console.log("First Product :", cart[0]);
console.log("Last Product :", cart[cart.length - 1]);
console.log("Total Products:", cart.length);


/*---6.Student Details---*/

let student = {
name : "Rudhra",
age : 28,
course: "MERN"
};

console.log("Student Name :", student.name);
console.log("Student Course:", student.course);


/*---7.Employee Salary Calculator----*/

let salary = 55000;
let bonus = 5600;
let total = salary + bonus;

console.log("Total Salary :", total);


/*---8.Website Login Check---*/

let username = "logoin";
let password = "02256";

let enteredUser = prompt("Username:");
let enteredPass = prompt("Password:");

if (enteredUser === username && enteredPass === password) {
console.log("Login Successful");
} else {
console.log("Invalid Credentials");
}


/*---9.Food Delivery App---*/

let foodPrice = 650;
let deliveryCharge = 40;
let totalBill = foodPrice + deliveryCharge;
let gst = totalBill * 0.05;
let grandTotal = totalBill + gst;

console.log("Total Bill :", totalBill);
console.log("GST (5%) :", gst);
console.log("Grand Total :", grandTotal);


/*---10.E-Commerce Product Details---*/

let product = {
name : "Laptop",
price: 50000,
brand: "ASUS",
stock: false
};

console.log("Product Name:", product.name);
console.log("Brand :", product.brand);
console.log("Price :", product.price);
console.log("In Stock :", product.stock ? "Available" : "Out of Stock");


/*---11.Attendance System---*/

let present = confirm("Are you present today?");

if (present) {
console.log("Attendance Marked");
} else {
console.log("Absent");
}


/*---12.Banking Application---*/

let balance = Number(prompt("Enter current balance:"));
let withdraw = Number(prompt("Enter withdraw amount:"));

if (withdraw <= balance) {
let remaining = balance - withdraw;
console.log("Transaction Successful");
console.log("Remaining Balance :", remaining);
} else {
console.log("Insufficient Balance");
}


/*---Mini Employee Management System---*/


let employee = {
name : prompt("Employee Name:"),
age : Number(prompt("Employee Age:")),
department: prompt("Department:"),
salary : Number(prompt("Monthly Salary:"))
};


console.log("Employee Name :", employee.name);
console.log("Employee Age :", employee.age);
console.log("Department :", employee.department);
console.log("Annual Salary :", employee.salary * 12);


if (employee.salary > 100000) {
console.log("Senior Employee");
} else {
console.log("Junior Employee");
}
