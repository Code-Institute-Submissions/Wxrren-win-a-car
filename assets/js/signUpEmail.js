let contactFormData = null;

function sendSignUpEmail(contactForm) {

    contactFormData = {
        name: contactForm.name.value,
        emailaddress: contactForm.emailaddress.value
    };

    emailjs.send("service_8398az5", "template_h2fjv69", {
        from_name: "Warren @ Win a Car",
        to_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        message: "Thanks for Signing up! Good luck with your game, remember - You only get 5 attempts!",
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;  // To block from loading a new page
}

