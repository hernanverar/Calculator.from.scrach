function add(num1,num2){ 
  return num1 + num2;
}
function subtract(num1,num2){ 
  return num1 - num2;
}
function multiply(num1,num2){ 
  return num1 * num2;
}
function divide(num1,num2){ 
  return num1 / num2;
}
function numberSelect(event){
  event.preventDefault();
  const selection = document.querySelector("input[name='operator']:checked").value;
  let box1 = parseInt(document.getElementById("input1").value);
  let box2 = parseInt(document.getElementById("input2").value);
  let result;
  if (selection==="add"){
    result = add(box1,box2);
  } else if(selection==="subtract"){
    result = subtract(box1,box2);
  } else if (selection==="multiply"){ 
    result = multiply(box1,box2);
  } else {
    result = divide(box1,box2);
  }
  document.querySelector(".result").innerHTML=result
}




window.addEventListener("load", function(event){
  document.getElementById("Calculator").addEventListener("submit", numberSelect)

}); 



