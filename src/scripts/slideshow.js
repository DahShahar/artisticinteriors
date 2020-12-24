var timeout;

var slideIndex = 0;
plusSlides(1);

function plusSlides(value) {
  var slides = getSlides();
  var dots = document.getElementsByClassName("dot");
  hideAllSlides(slides);
  slideIndex += value;
  if (slideIndex > slides.length) {
    slideIndex = 1
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  resetTimeout();
}

function getSlides() {
  return document.getElementsByClassName("banner_slides");
}

function hideAllSlides(slides) {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

function currentSlide(value) {
  plusSlides(value - slideIndex);
}

function resetTimeout() {
  clearTimeout(timeout);
  timeout = setTimeout(plusSlides.bind(null, 1), 8000);
}
