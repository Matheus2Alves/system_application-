const username = document.getElementById('username')
const userId = document.getElementById('userId')
const email = document.getElementById('email')
const phone_number = document.getElementById('phone-number')
const telephone = document.getElementById('telephone-number')
const cpf = document.getElementById('cpf-number')
const adress = document.getElementById('adress-user')
const cep = document.getElementById('cep-user')
const user_birth = document.getElementById('user-birth')
const form = document.getElementById('form')
let customers = []


form.addEventListener('submit', e => {
    e.preventDefault()
    
    validateInput()

    addCustomer()
})

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.remove('error')
    inputControl.classList.add('success')

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const isValidPhoneNumber = number => {
    return number.length == 11 

}

const isValidTelephone = number => {
    return number.length == 10
}

const isValidCpf = number => {
    return number.length == 11
}

const isValidCep = number => {
    return number.length == 8
}

const validateInput = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const phone_numberValue = phone_number.value.trim()
    const telephoneValue = telephone.value.trim()
    const cpfValue = cpf.value.trim()
    const adressValue = adress.value.trim()
    const cepValue = cep.value.trim()
    const user_birthValue = user_birth.value.trim()

    if(usernameValue === "") {
        setError(username, 'Nome de usuário necessário')
    } else {
        setSuccess(username)
    }

    if(emailValue === "") {
        setError(email, "Email necessário")
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'escreva um endereço de email válido')
    } else {
        setSuccess(email)
    }

    if(phone_numberValue === '') {
        setError(phone_number, 'Número de celular necessário')
    } else if(!isValidPhoneNumber(phone_numberValue)) {
        setError(phone_number, 'Escreva um número de celular válido')
    } else {
        setSuccess(phone_number)
    }

    if(telephoneValue === '') {
        setError(telephone, 'Número de telefone necessário')
    } else if(!isValidTelephone(telephoneValue)) {
        setError(telephone, 'Insira um telefone válido')
    } else {
        setSuccess(telephone)
    }

    if(cpfValue == '') {
        setError(cpf, 'Insira um CPF')
    } else if(!isValidCpf(cpfValue)) {
        setError(cpf, 'Insira um CPF válido')
    } else {
        setSuccess(cpf)
    }

    if(adressValue == '') {
        setError(adress,'insira um endereço')
    } else {
        setSuccess(adress)
    }

    if(user_birthValue == '') {
        setError(user_birth, 'Insira uma data')
    } else {
         setSuccess(user_birth)
    }

    if(cepValue == '') {
        setError(cep, 'Insira um CEP')
    } else if(!isValidCep(cepValue)) {
        setError(cep, 'insira um CEP válido')
    } else {
        setSuccess(cep)
    }

console.log('acabou a 1')
}


let addCustomer = () => {
    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let phone_numberValue = phone_number.value.trim()
    let telephoneValue = telephone.value.trim()
    let cpfValue = cpf.value.trim()
    let adressValue = adress.value.trim()
    let cepValue = cep.value.trim()
    let user_birthValue = user_birth.value.trim()
    console.log('push now')
    const customer = {
        username: usernameValue,
        email: emailValue,
        phone_number: phone_numberValue,
        telephone: telephoneValue,
        cpf: cpfValue,
        address: adressValue,
        cep: cepValue,
        user_birth: user_birthValue
    }

    customers.push(customer)

    usernameValue = ''
    emailValue = ''
    phone_numberValue = ''
    telephoneValue = ''
    cpfValue = ''
    adressValue = ''
    cepValue = ''
    user_birthValue = ''
    console.log('tudo certo')
}

console.log(customers)
