var serverUrl = 'https://jsonplaceholder.typicode.com/users/21';


const apiCallBtn = document.querySelector('#api-call-btn');
const output = document.querySelector('#output');

apiCallBtn.addEventListener('click' , callApi);

function callApi(){
    fetch(serverUrl)
    .then (res => {
        if (res.status === 404){
            output.innerText = 'Page not found 😢' ;

        } else if (res.status === 403) {
            output.innerText = 'Access to the requested resource is Forbidden'
        } else {
            return res.json()
        }

    })
    .then (data => output.innerText = data.name);
   
}