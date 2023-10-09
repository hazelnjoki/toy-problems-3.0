function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Km = 1;
    
    if (speed < speedLimit) {
        console.log("OK");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5) * demeritPointsPer5Km;
        console.log("Demerit points: " + demeritPoints);
    }
}

var speed = prompt("Enter the speed of the car (in km/hr):");
speed = parseFloat(speed);

if (isNaN(speed)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    calculateDemeritPoints(speed);
}
