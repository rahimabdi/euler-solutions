
// File: script.js
// This small JavaScript computes the sum of all multiples of 3 or 5 below 1000.

var computeSumOne = function ()
{
  var finalSum = 0;
  var inputValue = document.getElementById("inputOne").value;
  for (var i=1; i < inputValue; i++)
  {
    if ((i % 3 == 0) || (i % 5 == 0))
    {
      finalSum+= i;
    }
  }
  alert("The sum is " + finalSum);
}

var computeSumTwo = function ()
{
  var finalSum = 0;
  var inputValue = document.getElementById("inputTwo").value;
  finalSum = fib(inputValue);
  alert ("The sum is " + finalSum);
}

var fib = function(input)
{
  return input < 2 ? input : fib(input - 1) + fib(input - 2);
}

var computeSumThree = function ()
{
  var inputValue = document.getElementById("inputThree").value;
  var greatestPrimeFactorSoFar = 0;
  if (inputValue < 2)
  {
      alert("No prime factors exist.");
  }
  else if (inputValue == 2)
  {
      alert("The greatest prime factor for '2' is 2.");
  }
  else {
        for (var i = 1; i <= Math.sqrt(inputValue); i++)
          {
              if (inputValue % i == 0)
                {
                  greatestPrimeFactorSoFar = i;
                }
          }
          if (greatestPrimeFactorSoFar == 1)
          {
             alert("The greatest prime factor is " + inputValue + ".");
          }
          else {
              alert("The greatest prime factor is " + greatestPrimeFactorSoFar + ".");
          }
  }
}
