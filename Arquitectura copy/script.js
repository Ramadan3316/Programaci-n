
const lista = document.querySelector(".divTareas__lista");

lista.addEventListener("click",()=>{
    lista.style.listStyle =  "square";
    console.log("Se presiono la un elemento de la lista");
})