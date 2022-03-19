const accBoxes = document.querySelectorAll(".effects__faq-accordion");

accBoxes.forEach(function (accBox) {
    accBox.classList.remove("active");
});

const accTitles = document.querySelectorAll(".accordion");

accTitles.forEach(function (accTitle) {
    accTitle.addEventListener("click", function (e) {
        // if (e.target.classList.contains("active")) {
        // }

        accBoxes.forEach(function (accBox) {
            if (e.target.parentElement === accBox) {
                accBox.classList.toggle("active");
            } else {
                accBox.classList.remove("active");
            }
        });

        // e.target.parentElement.classList.add("active");
    });
});
