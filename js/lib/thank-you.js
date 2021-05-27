document.addEventListener("DOMContentLoaded", function (event) {
  const anchors = document.querySelectorAll(".js-scroll-to");
  const showBtns = document.querySelectorAll(".show-js");

  showBtns.forEach((item) => {
    item.addEventListener("click", function (event) {
      const showItems = item.parentNode.querySelectorAll(".item__hidden");
      showItems.forEach((image) => {
        image.classList.toggle("_hidden");
      });
      this.classList.toggle("_hide");
      this.innerHTML == "Показать ещё"
        ? (this.innerHTML = "Скрыть")
        : (this.innerHTML = "Показать ещё");
      if (!item.classList.contains("_hide")) {
        item.scrollIntoView({ block: "center", behavior: "auto" });
      }
    });
  });

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute("href");
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  let reviewslider = document.querySelector(
    ".reviews__slider .swiper-container"
  );
  new Swiper(reviewslider, {
    slidesPerView: "auto",
    spaceBetween: 23,
    navigation: {
      prevEl: reviewslider.nextElementSibling,
      nextEl: reviewslider.nextElementSibling.nextElementSibling,
    },
    loop: true,
    centeredSlides: true,
    breakpoints: {
      769: {
        spaceBetween: 43,
      },
    },
  });

  baguetteBox.run(".work__content", {
    noScrollbars: true,
    async: true,
  });
  baguetteBox.run(".review__link", {
    noScrollbars: true,
    async: true,
  });
});
