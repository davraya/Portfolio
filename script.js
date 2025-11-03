// Task Management Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Dev Journey Slideshow - Desktop
let slideIndexDev = 1;

// Initialize desktop slideshow if on desktop viewport
function initDesktopSlideshow() {
    if (window.innerWidth > 768) {
        showSlidesDev(slideIndexDev);
    }
}

// Initialize on load
initDesktopSlideshow();

// Re-initialize on resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        showSlidesDev(slideIndexDev);
    }
});

function plusSlidesDev(n) {
    showSlidesDev(slideIndexDev += n);
}

function currentSlideDev(n) {
    showSlidesDev(slideIndexDev = n);
}

function showSlidesDev(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesDev-desktop");
    let dots = document.getElementsByClassName("dotDev-desktop");

    if (n > slides.length) { slideIndexDev = 1; }
    if (n < 1) { slideIndexDev = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
        slides[slideIndexDev - 1].style.display = "block";
        dots[slideIndexDev - 1].className += " active";
    }
}

// Dev Journey Slideshow - Mobile
let slideIndexDevMobile = 1;

// Initialize mobile slideshow if on mobile viewport
function initMobileSlideshow() {
    if (window.innerWidth <= 768) {
        showSlidesDevMobile(slideIndexDevMobile);
    }
}

// Initialize on load
initMobileSlideshow();

// Re-initialize on resize
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        showSlidesDevMobile(slideIndexDevMobile);
    }
});

function plusSlidesDevMobile(n) {
    showSlidesDevMobile(slideIndexDevMobile += n);
}

function currentSlideDevMobile(n) {
    showSlidesDevMobile(slideIndexDevMobile = n);
}

function showSlidesDevMobile(n) {
    let i;
    let slides = document.getElementsByClassName("mySlidesDev-mobile");
    let dots = document.getElementsByClassName("dotDev-mobile");

    if (n > slides.length) { slideIndexDevMobile = 1; }
    if (n < 1) { slideIndexDevMobile = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
        slides[slideIndexDevMobile - 1].style.display = "block";
        dots[slideIndexDevMobile - 1].className += " active";
    }
}

// Auto slide every 1.9 seconds for Task Management
setInterval(() => {
    plusSlides(1);
}, 1900);

// Auto slide every 1.9 seconds for Dev Journey - Desktop
setInterval(() => {
    if (window.innerWidth > 768) {
        plusSlidesDev(1);
    }
}, 1900);

// Auto slide every 1.9 seconds for Dev Journey - Mobile
setInterval(() => {
    if (window.innerWidth <= 768) {
        plusSlidesDevMobile(1);
    }
}, 1900);
