
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
  alert(finalSum);
}

var computeSumTwo = function ()
{
  var finalSum = 0;
  var inputValue = document.getElementById("inputTwo").value;
  finalSum = fib(inputValue);
  alert (finalSum);
}

var fib = function(input)
{
  return input < 2 ? input : fib(input - 1) + fib(input - 2);
}
