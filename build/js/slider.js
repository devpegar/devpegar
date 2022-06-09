const sliderImages = document.querySelectorAll(".works__image");
const totalImages = sliderImages.length;
let i = 0;

sliderImages[i].classList.add("works__image--current");

const autoPlay = () => {
  const playSlider = setInterval(() => {
    sliderImages.forEach((img) => {
      img.classList.remove("works__image--current");
    });
    i++;

    if (i > totalImages - 1) {
      i = 0;
    }
    sliderImages[i].classList.add("works__image--current");
  }, 5000);
};
autoPlay();
