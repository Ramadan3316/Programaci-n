// Para copiar `` b n @
// Acordarse de crear el objeto con la clase que le corresponde

class app{
    constructor(cantidadDes,Puntuacion,Peso,){
        this.cDescargas = cantidadDes;
        this.puntuacion = Puntuacion;
        this.peso = Peso;
        this.estaInstalada = false;
        this.estaAbierta = false;

    }
    Instalar(){
        if(this.estaInstalada == false){
            alert("Instalando aplicación...");
            alert("App instalada");
            this.estaInstalada = true;
        }else alert("La app ya esta instalada");
    }
    Desinstalar(){
        if(this.estaInstalada == true){
            alert("Desinstalando aplicación...");
            alert("App desinstalada");
            this.estaInstalada = false;
        }else alert("La app no esta instalada");
    }
    Abrir(){
        if(this.estaInstalada == true && this.estaAbierta == false){
            alert("Abriendo aplicación...");
            alert("Aplicación abierta");
            this.estaAbierta = true;
        }else alert("La aplicación ya esta abierta")
    }
    Cerrar(){
        if(this.estaInstalada == true && this.estaAbierta == true){
            alert("Cerrando aplicación...");
            alert("Aplicación cerrada");
            this.estaAbierta = false;
        }else alert("La aplicación no esta abierta");
    }
    verInfo(numeroA){
        document.write(`<b>La app ${numeroA} tiene:</b><br>
        ${this.cDescargas} de descargas <br>
        ${this.puntuacion} de puntuacion <br>
        y pesa ${this.peso}<br>`)

    }

}

const app1 = new app("30k","3.5","3G");
const app2 = new app("70k","4","1.5G");
const app3 = new app("10k","2.1","200Mb");
const app4 = new app("100k","4.6","500Mb");
const app5 = new app("5k","1.7","50Kb");
const app6 = new app("150k","4.7","100Mb");
const app7 = new app("64k","3.7","700Gb");

app1.verInfo("1");
app2.verInfo("2");
app1.verInfo("3");
app2.verInfo("4");
app1.verInfo("5");
app2.verInfo("6");
app2.verInfo("7");
app1.Instalar();
app1.Abrir();
app1.Cerrar();
app1.Desinstalar();


