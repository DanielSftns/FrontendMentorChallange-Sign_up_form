const form = document.querySelector('.form')
const name = form.querySelector('#name')
const lastName = form.querySelector('#lastName')
const email = form.querySelector('#email')
const password = form.querySelector('#password')
const button = form.querySelector('.form-button')
const regexExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


button.addEventListener('click', (e)=>{
	e.preventDefault()
	validateName()
	validateLastName()
	validateEmail()
	validatePassword()	
})


form.querySelectorAll('.form-control').forEach(input =>{
	input.addEventListener('blur',()=>{
		validateInput(input.id)
	})
	input.addEventListener('keyup', ()=>{
		if(input.parentNode.classList.contains('error')){
			validateInput(input.id)	
		}
	})
})

function validateInput(inputID){
	console.log(inputID)
	switch(inputID){
		case 'name':
			validateName()
		break;
		case 'lastName':
			validateLastName()
		break;
		case 'email':
			validateEmail()
		break;
		case 'password':
			validatePassword()
		break;
	}
}

function validateName(){
	if(!name.value || name.value.length<3){
		name.parentNode.classList.add('error')
		name.placeholder = ''
	}else{
		name.parentNode.classList.remove('error')
	}
}

function validateLastName(){
	if(!lastName.value || lastName.value.length<3){
		lastName.parentNode.classList.add('error')
		lastName.placeholder = ''
	}else{
		lastName.parentNode.classList.remove('error')
	}
}

function validateEmail(){
	if(!regexExpression.test(email.value)){
		email.parentNode.classList.add('error')
		email.placeholder = 'email@xample/com'
	}else{
		email.parentNode.classList.remove('error')
	}
}

function validatePassword(){
	if(!password.value || password.value.length<6){
		password.parentNode.classList.add('error')
		password.placeholder = ''
	}else{
		password.parentNode.classList.remove('error')
	}
}