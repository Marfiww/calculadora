const resultado = document.getElementById("resultado");

let operador = false;

function insert(n) {
  if (n === "+" || n === "-" || n === "x" || n === " ÷ ") {
    if (operador) return;
    operador = true;
  } else {
    operador = false;
  }
  resultado.append(n);
}

function clean() {
  resultado.innerHTML = "";
}
function apagar() {
  let text = resultado.innerText.trim();
  resultado.innerText = text.slice(0, -1);
 
  if (text.slice(-1) === "+" ||text.slice(-1) === "-" ||text.slice(-1) === "x" ||text.slice(-1) === "÷"
  ) {
    isOperatorAdded = true; 
  } else {
    isOperatorAdded = false; 
  }
}

function calculate() {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(
      resultado.replace("x", "*").replace("÷", "/")
    );
  } else {
  }
}
