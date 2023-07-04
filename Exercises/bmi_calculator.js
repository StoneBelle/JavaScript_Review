// BMI Calculator Exercise
function bmiCalculator (weight, height) {
  var bmi = Math.round(weight / (Math.pow(height, 2)));  
  
  if (bmi < 18.5) {
      return "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
      return "Your BMI is " + bmi + ", so you are overweight.";
  }
  }


bmiCalculator(65, 1.8)
