// document.addEventListener("scroll", () => {
//     const elements = document.querySelectorAll(".fade-in");
//     elements.forEach(el => {
//         const position = el.getBoundingClientRect().top;
//         const screenHeight = window.innerHeight;
//         if (position < screenHeight - 100) {
//             el.classList.add("visible");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const phoneLink = document.getElementById("copy-phone");
    const toast = document.getElementById("toast");
    const phoneNumber = "+38763563859";

    phoneLink.addEventListener("click", (e) => {
        e.preventDefault();

        navigator.clipboard.writeText(phoneNumber).then(() => {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");

    leftBtn.addEventListener("click", () => {
        container.scrollBy({ left: -320, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        container.scrollBy({ left: 320, behavior: "smooth" });
    });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown .dropbtn");
const dropdownParent = document.querySelector(".dropdown");

// toggle meni
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// dropdown na mobitelu (klik umjesto hover)
dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownParent.classList.toggle("active");
    }
});