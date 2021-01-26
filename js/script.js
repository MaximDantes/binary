//!slider

let currentSlideIndex = 0;
let nextArrow = document.getElementById("next");
let prevArrow = document.getElementById("prev");

nextArrow.addEventListener("click", () => { changeSlide(1); });
prevArrow.addEventListener("click", () => { changeSlide(1); });

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");

    switch (currentSlideIndex + n) {
        case -1: currentSlideIndex = slides.length - 1; break;
        case slides.length : currentSlideIndex = 0; break;
        default : currentSlideIndex += n; break;
    }

    for (let i = 0; i < slides.length; i++)
        slides[i].classList.add("hidden");
    
    slides[currentSlideIndex].classList.remove("hidden");
}

//!tab control

let tabControllers = document.getElementsByClassName("tab-controller");

tabControllers[0].addEventListener("click", () => { changeTab(0); })
tabControllers[1].addEventListener("click", () => { changeTab(1); })
tabControllers[2].addEventListener("click", () => { changeTab(2); })
tabControllers[3].addEventListener("click", () => { changeTab(3); })


function changeTab(n){
    let tabControllers = document.getElementsByClassName("tab-controller");
    let tabs = document.getElementsByClassName("tab");

    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("hidden");
        tabControllers[i].classList.remove("active");
    }

    tabs[n].classList.remove("hidden");
    tabControllers[n].classList.add("active");
}