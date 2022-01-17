var hasMoreImages = true;
var currentImage = 0;
var displayImage = 0;

var timer;
var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");

function getImages() {
  if (!hasMoreImages) {
    clearTimeout(timer);
    return;
  }

  var container = document.getElementById("image_container");
  var img = new Image();
  img.className = "gallery_photo_thumbnail";
  img.onerror = outOfImages;
  img.onclick = clickedImage;
  img.src = `/gallery/${IMAGE_BASE}/images/${IMAGE_BASE}_${currentImage}.webp`;
  container.appendChild(img);
  currentImage++;

  timer = setTimeout(getImages, 300);
}

function outOfImages() {
  this.style.display = "none";
  hasMoreImages = false;
  currentImage--;
}

function clickedImage(element) {
  modal.style.display = "block";
  modalImage.src = this.src;

  // get the number of the currently displayed image based off the src
  var imageNumber = this.src.split('\\').pop()
    .split('/').pop()
    .split('_').pop()
    .split('.').shift();
  displayImage = parseInt(imageNumber);
}

function changeImage(value) {
  displayImage += value;

  if (displayImage >= currentImage) {
    displayImage = 0;
  } else if (displayImage < 0) {
    displayImage = currentImage - 1;
  }

  modalImage.src = `images/${IMAGE_BASE}_${displayImage}.webp`;
}

function nextImage() {
  changeImage(1);
}

function previousImage() {
  changeImage(-1);
}

function hideModal() {
  modal.style.display = "none";
}

function isEscapeKeyPress(event) {
  if ("key" in event) {
    return (event.key === "Escape" || event.key === "Esc");
  } else {
    return event.keyCode === 27;
  }
}

function isLeftKeyPress(event) {
  if ("key" in event) {
    return event.key === "ArrowLeft"
  } else {
    return event.keyCode === 37;
  }
}

function isRightKeyPress(event) {
  if ("key" in event) {
    return event.key === "ArrowRight"
  } else {
    return event.keyCode === 39;
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    hideModal();
  }
}

window.onkeydown = function(event) {
  event = event || window.event;

  if (isEscapeKeyPress(event)) {
    hideModal();
  } else if (isLeftKeyPress(event)) {
    previousImage();
  } else if (isRightKeyPress(event)) {
    nextImage();
  }
}

// lazy load the images
getImages();
