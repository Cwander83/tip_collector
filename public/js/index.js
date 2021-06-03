function setFormMessage(formElement, type, message) {
	const messageElement = formElement.querySelector('.form__message');
	messageElement.textContent = message;
	messageElement.classList.remove(
		'form__message--success',
		'form__message--error'
	);
	messageElement.classList.add(`form__message--${type}`);
	// setFormMessage(loginForm, 'success', "You're logged in!");
}

function setInputError(inputElement, message) {
	inputElement.classList.add('form__input--error');
	inputElement.parentElement.querySelector(
		'.form__input-error-message'
	).textContent = message;
}

function clearInputError(inputElement) {
	inputElement.classList.remove('form__input--error');
	inputElement.parentElement.querySelector(
		'.form__input-error-message'
	).textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
	const loginForm = document.querySelector('#login');
	const signUpForm = document.querySelector('#signUp');

	document.querySelector('#linkSignUp').addEventListener('click', (e) => {
		e.preventDefault();
		loginForm.classList.add('form--hidden');
		signUpForm.classList.remove('form--hidden');
	});
	document.querySelector('#linkLogin').addEventListener('click', (e) => {
		e.preventDefault();
		loginForm.classList.remove('form--hidden');
		signUpForm.classList.add('form--hidden');
	});

	loginForm.addEventListener('submit', (e) => {
		e.preventDefault();

		// perform login AJAX...

		setFormMessage(loginForm, 'error', 'Invalid username/password combo');
	});
});

function lostPassword() {
	let recovery = document.getElementById('lost-password');

	recovery.style.display === 'none'
		? (recovery.style.display = 'block')
		: (recovery.style.display = 'none');
}

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('../sw.js').then(() => {
			console.log('Service Worker Registered');
		});
	});
}
