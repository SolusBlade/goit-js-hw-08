import _ from "lodash";

const formRef = document.querySelector(".feedback-form");
const emailInputRef = document.querySelector('[name="email"]');
const messageInputRef = document.querySelector('[name="message"]'); 
let DATA = JSON.parse(localStorage.getItem("feedback-form-state"));

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', _.throttle(onFormInput, 500));

function onFormSubmit(event){
    event.preventDefault();
    if (DATA && DATA.email && DATA.message){
        console.log(DATA);
        localStorage.removeItem("feedback-form-state");
        formRef.reset();
        DATA = null;
    }
};

function onFormInput(){
    const email = emailInputRef.value;
    const message = messageInputRef.value;
    const formElements = {
        email,
        message,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formElements));
    DATA = JSON.parse(localStorage.getItem("feedback-form-state"));
};

if (DATA && DATA.email){
    emailInputRef.value = DATA.email;
}
if (DATA && DATA.message) {
    messageInputRef.value = DATA.message;
}

