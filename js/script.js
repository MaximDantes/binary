let currentSlideIndex = 0;

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");

    switch (currentSlideIndex + n) {
        case -1: currentSlideIndex = slides.length - 1; break
        case slides.length : currentSlideIndex = 0; break;
        default : currentSlideIndex += n; break;
    }

    for (let i = 0; i < slides.length; i++)
        slides[i].classList.add("hidden");
    
    slides[currentSlideIndex].classList.remove("hidden");
}


function changeTab(n){
    let tabControllers = document.getElementsByClassName("tab-controller");
    let tabs = document.getElementsByClassName("tab");

    for(i = 0; i < tabs.length; i++) {
        tabs[i].classList.add("hidden");
        tabControllers[i].classList.remove("active");
    }

    tabs[n].classList.remove("hidden");
    tabControllers[n].classList.add("active");
}