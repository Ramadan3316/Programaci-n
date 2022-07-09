// Para copiar `` b n @
const alumnos =[{
    nombre:"Jorgito",
    email:"jorgito@gmail.com",
    materia:"Matematica"
},{
    nombre:"Cofla",
    email:"cofla@gmail.com",
    materia:"Literatura"
},{
    nombre:"Juan",
    email:"juan@gmail.com",
    materia:"Programacion"
}]

let button = document.querySelector(".button")

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let html = `
            <div class="gridContainer__gridItem nombre">${nombre}</div>
            <div class="gridContainer__gridItem email">${email}</div>
            <div class="gridContainer__gridItem materia">${materia}</div>
            <div class="gridContainer__semana semana">
                <select class="gridContainer__semanaElegida gridContainer__gridItem">
                    <option value="Semana 1">Semana 1</option>
                    <option value="Semana 2">Semana 2</option>
                </select>
            </div>`
        document.querySelector(".gridContainer").innerHTML += html;
        console.log(html);
}
button.addEventListener("click",()=>{
    let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".gridContainer__semanaElegida")
    for(elemento in elementos){
        let semana = elementos[elemento];
        semana.innerHTML = semanaElegida[elemento].value;

    }
})


