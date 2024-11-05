// Query first row of inputs by class
const inputs_1 = document.querySelectorAll('.pin_put');

// Query second row of inputs by class
const inputs_2 = document.querySelectorAll('.pin_put_two');


// Query whole main (for resetting)

// First Row JS
inputs_1.forEach((input_1, key_1) => {
    if (key_1 !== 0) {
        // If a digit is in it then put the focus on first input upon click?
        input_1.addEventListener('click', () => {
            inputs_1[0].focus();
        });
    }
    // Clock the values and the number of digits entered
    input_1.addEventListener('keyup', () => {
        if (input_1.value) {
            console.log("Pin num entered")
            if (key_1 === 3) {
                // Map through the pin field and store it in a variable
                const pinsOne = [...inputs_1].map((input_1) => input_1.value).join("");
                // Test print in the console
                console.log(`The First Pin Number is: ${pinsOne}`);
                // BELOW is where you make it jump to the next pin field
                inputs_2[0].focus();
            } else {
                // Make it jump to the next square
                inputs_1[key_1 + 1].focus();
            }
        }
    });
});

// Second Row JS
inputs_2.forEach((input_2, key_2) => {
    if (key_2 !== 0) {
        input_2.addEventListener('click', () => {
            inputs_2[0].focus();
        });
    }
    // Clock the values and the number of digits entered
    input_2.addEventListener('keyup', () => {
        if (input_2.value) {
            console.log("Pin 2 Num entered");
            if (key_2 === 3) {
                // Map through the pin field and store it in a variable
                const pinsTwo = [...inputs_2].map((input_2) => input_2.value).join("");
                // Test print in the console
                console.log(`The Second Pin Number is: ${pinsTwo}`);
            } else {
                // Make it jump to the next square
                inputs_2[key_2 + 1].focus();
            }
        }
    });
});

