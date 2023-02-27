import _ from "lodash";

const formRef = document.querySelector(".feedback-form");
const emailInputRef = document.querySelector('[name="email"]');
const messageInputRef = document.querySelector('[name="message"]'); 

let data;

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', _.throttle(onFormInput, 500));

function onFormSubmit(event){
    event.preventDefault();
    if (data){
        console.log(data);
        localStorage.removeItem("feedback-form-state");
        formRef.reset();
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
    data = JSON.parse(localStorage.getItem("feedback-form-state"));
};

function onFormUpload(){
    if (data){
        emailInputRef.value = data.email;
        messageInputRef.value = data.message;
    }
}
onFormUpload()
