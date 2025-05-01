//Challenge One: Good Morning Greeting
const greet = (name) => {
  return `Good Morning, ${name}!`;
};
console.log(greet('Tom'))
console.log(greet('Lisa'))


//Challenge 2: Convert to Dog Years
const dogYears = (humanAge) => {
  const dogAge = humanAge * 7; 
  return `Your age in dog years is ${dogAge}`;
};
console.log(dogYears(18));
console.log(dogYears(10));


//Challenge 3: It is Freezing?!
const temperatureCheck = (temperature) => {
  return temperature < 32;
};
console.log(temperatureCheck(56));
console.log(temperatureCheck(23));

//Challenge 4: fizzBuzz()
const fizzBuzz = (number) => {
  let count3 = 0; 
  let count5 = 0; 
  let result = "";
    for (let i = 1; i <= number; i++){
    count3++
    count5++
    let msg = "";
    if (count3 === 3){
      msg = "Fizz";
      count3 = 0;
    }
    if (count5 === 5){
      msg = msg + "Buzz";
      count5 = 0;
    }
  if (msg === ""){
    msg = "Whoo";
  }
    result = `${result}${msg}\n`; 
}
return result;
};
console.log(fizzBuzz(15));

  
// Bonus Challenge: Celsius to Fahrenheit
const convertDegrees = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};
console.log(convertDegrees(12));
console.log(convertDegrees(8));
