console.log("какой-то текст");

const button = document.querySelector(".button-serch");
const popup = document.querySelector(".form-serch");
const form = popup.querySelector("form-wrap");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("visually-hidden");
	console.log("клик по кнопке убрать окно");
});


