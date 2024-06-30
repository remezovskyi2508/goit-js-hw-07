const form = document.querySelector(".login-form");

const btn = document.querySelector(".button[type='submit']");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;

    if (emailValue === "" || passwordValue === "") {
        alert("All form fields must be filled in");
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue
    };

     // Log object to console
    console.log(formData);
    
    // Reset form
    form.reset();

});