console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!'; // wut...it literally already returns 'Hello World! without me needing to add anything in.
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello()); // function is already called in the console.log and returns Hello World!

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Jo'));
console.log(helloName('Stacy'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log('in addNumbers using 2 and 4:', addNumbers(2, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree( numberOne, numberTwo, numberThree){
  return numberOne * numberTwo * numberThree;
}
console.log('in multiplyThree using 5, 6, and 2:', multiplyThree(5, 6, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } 
  else {
    return false;
  }
}
/* Did this on my own before seeing the next part of the question...
console.log('in isPositive using 200:', isPositive(200));
console.log('in isPositive using 0:', isPositive(0));
console.log('in isPositive using -3:', isPositive(-3));
 */

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length > 0) {
    return array[array.length-1];
  }
  else {
    return 'undefined';
  }
}
console.log('in getLast using [2,4,6]:', getLast([2,4,6]));
console.log('in getLast using [2]:', getLast([2]));
console.log('in getLast using []:', getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  // loop thru array
  for (i = 0; i < array.length; i++) {
    // if value is in the array, return true
    if (value === array[i]) {
      return true;
    }
  }
  // outside of the loop, return false (loop runs to completion, checking every index in the array)
  return false;
}
console.log('in find using 4 and [2,4,6]', find(4, [2,4,6]));
console.log('in find using 5 and [2,4,6]', find(5, [2,4,6]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  // is letter === string[0]? this requires a loop
  for(i = 0; i < string.length; i++) {
    if(letter === string[0]) {
      return true;
    }
    else {
      return false; // why would we put the 'else return false' statement inside the loop vs outside?
    }
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for(number of array) {
    sum += number;
  }
  return sum;
}
console.log('in sumAll using [2,4,6]:', sumAll([2,4,6]));
console.log('in sumAll using [-2,4,6]:', sumAll([-2,4,6]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveNumbersArray(inputArray) {
  let newArray = [];
  // loop thru input array, checking if each index is a positive number
  for(i=0; i < inputArray.length; i++) {
    // if it is a positive number, push to a new array, return the new array
    if(inputArray[i] > 0) {
      newArray.push(inputArray[i]);
    } 
    // decided not to do an else statement because if the number is not positive, nothing happens to the newArray
  }
  // return the new array with only positive numbers. if no positive numbers, return an empty array
  return newArray;
}
console.log('in positiveNumbersArray using [-1,0,2,4,6], expecting [2,4,6]:', positiveNumbersArray([-1,0,2,4,6]));
console.log('in positiveNumbersArray using [0,-1,-2,-4,-6], expecting []:', positiveNumbersArray([0,-1,-2,-4,-6]));
console.log('in positiveNumbersArray using [], expecting []:', positiveNumbersArray([]));
console.log('in positiveNumbersArray using [595,4.523,-0.5,0,7], expecting [595,4.523,7]:', positiveNumbersArray([595,4.523,-0.5,0,7]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
