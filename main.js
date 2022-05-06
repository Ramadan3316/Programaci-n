// Para copiar `` b n @
let multiplicar = document.querySelector(".multiplicar");
let display = document.querySelector(".calculadora__display")
multiplicar.addEventListener("click",()=>{
    cut();
})
const cut = ()=>{
    for(num in display){
        while(display[num]!= "X"){
            console.log(display[num]);
        }
    }
}