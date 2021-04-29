function showSignUp() {
	let signUp = document.getElementById('sign-up');
	let signIn = document.getElementById('sign-in');
	let btnText = document.getElementById('login-btn');

	signUp.style.display === 'none'
		? ((signUp.style.display = 'flex'),
		  (signIn.style.display = 'none'),
		  (btnText.innerHTML = 'Login'))
		: ((signUp.style.display = 'none'),
		  (signIn.style.display = 'flex'),
		  (btnText.innerHTML = 'Sign Up'));
}

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
