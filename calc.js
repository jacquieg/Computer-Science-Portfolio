// variables for answers and display
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

//function for do math
button.addEventListener("click", doMath);

//function starts here
function doMath() {
    
    //addition value
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer; 
    }
    
    //subtraction value
    if (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    
    //multiplication value
    if (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    
    //division value
    if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value == "^"){
        answer = Math.pow(parseInt(input1.value), parseInt(input2.value));
        display.innerHTML = answer;
    }
}

