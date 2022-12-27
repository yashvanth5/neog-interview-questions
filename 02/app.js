var inputOne = document.querySelector("#num1");
var inputTwo = document.querySelector("#num2");

var addBtn = document.querySelector("#add-btn");
var minusBtn = document.querySelector("#minus-btn");
var multiplyBtn = document.querySelector("#multiply-btn");
var divideBtn = document.querySelector("#divide-btn");

var output = document.querySelector('#outputEl');



addBtn.addEventListener ('click' , () => {
   var result = Number(inputOne.value) + Number(inputTwo.value);
    output.innerText = result;
});


minusBtn.addEventListener('click', () => {
    const result = Number(inputOne.value) - Number(inputTwo.value);
    output.innerText = result;
});

multiplyBtn.addEventListener('click', () => {
    const result = Number(inputOne.value) * Number(inputTwo.value);
    output.innerText = result;
});

divideBtn.addEventListener('click', () => {
    const result = Number(inputOne.value) / Number(inputTwo.value);
    output.innerText = result;
});
