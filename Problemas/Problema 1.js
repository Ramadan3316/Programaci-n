// Para copiar `` b n @
let dineroC = prompt("Ingrese cuanto dinero tiene Cofla");
let dineroR = prompt("Ingrese cuanto dinero tiene Roberto");
let dineroP = prompt("Ingrese cuanto dinero tiene Pedro");
dineroC=parseInt(dineroC);// convertir "3" a 3
dineroR=parseInt(dineroP);
dineroP=parseInt(dineroP);


if(dineroC>=0.6 && dineroC<1){
    alert("Palito de agua");
    alert("tu vuelto es"+ (dineroC-0.6));
}
else if(dineroC>=1 && dineroC<1.6){
    alert("Helado de crema");
    alert("y tu vuelto es "+ (dineroC-1));
}
else if(dineroC>=1.6 && dineroC<1.7){
    alert("Heladix");
    vuelto=(dineroC-1.6);
    alert(vuelto);
}
else if(dineroC>=1.7 && dineroC<1.8){
    alert("heladovich");
    vuelto=(dineroC-1.7);
    alert(vuelto);
}
else if(dineroC>=2.9){
    alert("Helado con confites o 1/4 de helado");
    vuelto=(dineroC-2.9);
    alert(vuelto);
}
else {
    alert("No te alcanza para ningun helado");
}
