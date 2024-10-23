// swiper for steps
const stepsSwiper = document.querySelector(".stepsCarousel")
const stepsBtnPrev = document.querySelector(".steps_btn-prev")
const stepsBtnNext = document.querySelector(".steps_btn-next")

stepsBtnPrev.addEventListener("click", () => stepsSwiper.swiper.slidePrev())
stepsBtnNext.addEventListener("click", () => stepsSwiper.swiper.slideNext())
