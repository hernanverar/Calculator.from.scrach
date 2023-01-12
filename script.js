function add(num1,num2){ 
  return num1 + num2;
}
function subtract(num1,num2){ 
  return num1 - num2;
}
function multyply(num1,num2){ 
  return num1 * num2;
}
function divide(num1,num2){ 
  return num1 / num2;
}
function numberSelect(event){
event.preventDefault();
const Selection = document.querySelector("input[name='operator']:checked").value;
let box1 = parseInt(document.getElementById("input1").value);
let box2 = parseInt(document.getElementById("input2").value);

}




window.addEventListener("load", function(event){
  document.getElemntById("Calculator").addEventListener("submit", numberSelect)

}); 



