
var btn = document.querySelector(".button--contacts");
var popup = document.querySelector(".popup-feedback");
var close = popup.querySelector(".popup-feedback__close");
var overlay = document.querySelector(".page-overlay");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  overlay.classList.add("page-overlay-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  overlay.classList.remove("page-overlay-show");
});
