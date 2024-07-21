// 1. Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function mycities(){
let array=["Karachi", "Lahore", "Peshawar", "Quetta", "Islamabad"]
array.reverse();
console.log(array)
}

mycities()


// 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

function filters(){
let input=parseInt(prompt("Enter five capital cities names of Pakistan"));
let array=[];
array.push(input);
console.log(array)
}

filters(); 

// 3. Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.

function countvowels(str){
str=str.toLowerCase();
let vowelCount=0;
let vowels=["a", "e", "i", "o","u"];
for (let char of str){
    if (vowels.includes(char)){
        vowelCount++;
    }
}
return vowelCount;
}
let string=("Karachi is the beautiful city");
console.log("Number of vowels:", countvowels(string)); 

countvowels(); 

// 4. Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.

function palindrome(){
let input= prompt["Enter a palindrome"]
let str="";
for (let i=input.lenght -1; 1>=0; 1--){
str +=input[i];
}
return str === input;
console.log(palindrome());
} 
palindrome();

// 5. Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.

function checkrang(){
let num1=prompt("enter a number to check range");
let num2=prompt("enter another number to check range");
if (num1<=50 && num1<=99 || num2>=50 && num2 <=99){
}
}
console.log(checkrang()) 

// 6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.

function min(){
let array=[45, 87, 65, 95,30];
let min=0;
for (let i=1; i< array.lenght; i++){
if (array[i]<min){
min=array[i];
}
}
return min;
}
console.log(min())

// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.

function generateUpdatedString(originalString) {
if (originalString.length >= 3) {
let lastThreeCharacters = originalString.slice(-3);
let updatedString = lastThreeCharacters.repeat(4);
return updatedString;
} else {
return "Original string length must be 3 and above.";
}
}
let originalStr = "JavaScript";
let updatedStr = generateUpdatedString(originalStr);
console.log(`Original String: ${originalStr}`);
console.log(`Updated String: ${updatedStr}`);

//8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function angleType(angle) {
if (angle > 0 && angle < 90) {
return "Acute angle";
} else if (angle === 90) {
return "Right angle";
} else if (angle > 90 && angle < 180) {
return "Obtuse angle";
} else if (angle === 180) {
return "Straight angle";
} else {
return "Angle not within the valid range (0 to 180 degrees)";
    }
}
let angle1 = 45;
let angle2 = 90;
let angle3 = 120;
let angle4 = 180;
console.log(`${angle1} degrees is a ${angleType(angle1)}.`);  // Output: 45 degrees is a Acute angle.
console.log(`${angle2} degrees is a ${angleType(angle2)}.`);  // Output: 90 degrees is a Right angle.
console.log(`${angle3} degrees is a ${angleType(angle3)}.`);  // Output: 120 degrees is a Obtuse angle.
console.log(`${angle4} degrees is a ${angleType(angle4)}.`);  // Output: 180 degrees is a Straight angle.

// 9. Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.

function findSmallestRoundNumber(value) {
if (isRoundNumber(value)) {
return value;
}
let nextMultipleOf10 = Math.ceil(value / 10) * 10;
return nextMultipleOf10;
}

// Function to check if a number is a round number
function isRoundNumber(num) {
return num % 10 === 0;
}
let givenValue = 592;
let smallestRoundNumber = findSmallestRoundNumber(givenValue);
console.log(`The smallest round number not less than ${givenValue} is ${smallestRoundNumber}`);

// 10. Write a JavaScript program to find the index of an array item in a for loop.

function findIndex(array, itemToFind) {
for (let i = 0; i < array.length; i++) {
if (array[i] === itemToFind) {
return i;
}
}
return -1;
}
let myArray = [10, 20, 30, 40, 50];
let item = 30;
let index = findIndex(myArray, item);
console.log(`Index of ${item} in the array: ${index}`);