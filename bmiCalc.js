
// My version
function bmiCalculator(weightKg, heightM) {
    var bmiCalculated = Math.round(weightKg / heightM**2);
    return bmiCalculated;
}

var bmi = bmiCalculator(74, 1.84); 
console.log("Your BMI is " + bmi)

// My version 2.0
// function bmiCalculator(weightKg, heightM) {
//     return Math.round(weightKg / heightM**2);
// }

// Udemy version
// function bmiCalculator(weightKg, heightM) {
//     return Math.round(weightKg / (heightM*heightM));
// }

