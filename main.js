// inputs
const name = document.querySelector('.name')
const pass1 = document.querySelector('.pass1')
const pass2 = document.querySelector('.pass2')
const email = document.querySelector('.email')
//allerts paragraphs
const alertName = document.querySelector('.alertName')
const alertPass1 = document.querySelector('.alertName')
const alertPass2 = document.querySelector('.alertName')
const alertEmail = document.querySelector('.alertName')

// buttons
const btnClear = document.querySelector('.clear')
const btnSend = document.querySelector('.send')

const checking = () => {
	const userName = name.value

	if (userName.length >= 5) {
		alertName.textContent = 'Nazwa użytkownika prawidłowa'
	}
	console.log(alertName)
}

const clearing = () => {
	name.value = ''
	pass1.value = ''
	pass2.value = ''
	email.value = ''
	alertName.textContent = ''
	alertPass1.textContent = ''
	alertPass2.textContent = ''
	alertEmail.textContent = ''
}

btnClear.addEventListener('click', clearing)
btnSend.addEventListener('click', checking)
