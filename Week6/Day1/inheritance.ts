// Parent Class
class WebComponent {

    selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    click(): void {
        console.log(`Clicking the web component: ${this.selector}`);
    }

    focus(): void {
        console.log(`Focusing on the web component: ${this.selector}`);
    }
}


// Child Class - Button
class Button extends WebComponent {

    // Overriding the click() method
    click(): void {

        // Calling the parent class click() method
        super.click();

        // Additional message for Button
        console.log(`Button clicked successfully: ${this.selector}`);
    }
}


// Child Class - TextInput
class TextInput extends WebComponent {

    value: string = "";

    enterText(text: string): void {

        this.value = text;

        console.log(`Entered text "${this.value}" into: ${this.selector}`);
    }
}


// Test Function
function testComponents(): void {

    // Creating Button object
    const loginButton = new Button("#loginButton");

    // Creating TextInput object
    const usernameInput = new TextInput("#username");


    // Testing Button
    console.log("----- Button Test -----");

    loginButton.click();
    loginButton.focus();


    // Testing TextInput
    console.log("----- Text Input Test -----");

    usernameInput.enterText("Hema");
    usernameInput.focus();
}


// Calling the test function
testComponents();