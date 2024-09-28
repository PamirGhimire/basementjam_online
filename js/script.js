// Example JavaScript functionality
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website is fully loaded and ready!");
});


function toggleLanguageOnHomepage() {
    var deutsch_text = document.getElementById("Intro_text_Deutsch");
    var english_text = document.getElementById("Intro_text_English");
    var button = event.target;

    if (deutsch_text.style.display === "none") {
        deutsch_text.style.display = "block";
        english_text.style.display = "none";
        button.innerHTML = "English";
    } else {
        deutsch_text.style.display = "none";
        english_text.style.display = "block";
        button.innerHTML = "Deutsch";
    }
}
