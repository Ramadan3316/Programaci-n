from os import system;
#Defino el diccionario
data = {}

def emailVerify():
    if(data["email"].__contains__("@") == False or data["email"].__contains__(".com") == False):
        print("Ingrese un email valido")
        return False
    return True

def intVerify():
    try:
        weight = float(data["weight"])
    except:
        _ = system("cls")
        print("Ingrese un peso valido \n")
        return False
    try:
        height = float(data["height"])
    except:
        _ = system("cls")
        print("Ingrese una altura valida");
        return False
    return True, weight, height

def imcCal(height,weight):
    print("entre");
    
    indexIMC = weight/height**2
    if indexIMC < 18.5: 
        return print("Low peso")
    if indexIMC > 18.5 and indexIMC < 24.9:
        return print("normal");
    if indexIMC > 25 and indexIMC < 29.9:
        return print("high peso");
    if  indexIMC > 30:
        return print("super high peso");    


def getData():
    emailVer, intVer = False, False;
    print(emailVer);
    while emailVer == False or intVer == False:
        data["weigth"] = input("Ingrese su peso (en kg): ")
        data["heigth"]  = input("Ingrese su altura (en m): ")
        data["email"]  = input("Ingrese su email: ")
        # data = {
        #     "weight" : weight,
        #     "email" : email,
        #     "height" : height
        # }
        print(data["email"])
        
        emailVer = emailVerify()
        intVer, data["weight"], data["height"] = intVerify();
    
    print(imcCal(data["height"],data["weight"]))
        

getData();


