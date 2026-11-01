// Module 04 - JavaScript Tip Calculator

// Function to validate service quality
function validateQuality(quality) {
    return quality === "great" ||
           quality === "ok" ||
           quality === "poor";
}

// Function to validate service amount
function validateAmount(amount) {
    return Number.isFinite(amount) &&
           amount >= 5 &&
           amount <= 500;
}

// Function to calculate the tip
function calculateTip(amount, quality) {
    let tipRate;

    if (quality === "great") {
        tipRate = 0.20;
    } else if (quality === "ok") {
        tipRate = 0.15;
    } else {
        tipRate = 0.10;
    }

    return amount * tipRate;
}

// Prompt user for service amount
let serviceInput = prompt("Enter the service amount ($5 - $500):");

// Prompt user for service quality
let qualityInput = prompt("Enter service quality (great, ok, or poor):");

// Convert the service amount to a number
let serviceAmount = Number(serviceInput);

// Convert quality to lowercase
let serviceQuality = qualityInput === null
    ? ""
    : qualityInput.trim().toLowerCase();

// Display results on the webpage
let result = document.getElementById("result");

// Validate the service quality
if (!validateQuality(serviceQuality)) {
    result.innerHTML = "Invalid service quality. Please enter great, ok, or poor.";

} else if (
    serviceInput === null ||
    serviceInput.trim() === "" ||
    !validateAmount(serviceAmount)
) {
    result.innerHTML = "Invalid service amount. Please enter an amount between $5 and $500.";

} else {
    // Calculate the tip
    let tipAmount = calculateTip(serviceAmount, serviceQuality);

    // Display the final results
    result.innerHTML =
        "<p>Service Amount: $" + serviceAmount.toFixed(2) + "</p>" +
        "<p>Service Quality: " + serviceQuality + "</p>" +
        "<p>Recommended Tip: $" + tipAmount.toFixed(2) + "</p>";
}
