// Para copiar `` b n @
// Acordarse de crear el objeto con la clase que le corresponde
cadenaDatos = ["coscu army","ashe","soy vegano","coscu es god","amigdala"];
let inp = document.getElementById("input-text");
let divShow = document.getElementById("show-results")
const fragmento1 = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();
const newH2 = document.createElement("H2");

let verificacion = false;
const agregarDatos = (cantInv)=>{
    cantInv = parseInt(cantInv); 
    for(i=0; i<cantInv;i++){
        let newDatos = document.getElementById("input-text");
        cantidadAgregada = cadenaDatos.push(newDatos);
    }
}

const Buscar = ()=>{
    fragmento2.appendChild(newH2);
    divShow.appendChild(newH2);
    newH2.innerHTML = "Resultados de su busqueda";
    for (coincide in cadenaDatos){
        resultado = cadenaDatos[coincide].includes(cadenaBuscar);
        if(resultado == true){
            const newH5 = document.createElement("H5")
            newH5.innerHTML = cadenaDatos[coincide];
            fragmento1.appendChild(newH5);
            divShow.appendChild(fragmento1);
            console.log(newH5);
            verificacion = true;
        }
    }
    if(verificacion == false){
        newH5.innerHTML= "Lo que busco no existe";
    }
}

const Navegar = ()=>{
    cadenaBuscar = inp.value;
    if(cadenaBuscar == "contraseñaAdmin"){
        //document.body.append(newh1)
        newh1.innerText = "Cuantos cosas quiere agregar?";
        agregarDatos(cantInv);
        cadenaBuscar = prompt("Ingrese lo que esta buscando");
        Buscar();
    }else{ 
        Buscar();
    }
}  

