// Select all nav links (updated to match HTML class "nav-link")
const navLinks = document.querySelectorAll(".navbar .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// helper to toggle mobile menu class safely
function toggleMobileMenu(forceState) {
    if (forceState === undefined) {
        document.body.classList.toggle("show-mobile-menu");
    } else if (forceState) {
        document.body.classList.add("show-mobile-menu");
    } else {
        document.body.classList.remove("show-mobile-menu");
    }
}

// attach handlers only when elements exist
if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => toggleMobileMenu());
}

if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => toggleMobileMenu(false));
}

// Close the mobile menu when a navigation link is clicked
if (navLinks && navLinks.length) {
    navLinks.forEach((link) => {
        link.addEventListener("click", () => toggleMobileMenu(false));
    });
}

// Highlight the active navigation link
const currentLocation = window.location.href;
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
});

// Contact form functionality
const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        alert('Thank you! Your message has been sent.');
        contactForm.reset();
    });
}

const textarea = document.getElementById("message");

if (textarea) {
    textarea.style.height = textarea.offsetHeight + "px";

// Inquiry form 
    textarea.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px"; 
    });
}

function sendEmail() {
const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    time: new Date().toLocaleString(),
    message: document.getElementById("message").value
};

    emailjs.send("service_quh2898", "template_65v41od", params)
    .then(() => {
        alert("Email Sent!");
    })
    .catch(error => {
        console.error("FAILED...", error);
        alert("Error sending email. Check console for details.");
    });
}

// Scroll to map when button is clicked
const mapButton = document.getElementById("map-button");
const mapSection = document.getElementById("map");

if (mapButton) {
    mapButton.addEventListener("click", () => {
        mapSection.scrollIntoView({ behavior: "smooth" });
    });
}

