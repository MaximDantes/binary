let currentIndex = 0;

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");

    switch (currentIndex + n) {
        case -1: currentIndex = slides.length - 1; break
        case slides.length : currentIndex = 0; break;
        default : currentIndex += n; break;
    }

    for (let i = 0; i < slides.length; i++)
        slides[i].classList.add("hidden");
    
    slides[currentIndex].classList.remove("hidden");
}