// Para copiar `` b n @
// Acordarse de crear el objeto con la clase que le corresponde

class celular{
    constructor(color,peso,resolucionP,resolucionC,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionP = resolucionP;
        this.resolucionC = resolucionC;
        this.ram = ram;
        this.botonOn = false;
        this.encendido = false;
    }
    verInfo(nombreC){
        return `<b>${nombreC}</b><br>
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolución de camara:<b>${this.resolucionP}</b><br>
        Resolución de pantalla:<b>${this.resolucionC}</b><br>
        Memoria RAM:<b>${this.ram}</b><br>`
    }
    Encender(numeroC){
        if(this.botonOn = true && this.encendido == false){
            alert(`El celular ${numeroC} se esta prendiendo`);
            this.botonOn = true;
            this.encendido = true;
            alert(`El celular ${numeroC} se prendió`)
        }else alert(`El celular ${numeroC} esta prendido`);
    }
    Apagar(numeroC){
        if(this.botonOn = true && this.encendido == true){
        alert(`El celular ${numeroC} se esta apagando`);
        this.botonOn = true;
        this.encendido=false;
        alert(`El celular ${numeroC} se apagó`)
        }else alert(`El celular ${numeroC} esta apagado`);
    }
    Reiniciar(numeroC){
        alert(`El celular ${numeroC} se esta reiniciando`);
        alert(`El celular ${numeroC} se reinició`)
    }
    sacarFoto(numeroC){
        alert(`El celular ${numeroC} tomo una foto a una resolucion de ${this.resolucionC}`);
    }
    hacerVideo(numeroC){
        alert(`El celular ${numeroC} esta haciendo un video a la resolucion de ${this.resolucionC}`);
    }
}


class altaGamma extends celular{
    constructor(color,peso,resolucionP,resolucionC,ram,rdce){
        super(color,peso,resolucionP,resolucionC,ram);
        this.resolucionCN = rdce;
    }
    CamaraSL(){
        alert(`Se empezo a grabar la camara super lenta a una resolución de ${this.resolucionCN}`);
    }
    ReconocimientoFacial(ReconocerCara){
        if(ReconocerCara = true){
            alert("Se desbloqueo el celular");
        }else alert("No se puede reconocer la cara");
    }
}


const celu1 = new altaGamma("Rojo",13,100,25,3,20);
const celu2 = new altaGamma("Verde",14,105,40,5,30);
const celu3 = new celular("Amarillo",10,80,20,2);

document.write(`${celu1.verInfo("Celular 1")}<br>
${celu2.verInfo("Celular 2")}<br>
${celu1.verInfo("Celular 1")}`);

celu1.Encender("1");
celu1.Apagar("1");
celu1.Reiniciar("1");
celu1.sacarFoto("1");
celu1.hacerVideo("1");
celu1.CamaraSL();
celu1.ReconocimientoFacial(true);
