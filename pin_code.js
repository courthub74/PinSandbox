// Query first row of inputs by class
const inputs_1 = document.querySelectorAll('.pin_put');

// Query second row of inputs by class
const inputs_2 = document.querySelectorAll('.pin_put_two');


// Query whole main (for resetting)

// First Row JS
// forEach - input_1 is the callback | key_1 is the argument
inputs_1.forEach((input_1, key_1) => {
    
    // Clock the values and the number of digits entered into the inputs
    input_1.addEventListener('keyup', () => {
        if (input_1.value) {
            console.log("Pin num entered")
            // if all 4 of the inputs are filled
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

    // Clock the values and the number of digits entered into the inputs
    input_2.addEventListener('keyup', () => {
        if (input_2.value) {
            console.log("Pin 2 Num entered");
            // if all 4 of the inputs are filled
            if (key_2 === 3) {
                // Map through the pin field and store it in a variable
                const pinsTwo = [...inputs_2].map((input_2) => input_2.value).join("");
                // Map through the first pin field in order to compare

                // Test print in the console
                console.log(`The Second Pin Number is: ${pinsTwo}`);
            } else {
                // Make it jump to the next square
                inputs_2[key_2 + 1].focus();
            }
        }
    });
});

// re forEach for each row to compare

// First row
inputs_1.forEach((input_first_row, key_first_row) => {
    // Record the values entered into all 4 digits
    input_first_row.addEventListener('keyup', () => {
        // So if Input has a value
        if (input_first_row.value) {
            // Test Print
            console.log("first row num for Comparison entered");
            // if all 4 inputs are filled 
            if (key_first_row === 3) {
                // Map through the pin field and store it in a variable
                const pinsOne_compare = [...inputs_1].map((input_first_row) => input_first_row.value).join("");
                // Test print to the console
                console.log(`This ${pinsOne_compare} is the Pins_One Compare`);
            }
        }
    });
});

// Second row
inputs_2.forEach((input_second_row, key_second_row) => {
    // Record the values entered into all 4 digits
    input_second_row.addEventListener('keyup', () => {
        // So if Input has a value
        if (input_second_row.value) {
            // Test Print
            console.log("second row num for Comparison entered");
            // if all 4 inputs are filled
            if (key_second_row === 3) {
                // Map through the pin field and store it in a variable
                const pinsTwo_compare = [...inputs_2].map((input_second_row) => input_second_row.value).join("");
                // Test print to the console
                console.log(`This ${pinsTwo_compare} is the Pins_Two Compare`);
                // Now Lets bring the first row in here to compare the two
                inputs_1.forEach((input_first_row, key_first_row) => {
                    // If input has a value
                    if (input_first_row.value) {
                        // If all inputs filled
                        if (key_first_row === 3) {
                            // Map through the pin field and store it in a variable
                            const pinsOne_compare = [...inputs_1].map((input_first_row) => input_first_row.value).join("");
                            // Test Print to the console
                            console.log(`This ${pinsOne_compare} is the first`);
                            console.log(`This is ${pinsTwo_compare} is the second`);
                            // Try to compare the Pin numbers
                            if (pinsTwo_compare === pinsOne_compare) {
                                // Test print
                                console.log("The Pins Match");
                            } else {
                                console.log("The Pins Don't match");
                            }
                        }
                    }
                })
            }
        }
    })
})


// Play with mapping Arrays
const users = [
    {
        name: "Courtney",
        yearBorn: 1976,
    },
    {
        name: "Helen",
        yearBorn: 1984,
    }
];

// In summaries variable, map through users data
const summaries = users.map(user => {
    return `${user.name} was born in ${user.yearBorn}`;
});

console.log(summaries);

