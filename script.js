const cal_buttons = document.querySelectorAll(".calculator-button");
const display_output = document.querySelector(".display-output");
let value1;
let result = 0;
let calculate_value;
let operator = "";
let flag = false;
let toggle = false;
let sign_toggle = false;
let decimal_toggle = false;

const calc = (value1, operator, result, calculate_value) => {
  if (operator === "+") {
    value1 = result;
    result = value1 + calculate_value;
    value1 = result;
  } else if (operator === "-") {
    value1 = result;
    if (flag === false) {
      result = calculate_value - value1;
      flag = true;
      value1 = result;
    } else {
      result = value1 - calculate_value;
      value1 = result;
    }
  } else if (operator === "x") {
    if (flag === false) {
      value1 = 1;
      result = value1 * calculate_value;
      value1 = result;
      flag = true;
    } else {
      value1 = result;
      result = value1 * calculate_value;
      value1 = result;
    }
  } else if (operator === "/") {
    if (flag === false) {
      value1 = 1;

      result = calculate_value / value1;
      value1 = result;

      flag = true;
    } else {
      value1 = result;
      result = value1 / calculate_value;
      value1 = result;
    }
  } else if (operator === "%") {
    result = calculate_value / 100;
  }

  return result;
};

cal_buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const button_content = e.target.textContent;
    const prev_value = display_output.innerText;
    if (button_content === "AC") {
      display_output.innerText = "0";
      result = 0;
      flag = false;
      toggle = false;
      sign_toggle = false;
      decimal_toggle = false;
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
      button_content === "0" ||
      button_content === "."
    ) {
      if (prev_value === "0") {
        display_output.innerText = button_content;
      } else {
        if (toggle === true) {
          if (button_content === ".") {
            if (decimal_toggle === false) {
              display_output.innerText = button_content;
              toggle = false;
            }
          } else {
            display_output.innerText = button_content;
            toggle = false;
          }
        } else {
          if (button_content === ".") {
            if (decimal_toggle === false) {
              display_output.innerText = prev_value + button_content;
              decimal_toggle = true;
            }
          } else {
            display_output.innerText = prev_value + button_content;
          }
        }
      }
    } else if (button_content === "-/ +") {
      if (sign_toggle === false) {
        display_output.innerText = "-" + prev_value;
        sign_toggle = true;
      } else {
        if (display_output.innerText[0] === "-") {
          const value = display_output.innerText;
          let newvalue = [...value].slice(1).join("");
          display_output.innerText = newvalue;
          sign_toggle = false;
        }
      }
    } else if (button_content === "C") {
      const value = display_output.innerText;
      if (value === "Infinity" || value === "NaN" || value === "-Infinity") {
        display_output.innerText = "0";
        result = 0;
        flag = false;
        toggle = false;
        sign_toggle = false;
        decimal_toggle = false;
      } else if (value.length === 1) {
        display_output.innerText = "0";
      } else {
        let new_value = value.substring(0, value.length - 1);
        display_output.innerText = new_value;
      }
    } else {
      calculate_value = display_output.innerText;

      calculate_value = Number(calculate_value);

      if (button_content === "+") {
        operator = "+";
        result = calc(value1, operator, result, calculate_value);
        display_output.innerText = "+";
      } else if (button_content === "-") {
        operator = "-";
        result = calc(value1, operator, result, calculate_value);
        display_output.innerText = "-";
      } else if (button_content === "/") {
        operator = "/";
        result = calc(value1, operator, result, calculate_value);
        display_output.innerText = "/";
      } else if (button_content === "x") {
        operator = "x";
        result = calc(value1, operator, result, calculate_value);
        display_output.innerText = "x";
      } else if (button_content === "%") {
        operator = "%";
        result = calc(value1, operator, result, calculate_value);
        display_output.innerText = result;
      }
      if (button_content === "=") {
        result = calc(value1, operator, result, calculate_value);
        display_output.innerText = result;
        result = 0;
        flag = true;
        toggle = false;
      }
      toggle = true;
      decimal_toggle = false;
    }
  });
});
