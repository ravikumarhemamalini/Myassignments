/* // Declare and initialize the string
let s = "Hello World"
// Remove spaces in above string
s = s.trim()
// Split the string into an array of words
let words = s.split(" ");
// Get the last word from the array
let lastwords = words[words.length - 1];
// Find the length of the last word
let result = lastwords.length
// Print the result
console.log(result) */

//Trying to write a single code for both strings by using function

// function to find the length of the word
function lengthOfLastWords(s) {
    // Remove spaces in above string
    s = s.trim();
    // Split the string into an array of words
    let words = s.split(" ");
    // Get the last word from the array
    let lastWords = words[words.length - 1];

    // Return the length of the last word
    return lastWords.length;
}
//example 1
console.log(lengthOfLastWords("Hello World"));
//example 2
console.log(lengthOfLastWords("fly me to the moon"));

// Anagram check

// function to check whether its anagram

function isAnagram(string1, string2) {

    // Convert both strings to lowercase and sort the characters    
    let firstString = string1.toLowerCase().split("").sort().join("");
    let secondString = string2.toLowerCase().split("").sort().join("");

    // Compare the sorted strings
    return firstString === secondString
}

// Call the function and print the result
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));


