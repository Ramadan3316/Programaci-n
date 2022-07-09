const menuLogo = document.querySelector(".nav__menuLogo");
const menu = document.querySelector(".nav__menu")
const salir = document.querySelector(".salirMenu");

menuLogo.addEventListener("click",()=>{
    body.style.backgroundColor = "black"
    menu.style.display = "block";
    console.log("se presiono")
})

salir.addEventListener("click",()=>{
    body.style.backgroundColor = "none"
    menu.style.display = "none";
    menuLogo.style.marginRight = "10px"
})