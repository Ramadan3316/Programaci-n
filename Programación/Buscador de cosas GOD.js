// Para copiar `` b n @
// Acordarse de crear el objeto con la clase que le corresponde
cadenaDatos = ["coscu army","ashe","soy vegano","coscu es god","amigdala"];
let inp = document.getElementById("input-text");
let newh5 = document.createElement("h5")
let newh1 = document.createElement("h1")
let divShow = document.getElementById("show-results")

let verificacion = false;
const agregarDatos = (cantInv)=>{
    cantInv = parseInt(cantInv); 
    for(i=0; i<cantInv;i++){
        let newDatos = document.getElementById("input-text");
        cantidadAgregada = cadenaDatos.push(newDatos);
    }
}

const Buscar = ()=>{
    newh5.innerHTML = "hoals"
    divShow.append(newh5);
    for (coincide in cadenaDatos){
        resultado = cadenaDatos[coincide].includes(cadenaBuscar);
        if(resultado == true){
            newh5.innerHTML = cadenaDatos[coincide];
            console.log(cadenaDatos[coincide]);
            newh5.className = "results";
            divShow.append(newh5);
            verificacion = true;
        }
    }
    if(verificacion == false){
        newh5.innerHTML= "Lo que busco no existe";
    }
}

const Navegar = ()=>{
    cadenaBuscar = inp.value;
    if(cadenaBuscar == "contraseñaAdmin"){
        //document.body.append(newh1)
        newh1.innerHTML = "Cuantos cosas quiere agregar?";
        agregarDatos(cantInv);
        cadenaBuscar = prompt("Ingrese lo que esta buscando");
        Buscar();
    }else{ 
        Buscar();
    }
}  
