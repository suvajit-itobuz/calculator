
const cal_buttons = document.querySelectorAll(".calculator-button");
const display_output = document.querySelector(".display-output");
let result = 0;
let operator = "";
let value2;
let value1 = 0;
const calc = (value1, value2, operator, result, calculate_value) => {
    if (operator == "+") {
        value1 = result;
        result = value1+ calculate_value;
        value1=result;
        return result;
    }
};
cal_buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const button_content = e.target.textContent;
        const prev_value = display_output.innerText;
        if (button_content === "AC") {
            display_output.innerText = "0";
        } else if (
            button_content === "1" ||
            button_content === "2" ||
            button_content === "3" ||
            button_content === "4" ||
            button_content === "5" ||
            button_content === "6" ||
            button_content === "7" ||
            button_content === "8" ||
            button_content === "9" ||
            button_content === "0"
        ) {
            if (prev_value == 0) {
                display_output.innerText = button_content;
            } else {
                display_output.innerText = prev_value + button_content;
            }
        } else {
            let calculate_value = display_output.innerText;

            calculate_value = Number(calculate_value);


            if (button_content === "+") {
                operator = "+";
                calc(value1, value2, operator, result, calculate_value);
            } else if (button_content === "-") {
                result = result - calculate_value;
            } else if (button_content === "/") {
                result = result / calculate_value;
            } else if (button_content === "x") {
                result = result * calculate_value;
            }

            display_output.innerText = "";
            if (button_content === "=") {
                result = calc(value1, value2, operator, result, calculate_value);
                display_output.innerText = result;
                result = 0;
            }
        }
    });
});
