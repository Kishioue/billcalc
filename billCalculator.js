// billCalculator.js

const prompt = require('prompt-sync')();

// Function to calculate the bill based on units used
function calculateBill(units) {
    let totalBill = 0;

    if (units <= 100) {
        totalBill = units * 5;
    } else if (units <= 300) {
        totalBill = (100 * 5) + ((units - 100) * 7);
    } else {
        totalBill = (100 * 5) + (200 * 7) + ((units - 300) * 10);
    }

    return totalBill;
}

// Function to generate the formatted bill message
function generateBillMessage(name, units, totalBill) {
    return `Hello ${name},\nYour total electricity usage is ${units} units.\nYour total bill is: $${totalBill.toFixed(2)}`;
}

// Main function to execute the bill calculation
function main() {
    const customerName = prompt("Enter customer name: ");
    const electricityUnits = parseInt(prompt("Enter electricity units used: "), 10);

    // Validate if the input is a number
    if (isNaN(electricityUnits) || electricityUnits < 0) {
        console.log("Please enter a valid number of units.");
        return;
    }

    const totalBill = calculateBill(electricityUnits);
    const billMessage = generateBillMessage(customerName, electricityUnits, totalBill);
    
    console.log(billMessage);
}

// Run the main function
main();