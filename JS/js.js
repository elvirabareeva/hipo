

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
	let files = e.currentTarget.files;
	console.log(files);

	if (files.length) {
		fileInput.closest('label').querySelector('span').textContent = files[0].name;
	} else {
		fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
	}

});

let validateForms = function(selector, rules) {
	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

			fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
		}
	});
}

validateForms('.form', { email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup', 'send goal');