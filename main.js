// inputs
const name = document.querySelector('.name')
const pass1 = document.querySelector('.pass1')
const pass2 = document.querySelector('.pass2')
const email = document.querySelector('.email')
//allerts paragraphs
const alertName = document.querySelector('.alertName')
const alertPass1 = document.querySelector('.alertPass1')
const alertPass2 = document.querySelector('.alertPass2')
const alertEmail = document.querySelector('.alertEmail')

// buttons
const btnClear = document.querySelector('.clear')
const btnSend = document.querySelector('.send')

// variables to checking password

const special = /[!@#$%^&*()]/
const numbers = /[0-9]/


const mainChecking = () => {
 checkingName()
 checkingPass1()
//  checkingPass2()
//  checkingEmail()


}
const checkingName = () => {
	const userName = name.value


	if (userName.length >= 5) {
		alertName.textContent = 'Nazwa użytkownika prawidłowa'
        alertName.style.color = 'green'
	} else {
        alertName.textContent = 'Za krótka nazwa. Minimum 5 znaków!'
        alertName.style.color = 'red'
    }
	
}
const checkingPass1 = () => {
    const passsword1 = pass1.value

    if (passsword1.length >= 8  && passsword1.match(special) && passsword1.match(numbers)) {
        alertPass1.textContent = "Hasło prawidłowe"
        alertPass1.style.color = 'green'
    } else if (passsword1.length >= 8 && passsword1.match(special) ) {
        alertPass1.textContent = "W haśle brakuje cyfry"
        alertPass1.style.color = 'red'
    } else if (passsword1.length >= 8  && passsword1.match(numbers)) {
        alertPass1.textContent = "W haśle brakuje znaku specjalnego."
        alertPass1.style.color = 'red'
    } else if (passsword1.length >= 8) {
        alertPass1.textContent = "W haśle brakuje znaku specjalnego i cyfry."
        alertPass1.style.color = 'red'
    }
    console.log(passsword1)
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
btnSend.addEventListener('click', mainChecking)
