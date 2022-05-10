// Para copiar `` b n @
let multiplicar = document.querySelector(".multiplicar");
let sumar = document.querySelector(".sumar");
let dividir = document.querySelector(".dividir");
let restar = document.querySelector(".restar");
let display = document.querySelector(".calculadora__displayNum")
let divDisplay = document.querySelector(".calculadora__display");
let igual = document.querySelector(".igual");
let divNumeros = document.querySelector(".numeros");



function Numeros(){
    let verificacion = true;
    let cont=0;
    let ingresado = display.value;
    for(num in ingresado){
       if(ingresado[num] == "+" ||ingresado[num] == "-" ||ingresado[num] == "*" ||ingresado[num] == "/"){
            // console.log("se encontro el + en el index " + num);
            num = parseInt(num);
            posNum2 = num + 1;
            // console.log("La posicion del numero 2 es "+posNum2);
            verificacion = false;
        }else if(ingresado[num] != "+" && verificacion == true || 
        ingresado[num] != "/" && verificacion == true || ingresado[num] != "*" && verificacion == true 
        || ingresado[num] != "-" && verificacion == true){
            cont ++;
        }
    }
    let num1 = ingresado.slice(0,cont);
    let num2 = ingresado.slice(posNum2);
    num1 = parseInt(num1);
    num2 = parseInt(num2);
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
    numeros = Numeros();  
    console.log(numeros);
    divDisplay.innerText = numeros;
    let nashe = divNumeros.value;
    while(i!=9){
        i++;
        let num = document.querySelector(`.num${i}`);
        console.log(num);
    }
    
})
