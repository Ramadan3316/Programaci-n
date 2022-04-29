// Para copiar `` b n @

var tempM = -1000,tempm=1000,tempT=0,cont=0,suma=0;
do{
var temp=prompt("Ingrese temperaturas (Presione ´listo´ para no ingresar mas)");
if(temp>tempM && temp != "listo" && isNaN(temp)==false){
    tempM = temp;
}
if(temp<tempm && isNaN(temp)==false){
    tempm = temp;
}
if(temp>10 && temp<20 && isNaN(temp)==false && temp!="listo"){
    tempT++;
}
if(temp!="listo"&& isNaN(temp)==false){
    temp=parseInt(temp,10);
    suma+=temp;
    cont++;//ashe
}
}while(temp != "listo");

let prom=suma/cont;
alert("La temperatura mayor fue "+tempM);
alert("La temperatura menor fue "+tempm);
alert(`Se ingresaron ${tempT} temperatura mayores a 10° y menores a 20°` );
alert("El promedio de temperaturas fue "+prom);

