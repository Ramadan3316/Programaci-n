// Para copiar `` b n @
let multiplicar = document.querySelector(".multiplicar");
let sumar = document.querySelector(".sumar");
let dividir = document.querySelector(".dividir");
let restar = document.querySelector(".restar");
let display = document.querySelector(".calculadora__displayNum")
let divDisplay = document.querySelector(".calculadora__display");
let igual = document.querySelector(".igual");
let divNumeros = document.querySelector(".numeros");
let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let num3 = document.querySelector(".num3")
let num4 = document.querySelector(".num4")
let num5 = document.querySelector(".num5")
let num6 = document.querySelector(".num6")
let num7 = document.querySelector(".num7")
let num8 = document.querySelector(".num8")
let num9 = document.querySelector(".num9")
let num0 = document.querySelector(".num0")
let ac = document.querySelector(".AC")

function Numeros(){
    let verificacion = true;
    let negativo = false;
    let posNum1=0;
    let ingresado = display.value;
    for(num in ingresado){
       if(ingresado[num] == "+" ||ingresado[num] == "-" ||ingresado[num] == "*" ||ingresado[num] == "/"){
            console.log(`se encontro el ${ingresado[num]} en el index ${num}`);
            num = parseInt(num);
            posNum2 = num + 1;
            // console.log("La posicion del numero 2 es "+posNum2);
            verificacion = false;
        }else if(ingresado[num] != "+" && verificacion == true || 
        ingresado[num] != "/" && verificacion == true || ingresado[num] != "*" && verificacion == true 
        || ingresado[num] != "-" && verificacion == true){
            posNum1 ++;
        }else if(ingresado[0] == "-" || ingresado[1] == "-"){
            negativo = true;
            console.log("Se encontro el numero negativo en el index "+num)
        }
    }
    let num1 = ingresado.slice(0,posNum1);
    let num2 = ingresado.slice(posNum2);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    suma = ingresado.includes("+");
    resta = ingresado.includes("-"); 
    multiplicacion = ingresado.includes("*");
    division = ingresado.includes("/");
    if(suma == true){
       resultado = num1+num2;
    }
    if(resta == true){
        resultado = num1-num2;
    }
    if(multiplicacion == true){
        resultado = num1*num2;
    }
    if(division == true){
        resultado = num1/num2;
    }
    return resultado;
}

for(i=0;i>9;i++){
   let numeros = document.querySelector(`.num${i}`);
   console.log(numeros[i]);
}
num1.addEventListener("click",()=>{
    display.value = display.value + 1;
})

num2.addEventListener("click",()=>{
    display.value = display.value + 2;
})

num3.addEventListener("click",()=>{
    display.value = display.value + 3;
})

num4.addEventListener("click",()=>{
    display.value = display.value + 4;
})

num5.addEventListener("click",()=>{
    display.value = display.value + 5;
})

num6.addEventListener("click",()=>{
    display.value = display.value + 6;
})

num7.addEventListener("click",()=>{
    display.value = display.value + 7;
})

num8.addEventListener("click",()=>{
    display.value = display.value + 8;
})
num9.addEventListener("click",()=>{
    display.value = display.value + 9;
})

num0.addEventListener("click",()=>{
    display.value = display.value + 0;
})


ac.addEventListener("click",()=>{
    display.value = " ";
})

multiplicar.addEventListener("click",()=>{
    display.value =  display.value + "*" ;
    // console.log(display.innerHTML =  inputValue + "*" )
})

sumar.addEventListener("click",()=>{
    display.value =  display.value + "+" ;
    // console.log(display.innerHTML =  inputValue + "+" )
})

dividir.addEventListener("click",()=>{
    display.value =  display.value + "/" ;
    // console.log(display.innerHTML =  inputValue + "/" )
})

restar.addEventListener("click",()=>{
    display.value =  display.value + "-" ;
    // console.log(display.innerHTML =  inputValue + "*" )
})

igual.addEventListener("click",()=>{
    divDisplay.classList.add("resultado");
    resultado = Numeros();  
    console.log(resultado)
    display.value = resultado;
})
