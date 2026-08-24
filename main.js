const navToggle = document.querySelector('[aria-controls="primary-nav"]'
);
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
    // check if the navigation is opened
    const isNavOpened = navToggle.getAttribute("aria-expanded");
    if (isNavOpened === "false") {
        navToggle.setAttribute("aria-expanded", "true");
    } else {
        navToggle.setAttribute("aria-expanded", "false");
    }
});