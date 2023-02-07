var inputBox= document.querySelector("#input-text");
var addBtn = document.querySelector("#add-btn");
var minusBtn = document.querySelector("#minus-btn");
var outputEl = document.querySelector("#output");

let fontSize = 18;

inputBox.addEventListener('input', () => {
    outputEl.innerText = inputBox.value;
});


addBtn.addEventListener('click' , (increseFontSize) );

function increseFontSize(){
    fontSize+=2;
    outputEl.style.fontSize = fontSize+'px'; 



}

minusBtn.addEventListener ('click' ,  (decreseFontSize));


function decreseFontSize(){
    fontSize-=2;
    outputEl.style.fontSize = fontSize+'px';
}





