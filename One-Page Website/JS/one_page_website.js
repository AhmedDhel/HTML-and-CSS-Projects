function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Animated square: uses an image the user will add at `images/animated.png`.
document.addEventListener('DOMContentLoaded', function() {
  initAnimatedSquare();
});

function initAnimatedSquare() {
  var img = document.createElement('img');
  img.id = 'animated-square';
  img.src = 'images/animated.png';
  img.alt = 'Animated square';
  img.style.position = 'fixed';
  img.style.width = '80px';
  img.style.height = '80px';
  img.style.left = '20px';
  img.style.top = '20px';
  img.style.zIndex = 9999;
  img.style.pointerEvents = 'none';
  img.style.transform = 'translateZ(0)';
  document.body.appendChild(img);

  var x = 20, y = 20;
  var vx = 150; // px/sec
  var vy = 120; // px/sec
  var last = performance.now();

  function animate(now) {
    var dt = (now - last) / 1000;
    last = now;
    var maxX = window.innerWidth - img.offsetWidth;
    var maxY = window.innerHeight - img.offsetHeight;
    x += vx * dt;
    y += vy * dt;
    if (x < 0) { x = 0; vx = Math.abs(vx); }
    if (x > maxX) { x = maxX; vx = -Math.abs(vx); }
    if (y < 0) { y = 0; vy = Math.abs(vy); }
    if (y > maxY) { y = maxY; vy = -Math.abs(vy); }
    img.style.left = Math.round(x) + 'px';
    img.style.top = Math.round(y) + 'px';
    img.style.transform = 'rotate(' + ((now/10) % 360) + 'deg)';
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}