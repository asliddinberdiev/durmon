const swiperEl = document.querySelector(".stepsCarousel")
const btnPrev = document.querySelector(".steps_btn-prev")
const btnNext = document.querySelector(".steps_btn-next")

btnPrev.addEventListener("click", () => swiperEl.swiper.slidePrev())

btnNext.addEventListener("click", () => swiperEl.swiper.slideNext())
