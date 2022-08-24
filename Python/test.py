from os import system;

def emailVerify(email):
    if(email.__contains__("@") == False and email.__contains__(".com") == False):
        print("Ingrese un email valido")
        getData();
        return False

def intVerify(weight,height):
    try:
        weight = float(weight)
        print("aksjdka");
    except:
        _ = system("cls")
        print("Ingrese un peso valido \n")
        getData()
        return False
    try:
        height = float(height)
    except:
        _ = system("cls")
        print("Ingrese una altura valida");
        getData(True, False)
        return False

def imcCal(weight,height):
    print("entre");
    indexIMC = weight/(height**2)
    if indexIMC < 18.5: 
        return print("Low peso")
    if indexIMC > 18.5 and indexIMC < 24.9:
        return print("normal");
    if indexIMC > 25 and indexIMC < 29.9:
        return print("high peso");
    if  indexIMC > 30:
        return print("super high peso");    

def getData(emailVer = True, messiVer = True):
    weight = input("Ingrese su peso: ")
    height = input("Ingrese su altura: ")
    email = input("Ingrese su email: ")
    data = {
        "weight" : weight,
        "email" : email,
        "height" : height
    }
    emailVerify(data["email"])
    intVerify(data["weight"],data["height"]);
    
    if emailVerify(data["email"]) == True and intVerify(data["weight"],data["height"]) == True:
        print("ajksdja")
        imcCal(data["height"],data["weight"])
        




getData();


