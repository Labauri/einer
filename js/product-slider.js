const productSlider = document.querySelector(".swiper-wrapper");
const prevButton = productSlider.querySelector(".swiper-button__prev");
const nextButton = productSlider.querySelector(".swiper-button__next");
const productItems = productSlider.querySelectorAll(".goods-slider__picItem");
const dotItems = productSlider.querySelectorAll(".goods-dots__list-item");
const smallPics = productSlider.querySelectorAll(".swiper-pic");

let clickCount = 0;
const maxClicks = 3;

const getActiveIndex = () => {
  for (let i = 0; i <= productItems.length; i++) {
    if (productItems[i].classList.contains("goods-slider__picItem--active"))
      return i;
  }
};

const setActiveIndex = (index) => {
  productItems[index].classList.add("goods-slider__picItem--active");
  dotItems[index].classList.add("goods-dots__list-item--active");
  smallPics[index].classList.add("swiper-pic--active");
};

const deleteActiveIndex = (index) => {
  productItems[index].classList.remove("goods-slider__picItem--active");
  dotItems[index].classList.remove("goods-dots__list-item--active");
  smallPics[index].classList.remove("swiper-pic--active");
};

const setSelectedIndex = (index) => {
  const activeIndex = getActiveIndex();
  deleteActiveIndex(activeIndex);
  setActiveIndex(index);
};

const handleClick = () => {
  clickCount++;
  if (clickCount >= maxClicks) {
    nextButton.removeEventListener("click", handleNextClick);
    setTimeout(() => {
      nextButton.addEventListener("click", handleNextClick);
      clickCount = 0;
    });
  }
};

const handlePrevClick = () => {
  handleClick();
  const index = getActiveIndex();
  if (index > 0) {
    deleteActiveIndex(index);
    setActiveIndex(index - 1);
  }
};

const handleNextClick = () => {
  handleClick();
  const index = getActiveIndex();
  if (index < productItems.length - 1) {
    deleteActiveIndex(index);
    setActiveIndex(index + 1);
  }
};

prevButton.addEventListener("click", handlePrevClick);
nextButton.addEventListener("click", handleNextClick);

dotItems.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    handleClick();
    setSelectedIndex(index);
  });
});

smallPics.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    handleClick();
    setSelectedIndex(index);
  });
});


function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
};
