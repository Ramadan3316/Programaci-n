
const  taskList = document.querySelector(".divTareas__lista")
      
let lista = [];
console.log("el value del list es "+taskList.value)

function taskCompleted(index){
    const task = document.querySelectorAll(".tarea");
    let taskLength = task.length;
    console.log("el largo del div es "+taskLength)
    for(let i = 1;i < taskLength+1; i++){
        lista[i] = document.querySelector(`.divTareas__listaTareas${i}`)
        console.log("entre al for")
    }  
    console.log("el index de la lista que presiono")
    console.log(lista[index]);
    console.log("voy a camiar el diseño de la lista n°"+index)
    lista[index].style.listStyle =  "square inside";
    lista[index].style.textDecoration = "line-through"
    // l.style.listStyle =  "square inside";
}

function addTask(){
    const task = document.querySelectorAll(".tarea");
    let taskLength = task.length;
    i=taskLength+1;
    const inputList = document.querySelector(".divTareas__listaAdd")
    console.log("el valor es: "+inputList.value)
    
    document.onkeydown = function(e){
        if(inputList.value != ""){
        var ev = document.all ? window.event : e;
        if(ev.keyCode==13) {
            const newTask = document.querySelector(".divTareas__listaAdd");
            console.log(typeof newTask)
            if(newTask.value != undefined){
                const addTask = document.createElement("LI");
                addTask.innerHTML = newTask.value;

                taskList.appendChild(addTask);  
                newTask.value = null;

                addTask.setAttribute("class",`divTareas__listaTareas${i} tarea`);
                addTask.setAttribute("onclick",`taskCompleted(${i})`);
                console.log("Agregue la tarea n°"+i);
                i++;
            }
            
        }
    }
    }
}