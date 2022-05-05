// Para copiar `` b n @
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const send = document.getElementById("submit");
const resultado = document.getElementById("datos");




send.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarDatos();
    if(error[0] == true){
        resultado.innerHTML = error[1];
        resultado.classList.add("error");
    }else{
        resultado.innerHTML = "Solicitud enviada";
        resultado.classList.add("enviada");
        resultado.removeClass("error");
    }
})

const validarDatos = ()=>{
    let error = [];
    if(name.value.length > 30){
        error[0] = true;
        error[1] = "El nombre debe de tener menos de 30 caracteres";
        return error;
    }else if(name.value.length < 5){
        error[0] = true;
        error[1] = "El nombre debe de tener mas de 5 caracteres";
        return error;
    }else if(subject.value.length < 5){
        error[0] = true;
        error[1] = "La materia debe de tener mas de 5 caracteres";
        return error;
    }else if(subject.value.length > 40){
        error[0] = true;
        error[1] = "La materia debe de tener menos de 40 caracteres";
        return error;
    }else if (email.value.length < 5 || email.value.length > 40){
        error[0] = true;
        error[1] = "Email ínvalido";
        return error;
                }
    error[0] = false;
    return error;
}