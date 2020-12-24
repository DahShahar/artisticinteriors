var hasMoreImages = true;
var currentImage = 0;
var loadedImage = 0;

var timer;

function getImages() {
  if (!hasMoreImages) {
    clearTimeout(timer);
    return;
  }

  var container = document.getElementById("image_container");
  var img = new Image();
  img.className = "gallery_photo_thumbnail";
  img.onload = imageLoaded;
  img.onerror = outOfImages;
  img.onclick = clickedImage;
  img.src = `images/${IMAGE_BASE}_${currentImage}.jpg`;
  container.appendChild(img);
  currentImage++;

  timer = setTimeout(getImages, 300);
}

function outOfImages() {
  this.style.display = "none";
  hasMoreImages = false;
}

function imageLoaded() {
  loadedImage++;
}

function clickedImage() {
  if (this.clicked == null || this.clicked == false) {
    this.clicked = true;
    this.className = "gallery_photo";
  } else {
    this.clicked = false;
    this.className = "gallery_photo_thumbnail";
  }
}

getImages();
