// Para copiar `` b n @
// Acordarse de crear el objeto con la clase que le corresponde
const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Rodriguez","Maria","Boffe","Dalto"],
        matematica: ["Simón","cofla","Coscu","Boffe",],
        quimica: ["MOMARDO","Maria","Coscu","Dalto"],
        programacion: ["Tevez","Boffe","Coscu","cofla"]
    }
    if(materia !== undefined){
        return [materias[materia],materia,materias]
    }else return materias;
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    if(informacion != false){
        document.write(`<b>${materia}</b><br> 
        <b>Profresor</b>: ${profesor}<br> 
        <b>Alumnos:</b> ${alumnos}<br><br>`)
    }
}

const asistenciaClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let cantidadAsistencias = 0;
    let clasesPresente = [];
    for(clases in informacion){
        let esta = informacion[clases].includes(alumno)
        if(esta == true){
            cantidadAsistencias ++;
            clasesPresente.push( " "+clases);
        }
    }
    return document.write(`El alumno <b>${alumno}</b> asiste a ${cantidadAsistencias} materias.<br>
    <b>Las materias son:</b> ${clasesPresente}`);
}

mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("matematica");
asistenciaClases("cofla");
