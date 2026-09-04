// function to check Palindrome

function isPalindrome(str) {

    // reverse the string
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    // Check original and reverse are same
    if (str === reverse) {
        return true;
    }
    else {
        return false;
    }

}
//call the function and print
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))