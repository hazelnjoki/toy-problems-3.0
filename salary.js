// input
var employeeName = prompt("Enter employee's name:");
var basicSalary = parseFloat(prompt("Enter monthly basic salary (Ksh):"));
var benefits = parseFloat(prompt("Enter monthly benefits (Ksh):"));

// get what is the gross salAry
var grossSalary = basicSalary + benefits;

// get what the paye amount is (Tax)
var annualTaxablePay = grossSalary * 12;
var tax = 0;

if (annualTaxablePay <= 288000) {
    tax = annualTaxablePay * 0.10;
} else if (annualTaxablePay <= 388000) {
    tax = (annualTaxablePay - 288000) * 0.25 + 28800;
} else if (annualTaxablePay <= 6000000) {
    tax = (annualTaxablePay - 388000) * 0.30 + 74600;
} else if (annualTaxablePay <= 9600000) {
    tax = (annualTaxablePay - 6000000) * 0.325 + 149600;
} else {
    tax = (annualTaxablePay - 9600000) * 0.35 + 229600;
}

var monthlyTax = tax / 12;

// get the NHIF
var nhif = 0;
if (grossSalary <= 5999) {
    nhif = 150;
} else if (grossSalary <= 7999) {
    nhif = 300;
} else if (grossSalary <= 11999) {
    nhif = 400;
} else if (grossSalary <= 14999) {
    nhif = 500;
} else if (grossSalary <= 19999) {
    nhif = 600;
} else if (grossSalary <= 24999) {
    nhif = 750;
} else if (grossSalary <= 29999) {
    nhif = 850;
} else if (grossSalary <= 34999) {
    nhif = 900;
} else if (grossSalary <= 39999) {
    nhif = 950;
} else if (grossSalary <= 44999) {
    nhif = 1000;
} else if (grossSalary <= 49999) {
    nhif = 1100;
} else if (grossSalary <= 59999) {
    nhif = 1200;
} else if (grossSalary <= 69999) {
    nhif = 1300;
} else if (grossSalary <= 79999) {
    nhif = 1400;
} else if (grossSalary <= 89999) {
    nhif = 1500;
} else if (grossSalary <= 99999) {
    nhif = 1600;
} else {
    nhif = 1700;
}

// get NssF (I am using the monthly pay frequency)
var nssf = 400;

var netSalary = grossSalary - (monthlyTax + nhif + nssf);


// Payslip
console.log("Payslip for " + employeeName);
console.log("Basic Salary: Ksh " + basicSalary.toFixed(2));
console.log("Benefits: Ksh " + benefits.toFixed(2));
console.log("Gross Salary: Ksh " + grossSalary.toFixed(2));
console.log("PAYE (Tax): Ksh " + monthlyTax.toFixed(2));
console.log("NHIF: Ksh " + nhif.toFixed(2));
console.log("NSSF: Ksh " + nssf.toFixed(2));
console.log("Net Salary: Ksh " + netSalary.toFixed(2));
