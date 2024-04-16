let signUp = document.getElementById("sign-up-modal")

function signUpModal() {
    signUp.classList.add('sign-up-active');
}

function closeSignUpModal() {
    signUp.classList.remove('sign-up-active');
}