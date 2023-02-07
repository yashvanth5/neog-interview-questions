var inputBox = document.querySelector("#input-box");

var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");

var output = document.querySelector("#outputEl")

inputBox.addEventListener('input' , () => {
    output.innerText = inputBox.value;

});

red.addEventListener ('click' , () => {

    output.style.color = 'red' ;

});

green.addEventListener ('click' , () => {

    output.style.color = 'green' ;

});

blue.addEventListener ('click' , () => {

    output.style.color = 'blue' ;

});

