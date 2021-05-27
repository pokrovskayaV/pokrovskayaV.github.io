document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const form = document.querySelector(".quiz-body__form");
  const formItems = form.querySelectorAll("fieldset");
  const btnsNext = form.querySelectorAll(".form-button__btn-next");
  const btnsPrev = form.querySelectorAll(".form-button__btn-prev");
  const steps = document.querySelectorAll(".steps__item");
  const lines = document.querySelectorAll(".progress__line");
  const numbers = document.querySelectorAll(".numbers__item");
  const btnSubmit = form.querySelector(".quiz-form__button");


  btnsNext.forEach((btn, btnIndex) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      formItems[btnIndex].classList.add("hidden");
      setTimeout(nextSlide, 300);

      function nextSlide() {
        formItems[btnIndex].style.display = "none";
        formItems[btnIndex + 1].style.display = "flex";
        steps[btnIndex].classList.remove("active");
        steps[btnIndex + 1].classList.add("active");
        numbers[btnIndex].classList.remove("active");
        numbers[btnIndex + 1].classList.add("active");
        lines[btnIndex + 1].classList.add("active");
      }
    });

    btn.disabled = true;
  });

  for (let i = 0; i < btnsPrev.length; i++) {
    btnsPrev[i].addEventListener("click", (event) => {
      event.preventDefault();
      formItems[i].classList.remove("hidden");
      formItems[i + 1].style.display = "none";
      formItems[i].style.display = "flex";
      steps[i + 1].classList.remove("active");
      steps[i].classList.add("active");
      lines[i + 1].classList.remove("active");
      lines[i].classList.add("active");
      numbers[i + 1].classList.remove("active");
      numbers[i].classList.add("active");
    });
  }

  formItems.forEach((formItem, formItemIndex) => {
    if (formItemIndex === 0) {
      formItem.style.display = "flex";
    } else {
      formItem.style.display = "none";
    }
    if (formItemIndex !== formItems.length - 1) {
      const inputs = formItem.querySelectorAll("input");
      const itemTitle = formItem.querySelector(".form__title");

      inputs.forEach((input) => {
        const parent = input.parentNode;
        input.checked = false;
        parent.classList.remove("active-radio");
        parent.classList.remove("active-checkbox");
      });
    }

    //выбор radio и checkbox

    formItem.addEventListener("change", (event) => {
      const target = event.target;
      const inputsChecked = formItem.querySelectorAll("input:checked");

      if (formItemIndex !== formItems.length - 1) {
        if (inputsChecked.length > 0) {
          //разблокировать кнопку именно эту
          btnsNext[formItemIndex].disabled = false;
        } else {
          //заблокировать кнопку
          btnsNext[formItemIndex].disabled = true;
        }
      }

      if (formItemIndex !== formItems.length) {
        
        if (target.classList.contains("form__radio")) {
          const radios = formItem.querySelectorAll(".form__radio");

          radios.forEach((input) => {
            if (input === target) {
              input.parentNode.classList.add("active-radio");
              formItems[formItemIndex].classList.add("hidden");
              setTimeout(nextSlide, 300);

              function nextSlide() {
                formItems[formItemIndex].style.display = "none";
                formItems[formItemIndex + 1].style.display = "flex";
                steps[formItemIndex].classList.remove("active");
                steps[formItemIndex + 1].classList.add("active");
                lines[formItemIndex + 1].classList.add("active");
                numbers[formItemIndex].classList.remove("active");
                numbers[formItemIndex + 1].classList.add("active");
              }
            } else {
              input.parentNode.classList.remove("active-radio");
            }
          });
        } else if (target.classList.contains("form__input")) {
          target.parentNode.classList.toggle("active-checkbox");
        } else {
          return;
        }
      }
    });
  });
  
  btnSubmit.addEventListener("click", (event) => {
    let inputsCheck = document.querySelectorAll(".itog-form input:checked");
    if (inputsCheck.length < 1) {
      event.preventDefault();
      alert("Выберите вариант ответа");
    } else {
      return;
    }
  });
});
