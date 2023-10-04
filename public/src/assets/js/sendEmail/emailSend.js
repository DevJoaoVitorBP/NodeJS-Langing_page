document.addEventListener('DOMContentLoaded', function() {
    var inputEmail = document.querySelector('.section__container-left-input input[type="email"]');
    var sendEmailButton = document.querySelector('.section__container-left-input .btn');

    sendEmailButton.addEventListener('click', function(){
        var email = inputEmail.value;
        var emailRegex = /\S+@\S+\.\S+/;
        var emailIsValid = emailRegex.test(email);

        if (emailIsValid) {
            alert('Email sent!');
        } else {
            alert('Please enter a valid email address.');
        }
    });
});