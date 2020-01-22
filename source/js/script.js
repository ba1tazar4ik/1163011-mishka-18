var modal_open = document.querySelectorAll(".product-card__button");
var popup = document.querySelector(".site-modal");
var modal_close = document.querySelector(".site-modal");
var modal_use = document.querySelector (".size-select");

for (let i = 0; i < modal_open.length; i++) {
  modal_open[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add("site-modal--show");
  })
}

modal_use.addEventListener("click", function (evt) {
  evt.stopPropagation()
});

modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("site-modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("site-modal--show")) {
      popup.classList.remove("site-modal--show");
    }
  }
});
