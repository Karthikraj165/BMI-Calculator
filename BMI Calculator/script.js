function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
    } else {
        document.getElementById("result").innerText = "Please enter valid values for weight and height.";
    }
}