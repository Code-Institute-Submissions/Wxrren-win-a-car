function sendSignUpEmail(contactForm) {
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

function sendMail(contactForm) {
    emailjs.send("service_8398az5", "template_tyxq0kh", {
        from_name: "Warren @ Win a car!",
        to_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        message: "Congratulations! You have won a 2023 BMW M5 Competition in shiny red paint. To claim this prize, give our team a call on: 01446 734010",
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
