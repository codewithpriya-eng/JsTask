
/*Task 1 - Employee Login Eligibility*/

let age = 22;
let idAvailable = true;
let attendance = 80;

if (age >= 18 && idAvailable === true && attendance >= 75) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}


/*Task 2 - Student Grade System*/

let marks = 87;
let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A+";
} else if (marks >= 80 && marks <= 89) {
  grade = "A";
} else if (marks >= 70 && marks <= 79) {
  grade = "B";
} else if (marks >= 60 && marks <= 69) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log("Grade " + grade);


/*Task 3 - ATM Withdrawal*/

let balance = 5000;
let withdraw = 3000;

if (withdraw <= balance && withdraw % 100 === 0) {
  balance = balance - withdraw;
  console.log("Transaction Successful");
  console.log("Remaining Balance : " + balance);
} else {
  console.log("Transaction Failed");
}


/*Task 4 - Food Ordering App*/

let choice = 4;
let item;

switch (choice) {
  case 1:
    item = "Pizza";
    break;
  case 2:
    item = "Burger";
    break;
  case 3:
    item = "Shawarma";
    break;
  case 4:
    item = "Biryani";
    break;
  case 5:
    item = "Juice";
    break;
  default:
    item = "Invalid Choice";
}

console.log("You Ordered " + item);


/*Task 5 - E-Commerce Discount*/

let originalPrice = 6000;
let isPremiumUser = true;
let discountPercent, discountAmount, finalPrice;

if (originalPrice > 5000 && isPremiumUser === true) {
  discountPercent = 20;
} else {
  discountPercent = 10;
}

discountAmount = (originalPrice * discountPercent) / 100;
finalPrice = originalPrice - discountAmount;

console.log("Original Price : " + originalPrice);
console.log("Discount : " + discountPercent + "% (" + discountAmount + ")");
console.log("Final Price : " + finalPrice);


/*Task 6 - Attendance Report*/


for (let day = 1; day <= 30; day++) {
  console.log("Day " + day + " Present");
}


/*Task 7 - Even Number Generator*/


for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


/*Task 8 - Mobile Number Validation*/


let mobile = "8756401230";

if (mobile.length === 10 && (mobile[0] === "6" || mobile[0] === "5" || mobile[0] === "7" || mobile[0] === "8")) {
  console.log("Valid Mobile Number");
} else {
  console.log("Invalid Mobile Number");
}


/*Task 9 - Shopping Cart*/


let cart = ["Milk", "Bread", "Egg", "Rice", "Oil"];

console.log("First Item : " + cart[0]);
console.log("Last Item : " + cart[cart.length - 1]);
console.log("Total Items : " + cart.length);


/*Task 10 - Employee Database*/


let employee = {
  name: "Priya",
  salary: 35000,
  department: "Development",
  experience: 1.5
};

console.log("Employee Name : " + employee.name);
console.log("Department : " + employee.department);
console.log("Experience : " + employee.experience + " years");


/*Task 11 - Company ID Generator*/


let name = "Priya";
let id = 1045;
let department = "Development";

console.log(`Welcome ${name}`);
console.log(`Your Employee ID is EMP${id}`);
console.log(`Department : ${department}`);


/*Task 12 - User Registration*/

let name = prompt("Enter Name:");
let age = prompt("Enter Age:");
let accepted = confirm("Do you accept Terms?");

if (accepted === true) {
  alert("Registered Successfully");
  console.log("Name : " + name);
  console.log("Age : " + age);
  console.log("Status : Registered Successfully");
} else {
  alert("Registration Cancelled");
  console.log("Status : Registration Cancelled");
}


/*Task 13 - Salary Increment Calculator*/


let salary = 35000;
let incrementPercent = 15;

let incrementAmount = (salary * incrementPercent) / 100;
let newSalary = salary + incrementAmount;

console.log("Old Salary : " + salary);
console.log("Increment Amount : " + incrementAmount);
console.log("New Salary : " + newSalary);


/*Task 14 - Restaurant Bill Generator*/


let burger = 150;
let pizza = 300;
let juice = 80;

let subtotal = burger + pizza + juice;
let gst = (subtotal * 18) / 100;
let grandTotal = subtotal + gst;

console.log("Subtotal : " + subtotal);
console.log("GST 18% : " + gst);
console.log("Grand Total : " + grandTotal);


/*Task 15 - Company Attendance Dashboard*/


let employees = [
  { name: "Rahul", status: "Present" },
  { name: "Arun", status: "Absent" },
  { name: "Kamal", status: "Present" },
  { name: "Priya", status: "Present" },
  { name: "Divya", status: "Absent" }
];

let presentList = [];
let absentList = [];

for (let i = 0; i < employees.length; i++) {
  if (employees[i].status === "Present") {
    presentList.push(employees[i].name);
  } else {
    absentList.push(employees[i].name);
  }
}

console.log("Present Employees : " + presentList.join(", "));
console.log("Absent Employees : " + absentList.join(", "));
console.log("Total Present : " + presentList.length);
console.log("Total Absent : " + absentList.length);


/*Mini Project (Team Assignment)
Employee Management System (Console Version)*/


let employees = [];

function addEmployee(id, name, salary, experience) {
  let emp = { id: id, name: name, salary: salary, experience: experience };
  employees.push(emp);
  console.log(`Employee ${name} Added Successfully`);
}

function viewAllEmployees() {
  console.log("---- All Employees ----");
  for (let i = 0; i < employees.length; i++) {
    let e = employees[i];
    console.log(`ID:${e.id} | Name:${e.name} | Salary:${e.salary} | Experience:${e.experience} yrs`);
  }
}

function searchEmployeeById(id) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      console.log("Employee Found:");
      console.log(employees[i]);
      return;
    }
  }
  console.log("Employee Not Found");
}

function calculateSalaryWithBonus(id) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      let bonus = (employees[i].salary * 10) / 100;
      let total = employees[i].salary + bonus;
      console.log(`${employees[i].name}'s Salary with Bonus : ${total}`);
      return;
    }
  }
  console.log("Employee Not Found");
}

function checkExperienceLevel(id) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      let exp = employees[i].experience;
      let level;
      switch (true) {
        case exp < 2:
          level = "Fresher";
          break;
        case exp >= 2 && exp < 5:
          level = "Mid-Level";
          break;
        default:
          level = "Senior";
      }
      console.log(`${employees[i].name} is at ${level} level`);
      return;
    }
  }
  console.log("Employee Not Found");
}

function deleteEmployee(id) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      console.log(`Employee ${employees[i].name} Deleted Successfully`);
      employees.splice(i, 1);
      return;
    }
  }
  console.log("Employee Not Found");
}


addEmployee(101, "Naveen", 35000, 3);
addEmployee(102, "Priya", 42000, 6);
addEmployee(103, "Arun", 28000, 1);

viewAllEmployees();
searchEmployeeById(102);
calculateSalaryWithBonus(101);
checkExperienceLevel(103);
deleteEmployee(103);
viewAllEmployees();

console.log("Exiting Employee Management System");
