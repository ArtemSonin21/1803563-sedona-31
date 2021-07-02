console.log("какой-то текст");

const button = document.querySelector(".button-serch");
const popup = document.querySelector(".form-serch");
const form = popup.querySelector(".form-wrap");
const checkInDate = popup.querySelector("[name=check-in]");
const checkOutDate = popup.querySelector("[name=check-out]");

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("visually-hidden");
	console.log("клик по кнопке убрать окно");
});

form.addEventListener("submit", function (evt) {
	if (!checkInDate.value || !checkOutDate.value) {
		evt.preventDefault();
		popup.classList.toggle("modal-error");
		console.log("нужно ввести даты поездки");

	}
});
