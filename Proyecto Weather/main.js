
const  taskList = document.querySelector(".tareas__lista")
let lista = [];

console.log("el value del list es "+taskList.value)

//FUNCION PARA COMPLETAR LAS TAREAS
function taskCompleted(index){
    
    const task = document.querySelectorAll(".tarea");
    let taskLength = task.length;
    console.log("el largo del div es "+taskLength);
    //Guardo en cada posicion del arr Lista un elemento distinto de la lista
    for(let i = 1;i < taskLength+1; i++){
        lista[i] = document.querySelector(`.tareas__listaTareas${i} > .li`) //Accedo al hijo .li del padre tareas
        console.log("entre al for");
    }  
    let claseLista = lista[index].classList;
    console.log(claseLista[1]);
    
    if(claseLista[1] == "fa-square"){
        lista[index].setAttribute ("class","fa-solid fa-check-square li");
    }else{
        lista[index].setAttribute ("class","fa-regular fa-square li");
    }   
}

//FUNCION PARA AGREGAR TAREAS
function addTask(){
    const task = document.querySelectorAll(".tarea");
    let taskLength = task.length;
    i=taskLength+1;
    const inputList = document.querySelector(".tareas__listaAdd")
    
    document.onkeydown = function(e){
        if(inputList.value != ""){
            var ev = document.all ? window.event : e;
            if(ev.keyCode==13) {
                const newTask = document.querySelector(".tareas__listaAdd");
                console.log(typeof newTask);

                if(newTask.value != undefined){
                    const addTask = document.createElement("LI"); // Cre un nuevo LI para el nuevo elemento de la lista
                    const addIcon = document.createElement("I")

                    addTask.innerHTML = newTask.value;
                    
                    taskList.appendChild(addTask);//Agrega al padre taskList(lista) un elemento mas addTask
                    
                    addTask.setAttribute("class",`tareas__listaTareas${i} tarea`);
                    addTask.setAttribute("onclick",`taskCompleted(${i})`);
                    addTask.setAttribute("dblclick","taskCompleted(-1)");
                    
                    addTask.appendChild(addIcon);
                    addIcon.setAttribute("class","fa-regular fa-square li");

                    console.log("Agregue la tarea n°"+i);
                    
                    newTask.value = null;
                    i++;
                }
            }
        }
    }
}
