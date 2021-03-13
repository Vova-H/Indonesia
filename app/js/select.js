'use strict';




/// book form, select
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	});
}

/// write in localstorage

let buttonBook = document.querySelector(".btn--book");
let inputName = document.getElementById("name");
let inputSurname = document.getElementById("surname");
let inputEmail = document.getElementById("email");
let inputPhone = document.getElementById("phone");
let selectTour = document.querySelector('.__select__title');



buttonBook.addEventListener('click', function () {
	localStorage.setItem("name", inputName.value);
	localStorage.setItem("surname", inputSurname.value);
	localStorage.setItem("email", inputEmail.value);
	localStorage.setItem("phone", inputPhone.value);
	localStorage.setItem("Chosed tour", selectTour.value);



	let modal_name = document.createElement('p');
	let modal_surname = document.createElement('p');
	let modal_email = document.createElement('p');
	let modal_phone = document.createElement('p');
	let modal_selectTour = document.createElement('p');




	// if (inputName && inputSurname && inputEmail && inputPhone) {


		modal_name.id = 'modal_name';
		modal_surname.id = 'modal_surname';
		modal_email.id = 'modal_email';
		modal_phone.id = 'modal_phone';
		modal_selectTour.id = 'modal_selectTour'

		modal_name.className = 'info';
		modal_surname.className = 'info';
		modal_email.className = 'info';
		modal_phone.className = 'info';
		modal_selectTour.className ='info';


		document.querySelector('.my_modal-body').appendChild(modal_name);
		document.querySelector('.my_modal-body').appendChild(modal_surname);
		document.querySelector('.my_modal-body').appendChild(modal_email);
		document.querySelector('.my_modal-body').appendChild(modal_phone);
		document.querySelector('.my_modal-body').appendChild(modal_selectTour);
	


		document.getElementById('modal_name').innerHTML = "Name:   " + inputName.value;
		document.getElementById('modal_surname').innerHTML = "Surname:   " + inputSurname.value;
		document.getElementById('modal_email').innerHTML = "Email:   " + inputEmail.value;
		document.getElementById('modal_phone').innerHTML = "Number phone:   " + inputPhone.value;
		document.getElementById('modal_selectTour').innerText = "Tour:   " + document.querySelector('.__select__title').innerHTML;

	// }








});