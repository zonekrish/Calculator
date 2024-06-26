var oper = "";
var final = 0;

function displayItem(value) {
    document.getElementById("disp").textContent+=value;

}

function operate(operation) {
    let val = parseInt(document.getElementById("disp").textContent);
    oper = "" + operation;
    final = val;
    clear();

}

function clear() {
    document.getElementById("disp").textContent="";
}

function equal() {
    let val = parseInt(document.getElementById("disp").textContent);
    switch (oper) {
        case "add":
            final+=val;
            break;
        case "subtract":
            final-=val;
            break;
        case "multiply":
            final*=val;
            break;
        case "divide":
            final/=val;
            break;

    }

    document.getElementById("disp").innerHTML=""+final;

}