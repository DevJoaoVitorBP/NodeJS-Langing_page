document.addEventListener('DOMContentLoaded', function() {
    // Get the input field and button
    var inputEmail = document.querySelector('.section__container-left-input input[type="email"]');
    var sendEmailButton = document.querySelector('.section__container-left-input .btn');

    // Add a click event to the button
    sendEmailButton.addEventListener('click', function(){
        var email = inputEmail.value;
        var emailRegex = /\S+@\S+\.\S+/;  // Regex to validate email
        var emailIsValid = emailRegex.test(email); 
        
        // If the email is valid, show an alert message saying that the email was sent
        if (emailIsValid) {
            alert('Email sent!');
        } else {
            // If the email is not valid, show an alert message saying that the email is not valid
            alert('Please enter a valid email address.');
        }
    });
});