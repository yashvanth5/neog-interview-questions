const passWord = document.querySelector("#password-box");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");
 
submitBtn.disabled = true;                                               //its disabled//

submitBtn.addEventListener('click' , greaterThanTen);
passWord.addEventListener('input' , enableSubmitBtn);                    //here its input//



function greaterThanTen (){         
    if (passWord.value.length > 10 ){                                          // its length//
        output.innerText = "password created"
    } else {
        output.innerText = "characters should be more than ten"
    }
};



function enableSubmitBtn (){
    if (passWord.value.length > 10 ){
        submitBtn.disabled = false;
        passWord.style.backgroundColor = 'green';

    } else {
        submitBtn.disabled = true;
        passWord.style.backgroundColor = 'red';
    }

}