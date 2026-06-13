const images = [
  "../assets/images/img1.jpg",
  "../assets/images/img2.jpg",
  "../assets/images/img3.jpeg",
  "../assets/images/cover.png"
];

let index = 0;
const slide = document.getElementById("slide");

if (slide) {
  setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
  }, 2500);
}
