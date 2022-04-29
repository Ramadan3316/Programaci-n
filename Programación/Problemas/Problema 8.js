// Para copiar `` b n @
// Acordarse de crear el objeto con la clase que le corresponde
materias = {
    fisica: ["Rodriguez","Maria","Boffe"],
    matematica: ["Simón","cofla","Coscu","Boffe",],
    quimica: ["MOMARDO","Maria","Coscu","Dalto"],
    programacion: ["Tevez","Boffe","Coscu","cofla"]
}

const Inscribir = (materia,alumno) =>{
    let personas = materias[materia];
    personas.shift();
    let alumnos = personas;
    if(alumnos.length >= 3){
        document.write(`La materia <b>${materia}</b> esta llena, no podes incribirte <br>`);
    }else{
        materias[materia].push(alumno);
        document.write(`Usted a sido anotado en la materia solicitada.<br>
        <b>Estos son sus compañeros:</b><br>
        ${alumnos}`);
    }
}

Inscribir("fisica","nanshe");