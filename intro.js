// validation first name and last name

let firstName = document.querySelector("#firstname");


let lastName = document.querySelector("#lastname");

let email = document.querySelector("#email-address");

let password = document.querySelector("#password")

let form = document.querySelector(".form");

// errors

form.addEventListener("submit", e =>{
    e.preventDefault();

    validateInputs();
});

// error function
let setError  = (element, message)=>{
    let label = element.parentElement;
    let errorDisplay = label.querySelector(".error");
    errorDisplay.innerText = message;

    label.classList.add("error");
    label.classList.remove("success");

    let icon  = label.querySelector(".icon-error");
    
    icon.classList.add("active");
    console.log(label);
}

//sucess function
let setSuccess = (element) => {
    let label = element.parentElement;
    let errorDisplay = label.querySelector(".error");
    errorDisplay.innerText = "";

    label.classList.add("success");
    label.classList.remove("error");

    let icon  = label.querySelector(".icon-error");
    icon.classList.remove("active");
}

function validateInputs(){
    let firstNameValue = firstName.value.trim();
    let regex1Names = /[0-9]/i;
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    // for first name validation
    if(firstNameValue == ""){
        setError(firstName, "First Name should not be empty");
    }else{
        if(regex1Names.test(firstNameValue)){
            setError(firstName, "First Name should not contain a number")
        }else{
            setSuccess(firstName);
        }
    }
    
    // for lastName validation 
    if(lastNameValue == ""){
        setError(lastName, "Last Name should not be empty");
    }else{
        if(regex1Names.test(lastNameValue)){
            setError(lastName, "Last Name should not contain a number")
        }else{
            setSuccess(lastName);
        }
    }

    // email address verification
    if(emailValue.indexOf("@") < 1){
        setError(email, "Please provide a valid email")
    }else if(emailValue.indexOf(".") <= emailValue.indexOf("@") + 2){
        setError(email, "Please provide a valid email")
    }else if(emailValue.indexOf(".") === emailValue.length - 1){
        setError(email, "Please provide a valid email")
    }else{
        setSuccess(email);
    }

    // password validation
    if(passwordValue == ""){
        setError(password, "Password cannot be empty");
    }else if(passwordValue.length < 8 && passwordValue.length > 1){
        setError(password, "Password must be at least 8 characters");
    }else{
        setSuccess(password);
    }
}