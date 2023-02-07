var apiBtn = document.querySelector("#api-call-btn");
var output = document.querySelector("#output");

var serverUrl = 'https://api.agify.io/';

apiBtn.addEventListener('click' , callapi);

function callapi(){
    fetch(serverUrl)
    .then(res => res.json())
    .then(data => output.innerText = data.error)
    .catch(error => output.innerText = error)
};