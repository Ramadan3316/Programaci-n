// Para copiar `` b n @

let cantidadAlumnos = prompt("Ingrese la cantidad de alumnos");
let Alumnos =[];

for(i=0;i<cantidadAlumnos;i++){
    Alumnos[i] = [prompt("Ingrese el nombre del alumno" + (i+1)), 0 ];
}
const Asistencia = (nombre,p) => {
    let asistencia = prompt(nombre+" P si esta presente y A si no lo esta");
    if(asistencia == "p" || asistencia =="P"){
        Alumnos[p][1]++;
    }
}

for(i=0;i<5;i++){
    for(alumno in Alumnos){
        Asistencia(Alumnos[alumno][0],alumno);
    }
}

for (alumno in Alumnos){
    document.write(`El alumno ${Alumnos[alumno][0]} tiene ${Alumnos[alumno][1]} asistencias`);
    document.write(`El alumno ${Alumnos[alumno][0]} tiene ${5-Alumnos[alumno][1]} inasistencias`);
    if(Alumnos[alumno][1] < 1){
        document.write(`El alumno ${Alumnos[alumno][0]} esta reprobado`);
    }
}
