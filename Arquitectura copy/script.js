const menuLogo = document.querySelector(".nav__menuLogo");
const menu = document.querySelector(".nav__menu")
const salir = document.querySelector(".salirMenu");
const home = document.querySelector(".homeImage")
menuLogo.addEventListener("click",()=>{
    body.style.backgroundColor = "rgba(0,0,0,0.7)"
    menu.style.display = "block";
    console.log("se presiono el icono")
    // menu.animate([
    //     {width: "5vw"},
    //     {width:"20vw", offset:0.5},
    //     {width:"35vw"}
    // ],100)
})

salir.addEventListener("click",()=>{
    body.style.backgroundColor = "rgba(0,0,0,0)"
    menu.style.display = "none";
    menuLogo.style.marginRight = "10px"
    console.log("se presiono el icono de salida");
    // menu.animate([
    //     {width: "35vw"},
    //     {width:"20vw", offset:0.5},
    //     {width:"5vw"}
    // ],5000)
})

const animacion = ()=>{
    for(let i=0;i>25;i++){
        let figura = document.createElement('span');
        
        
        homeImage.appendChild(figura);
    }
}

animacion();