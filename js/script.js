var btn = document.querySelector(".button--contacts");
var popup = document.querySelector(".popup-feedback");
var close = popup.querySelector(".popup-feedback__close");
var overlay = document.querySelector(".page-overlay");
var form = popup.querySelector(".feedback-form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
}
catch (err) {
    isStorageSupport = false;
}
btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
  overlay.classList.add("page-overlay-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("page-overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести свои данные");
  }else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("page-overlay-show");
    }
  }
});
