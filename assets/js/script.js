document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        const navToggle = document.createElement("div");
        navToggle.classList.add("nav-toggle");
        navToggle.innerHTML = "<i class='fas fa-bars'></i>";
        navbar.prepend(navToggle);

        navToggle.addEventListener("click", () => {
            document.querySelector(".navbar ul")?.classList.toggle("active");
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const targetElement = document.getElementById(anchor.getAttribute("href").substring(1));
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for reaching out! We will get back to you soon.");
            contactForm.reset();
        });
    }

    // Event Image Hover Effect
    document.querySelectorAll(".event img").forEach(img => {
        img.style.transition = "transform 0.3s ease";
        img.addEventListener("mouseenter", () => img.style.transform = "scale(1.05)");
        img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
    });
});
