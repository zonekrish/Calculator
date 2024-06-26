var oper = "";
var final = 0;

function displayItem(value) {
    document.getElementById("disp").textContent+=value;

}

function add() {
    let val = parseInt(document.getElementById("disp").textContent);
    oper = "add";
    final = val;
    document.getElementById("disp").textContent = 0;

}

function clear() {
    document.getElementById("disp").innerHTML="";
}

function equal() {
    let val = parseInt(document.getElementById("disp").textContent);
    switch (oper) {
        case "add":
            final+=val;


    }

    document.getElementById("disp").innerHTML=""+final;

}