const productSlider = document.querySelector(".swiper-wrapper");
const prevButton = productSlider.querySelector(".swiper-button__prev");
const nextButton = productSlider.querySelector(".swiper-button__next");
const productItems = productSlider.querySelectorAll(".goods-slider__picItem");
const dotItems = productSlider.querySelectorAll(".goods-dots__list-item");
const smallPics = productSlider.querySelectorAll(".swiper-slide");

const getActiveIndex = () => {
  for (let i = 0; i <= productItems.length; i++) {
    if (productItems[i].classList.contains("goods-slider__picItem--active"))
      return i;
  }
};

const setActiveIndex = (index) => {
  productItems[index].classList.add("goods-slider__picItem--active");
  dotItems[index].classList.add("goods-dots__list-item--active");
  smallPics[index].classList.add("swiper-slide--active");
};

const deleteActiveIndex = (index) => {
  productItems[index].classList.remove("goods-slider__picItem--active");
  dotItems[index].classList.remove("goods-dots__list-item--active");
  smallPics[index].classList.remove("swiper-slide--active");
};

const setSelectedIndex = (index) => {
  const activeIndex = getActiveIndex();
  deleteActiveIndex(activeIndex);
  setActiveIndex(index);
};

nextButton.addEventListener("click", () => {
  const index = getActiveIndex();
  deleteActiveIndex(index);
  setActiveIndex(index + 1);
});

prevButton.addEventListener("click", () => {
  const index = getActiveIndex();
  deleteActiveIndex(index);
  setActiveIndex(index - 1);
});

dotItems.forEach((dot, index) => {
  dot.addEventListener("click", () => setSelectedIndex(index));
});

smallPics.forEach((dot, index) => {
  dot.addEventListener("click", () => setSelectedIndex(index));
});
