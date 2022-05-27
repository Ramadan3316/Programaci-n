const menuLogo = document.querySelector(".nav__menuLogo");
const menu = document.querySelector(".nav__menu")
const salir = document.querySelector(".salirMenu");
const home = document.querySelector(".homeImage");
const body = document.querySelector(".body");
menuLogo.addEventListener("click",()=>{
    body.style.backgroundColor = "rgba(0,0,0,0.7)"
    menu.style.display = "block";
    console.log("se presiono el icono")
})

salir.addEventListener("click",()=>{
    body.style.backgroundColor = "rgba(0,0,0,0)"
    menu.style.display = "none";
    menuLogo.style.marginRight = "10px"
    console.log("se presiono el icono de salida");
})

const animacion = ()=>{
    for(let i=0;i>25;i++){
        let figura = document.createElement('span');
        
        homeImage.appendChild(figura);
    }
}

animacion();


