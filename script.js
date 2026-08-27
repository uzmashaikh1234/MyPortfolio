// =============================
// CONTACT FORM
// =============================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting me! " +
            "I will get back to you soon."
        );

        this.reset();

    });


// =============================
// MOBILE NAVBAR
// =============================

const navLinks =
    document.querySelectorAll(".nav-link");

const navbar =
    document.querySelector(".navbar-collapse");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        if (navbar.classList.contains("show")) {

            const collapse =
                new bootstrap.Collapse(navbar);

            collapse.hide();

        }

    });

});