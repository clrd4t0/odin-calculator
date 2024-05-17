// Input codes
let buffer = {
    valueA: 0,
    valueB: 0,
    result: 0,
    operator: null,
    inputField: 1,
}; 

function inputDigit(value){
    if (buffer.inputField === 1) {
        if (buffer.valueA.toString().length < 9) {
            buffer.valueA = buffer.valueA * 10 + +value;
            display.textContent = buffer.valueA
        }
    } else {
        if (buffer.valueB.toString().length < 9) {
            buffer.valueB = buffer.valueB * 10 + +value;
            display.textContent = buffer.valueB
        }
    }
}

// querySelectors
display = document.querySelector("#display");

numericalKeys = document.querySelectorAll(".numerical");
decimalButton = document.querySelector("#keyDecimal");

addButton = document.querySelector("#keyAdd");
subtractButton = document.querySelector("#keySubtract");
multiplyButton = document.querySelector("#keyMultiply");
divideButton = document.querySelector("#keyDivide");
equalButton = document.querySelector("#keyEquals");

backspaceButton = document.querySelector("#keyDelete");
acButton = document.querySelector("#keyAC");
ceButton = document.querySelector("#keyCE");

// eventListeners
numericalKeys.forEach(key => {
    key.addEventListener("click", () => inputDigit(key.textContent));
})
decimalButton.addEventListener("click", () => addDecimal());

addButton.addEventListener("click", () => {
    if (buffer.inputField === 2) {evaluate(); buffer.valueA = buffer.result; buffer.valueB = 0;}
    buffer.operator = "add"; buffer.inputField = 2
});
subtractButton.addEventListener("click", () => {
    if (buffer.inputField === 2) {evaluate(); buffer.valueA = buffer.result; buffer.valueB = 0;}
    buffer.operator = "subtract"; buffer.inputField = 2
});
multiplyButton.addEventListener("click", () => {
    if (buffer.inputField === 2) {evaluate(); buffer.valueA = buffer.result; buffer.valueB = 0;}
    buffer.operator = "multiply"; buffer.inputField = 2
});
divideButton.addEventListener("click", () => {
    if (buffer.inputField === 2) {evaluate(); buffer.valueA = buffer.result; buffer.valueB = 0;}
    buffer.operator = "divide"; buffer.inputField = 2
});
equalButton.addEventListener("click", () => evaluate());

acButton.addEventListener("click", () => clearAll());
ceButton.addEventListener("click", () => clearEntry());
backspaceButton.addEventListener("click", () => backspace());

// Evaluation codes

function evaluate(){
    if (buffer.operator === "add") {buffer.result = buffer.valueA + buffer.valueB;}
    else if (buffer.operator === "subtract") {buffer.result = buffer.valueA - buffer.valueB;}
    else if (buffer.operator === "multiply") {buffer.result = parseFloat((buffer.valueA * buffer.valueB).toString().substring(0,9))}
    else if (buffer.operator === "divide") {buffer.result = parseFloat((buffer.valueA / buffer.valueB).toString().substring(0,9));}
    display.textContent = buffer.result;
    return buffer.result;
}

function clearAll(){
    buffer.valueA = 0;
    buffer.valueB = 0;
    buffer.result = 0;
    buffer.inputField = 1;
    buffer.operator = null;
    display.textContent = 0;
}

function clearEntry(){
    if (buffer.inputField === 1) {buffer.valueA = 0; display.textContent = buffer.value;}
    else {buffer.valueB = 0; display.textContent = buffer.valueB;}
}

function backspace(){
    let target;
    buffer.inputField === 1 ? target = buffer.valueA : target = buffer.valueB;
    target = target.toString();
    if (target.length > 1) {
        target = target.substring(0, target.length - 1);
        target = parseFloat(target);
    } else {
        target = 0;
    }
    buffer.inputField === 1 ? buffer.valueA = target : buffer.valueB = target;
    display.textContent = target;
}

function addDecimal(){
    let target;
    buffer.inputField === 1 ? target = buffer.valueA : target = buffer.valueB;
    target = target.toString().split("");
    console.table(target);
    if (!target.includes(".")) {target.push(".");}
    target = target.join("");
    buffer.inputField === 1 ? buffer.valueA = target : buffer.valueB = target;
    display.textContent = target;
}