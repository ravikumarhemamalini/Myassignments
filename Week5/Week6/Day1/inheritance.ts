// Parent Class
class WebComponent {

    selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    click() {
        console.log(`Clicking on component: ${this.selector}`);
    }

    focus() {
        console.log(`Focusing on component: ${this.selector}`);
    }
}


// Child Class - Button
class Button extends WebComponent {

    // Overriding click() method
    click() {
        super.click();  // Calling parent class click() method
        console.log(`Button clicked: ${this.selector}`);
    }
}


// Child Class - TextInput
class TextInput extends WebComponent {

    value: string = "";

    enterText(text: string) {
        this.value = text;
        console.log(`Entering text "${text}" into: ${this.selector}`);
    }
}


// Testing the Components
function testComponents() {

    // Creating Button object
    const loginButton = new Button("#loginButton");

    // Creating TextInput object
    const usernameInput = new TextInput("#username");

    // Button actions
    loginButton.click();
    loginButton.focus();

    // TextInput actions
    usernameInput.enterText("Hema");
    usernameInput.focus();
}


// Calling the function
testComponents();