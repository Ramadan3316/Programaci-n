// Para copiar `` b n @
contenedor = document.querySelector(".showLlaves")
let fragmento = document.createDocumentFragment();
const crearLlave = (nombre,modelo,precio)=> {
    image = "<img class = llave-img src= Imagenes/llave.jpg>";
    nombre = `<h2>Nombre: ${nombre}<h2>`;
    modelo = `<h3>Modelo: ${modelo}</h3>`;
    precio = `<p>Precio: $${precio}</p>`;
    return [image,nombre,modelo,precio];
}
const changeHidden =(number)=>{
    document.querySelector(".key-data").value = number;
}

for(let i = 0; i<10;i++){
    precioRandom = Math.round(Math.random()*100);
    modeloRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i+1}`,`${modeloRandom}`,precioRandom),
    divShow = document.createElement("DIV");
    divShow.addEventListener("click",()=>{changeHidden(modeloRandom)});
    divShow.classList.add(`item-${i}`,`flex-item`);
    divShow.tabIndex = i;
    divShow.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmento.appendChild(divShow);
}
contenedor.appendChild(fragmento);