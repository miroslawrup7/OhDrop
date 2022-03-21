//ACCORDION

const accBoxes = document.querySelectorAll(".effects__faq-accordion");

accBoxes.forEach(function (accBox) {
    accBox.classList.remove("active");
});

const accTitles = document.querySelectorAll(".accordion");

accTitles.forEach(function (accTitle) {
    accTitle.addEventListener("click", function (e) {
        accBoxes.forEach(function (accBox) {
            if (e.target.parentElement === accBox) {
                accBox.classList.toggle("active");
            } else {
                accBox.classList.remove("active");
            }
        });
    });
});

// MOBILE MENU
const nav = document.querySelector(".navigation");
const ham = document.querySelector(".hamburger");
// const mobileClose = document.querySelector(".mobile-close");
const dropMenu = document.querySelectorAll(".sub-nav-btn");

ham.addEventListener("click", (e) => {
    nav.classList.add("mobile-open");
    // document.body.classList.add("no-scroll");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".navigation") && !e.target.closest(".hamburger")) {
        nav.classList.remove("mobile-open");
        // document.body.classList.remove("no-scroll");
        dropMenu.forEach((element) => {
            element.nextElementSibling.classList.remove("drop-down");
        });
    }
});

dropMenu.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.target.nextElementSibling.classList.toggle("drop-down");
        element.classList.toggle("drop-menu-down");
    });
});
