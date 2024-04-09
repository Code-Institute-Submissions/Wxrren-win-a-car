let darkMode = document.getElementsByTagName("body")[0];
let lightMode = document.getElementById("moon-toggle");


lightMode.addEventListener('click', function() {
    lightMode.classList.toggle("light-theme");
    darkMode.classList.toggle("night-theme");
    if(document.body.classList == "night-theme") {
        lightMode.src = "assets/images/sun-logo.webp";
    } else {
        lightMode.src = "assets/images/moon-logo.webp";
    }
})