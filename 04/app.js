var inputBox = document.querySelector("#input-Box");

var btnOne = document.querySelector("#headingOne");
var btnTwo = document.querySelector("#headingTwo");
var btnThree = document.querySelector("#headingThree");

var output = document.querySelector("#outputEl");

inputBox.addEventListener('input' , () => {
    output.innerText = inputBox.value;

}) ;


btnOne.addEventListener ('click' , () => {
    output.innerHTML = "<h1>" + inputBox.value +  "</h1>"
} ) ;


btnTwo.addEventListener ('click' , () => {
    output.innerHTML = "<h2>" + inputBox.value + "</h2>"
});

btnThree.addEventListener ('click' , () => {
    output.innerHTML = "<h3>" + inputBox.value + "</h3>"
});










