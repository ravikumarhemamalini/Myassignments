// Function to launch a browser
function launchBrowser(browserName) {
    // Check whether the browser name is Chrome
    if (browserName == "chrome") {
        console.log("The Browser is launched")
    }

    else {
        console.log("The Browser is not chrome")
    }
}

// Function to run different types of tests
function runTests(testType) {
    // Switch statement to identify the test type
    switch (testType) {
        case "smoke":
            console.log("This is Smoke Testing")
            break;
        case "sanity":
            console.log("This is Sanity Testing")
            break;
        case "regression":
            console.log("This is regression Testing")
            break;
        default:
            console.log("This is Smoke Testing")
            break;
    }
}
// Calling the launchBrowser function
launchBrowser("chrome")
launchBrowser("edge")
// Calling the runTests function
runTests("smoke")
runTests("sanity")
runTests("regression")
// Calling with another value will execute the default case
runTests("functional")
