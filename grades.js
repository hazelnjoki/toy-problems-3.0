function calculateGrade() {
    var marks = prompt("Enter your marks (between 0 and 100):");
    
    // I am putting input as a number
    marks = parseFloat(marks);
    
    // is input is a valid number between 0 and 100?
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Please enter a number between 0 and 100.");
        return;
    }
        
    var grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 70 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 60 && marks <= 69) {
        grade = 'C';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    
    // Output the grade
    alert("Your grade is: " + grade);
}

// Call the function
calculateGrade();
