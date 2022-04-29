// Para copiar `` b n @

let num1=prompt("Ingrese el primer numero");
alert("¿Que operación quiere hacer?");
let operacion=prompt("+:suma, -:resta *:multplicación /:división");

const suma =(num1,num2)=>{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 + num2
}
const resta =(num1,num2)=>{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 - num2
}
const multiplicacion =(num1,num2)=>{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 * num2
}
const division =(num1,num2)=>{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return num1 / num2
}


if(operacion=="+"){
    let num2=prompt("Ingrese el segundo numero");    
    document.write(suma(num1,num2));
} 
else if(operacion=="-"){
    let num2=prompt("Ingrese el segundo numero");
    document.write(resta(num1,num2));
} 
else if(operacion=="*"){
    let num2=prompt("Ingrese el segundo numero");
    document.write(multiplicacion(num1,num2));
} 
else if(operacion=="/"){
    let num2=prompt("Ingrese el segundo numero");
    document.write(division(num1,num2));
}
else{
    alert("No se ah encontrado la operación");
}