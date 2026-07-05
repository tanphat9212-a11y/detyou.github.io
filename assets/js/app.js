/* ==========================
    DETYOU SHOP
========================== */

document.addEventListener("DOMContentLoaded",()=>{

    console.log("DetYou Shop Started");

});
 

/*======================================================

    DETYOU SHOP
    APP
    Version : 1.0

======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initStickyHeader();

    initMobileMenu();

    initBackToTop();

    initScrollAnimation();

});

/*==========================================

    STICKY HEADER

==========================================*/

function initStickyHeader() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

/*==========================================

    MOBILE MENU

==========================================*/

function initMobileMenu() {

    const button = document.querySelector(".mobile-menu");

    const menu = document.querySelector(".menu");

    if (!button || !menu) return;

    button.addEventListener("click", () => {

        menu.classList.toggle("show");

        button.classList.toggle("active");

    });

}

/*==========================================

    BACK TO TOP

==========================================*/

function initBackToTop() {

    const button = document.createElement("button");

    button.className = "back-top";

    button.innerHTML =

    '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(button);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==========================================

    SCROLL ANIMATION

==========================================*/

function initScrollAnimation() {

    const elements = document.querySelectorAll(

        ".animate"

    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.2

        }

    );

    elements.forEach(item => {

        observer.observe(item);

    });

}