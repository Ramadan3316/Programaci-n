// Para copiar `` b n @
confirm = false;
const validarCliente = (time)=>{
    Edad = prompt("Ingrese su edad");
    if (Edad > 18){
        if (time >= 2 && time<7 && confirm == false){
            alert("podes pasar gratis");
            document.write("La hora del que paso gratis fue "+time);
            return confirm = true;
        }else alert("Tenes que pagar la entrada");                                                                                                                                                                                                                                       
    } else  alert("Solo pueden pasar mayores de 18");
}

validarCliente(5);
validarCliente(3);
validarCliente(1);
validarCliente(12);
validarCliente(8);
