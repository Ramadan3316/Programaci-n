// Para copiar `` b n @

const materiasHTML = document.querySelector(".materias");

const materias =[
    {
        nombre: "Fisica",
        nota: "9"
    },
    {
        nombre: "Biología",
        nota: "7"
    },
    {
        nombre: "Robotica",
        nota: "8"
    },
    {
        nombre: "matematica",
        nota: "6"
    }
]

const obtenerNotas = (id)=>{
    return new Promise((resolve,reject)=>{
        if(materias[id] == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materias[id])}, Math.random()*800)
    })
}

const devolverMaterias = async()=>{
    let materia = [];
    for(let i = 0; i<materias.length; i++){
        materia[i] =  await obtenerNotas(i);
        let newHTMLCode = `
            <div class="materia">
                <div class="nombre">${materia[i].nombre}</div>
                <div class="nota">${materia[i].nota}</div>
            </div>`
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();
