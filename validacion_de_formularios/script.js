document.getElementById('formulario').addEventListener('submit',function (event){
    event.preventDefault()

    //validar nombre
    let nombreEntrada = document.getElementById('name')
    let nombreError = document.getElementById('nameError')

    if (nombreEntrada.value.trim() == ''){
        nombreError.textContent = 'Introduzca su nombre'
        nombreError.classList.add('error-message')
    }else{
        nombreError.textContent = ''
        nombreError.classList.remove('error-message')
    }

    //validar correo
    let correoEntrada = document.getElementById('email')
    let correoError = document.getElementById('emailError')
    let correoPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!correoPatron.test(correoEntrada.value)){
        correoError.textContent = 'El correo electronico no es valido'
        correoError.classList.add('error-message')
    }else{
        correoError.textContent = ''
        correoError.classList.remove('error-message')
    }
    //validar contrasenha
    let contrasenhaEntrada = document.getElementById('password')
    let contrasenhaError = document.getElementById('passwordError')
    const contrasenhaPatron = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    //^ y $: Indican el inicio y fin de la cadena.
    //(?=.*[A-Z]): Al menos una letra mayúscula.
    //(?=.*[a-z]): Al menos una letra minúscula.
    //(?=.*\d): Al menos un número.
    //(?=.*[@$!%*?&]): Al menos un carácter especial.
    //[A-Za-z\d@$!%*?&]{8,}: Longitud mínima de 8 caracteres, permitiendo letras, números y caracteres especiales.


    if (!contrasenhaPatron.test(contrasenhaEntrada.value)){
        contrasenhaError.textContent = 'La contrasenha debe contar con al menos: una mayuscula, una minuscula, un numero, un caracter especial (@$!%*?&) y 8 caracteres como minimo'
        contrasenhaError.classList.add('error-message')
    }else{
        contrasenhaError.textContent = ''
        contrasenhaError.classList.remove('error-message')
    }
    //si todos los campos son validos enviar formulario
    if(!nombreError.textContent && !correoError.textContent && !contrasenhaError.textContent){
        alert('El formulario se envio correctamente')
        document.getElementById('formulario').reset() 
    }
})