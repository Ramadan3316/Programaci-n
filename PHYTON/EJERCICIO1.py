peso = input("Ingrese su peso en Kg: ");
altura = input("Ingrese su altura en m: ");
altura = float(altura);
peso = float(peso);
IMC = peso / altura**2
IMC = round(IMC,2);
print("Tu indice de masa corporal es: ",IMC);

