from os import system;

def emailVerify(email):
    while email.__contains__("@") == False or email.__contains__(".") == False:#verifico que el email contega @ y .algo
        _ = system("cls")
        email = input("Ingrese un email valido: ")
    return email #Cuando ingrese un email valido lo devuelvo

def dataConvert(data):
    try:
        data = float(data) #Convierto el dato a un float
    except:
        return False, data #Si tira error la conv. devuelvo un false
    return True, data #Si no hay error devuelvo un True

def intVerify(weight,height):
    #convierto los datos a flotante
    weightVer,weight = dataConvert(weight)
    heightVer,height = dataConvert(height)

    while weightVer == False: #Hasta que el peso no sea valido va a seguir pidiendolo
        _ = system("cls")
        weight = input("Ingrese un peso valido: ")
        weightVer,weight = dataConvert(weight)

    while heightVer == False: #Hasta que la altura no sea valida va a seguir pidiendola
        _ = system("cls")
        height = input("Ingrese una altura valida: ")
        heightVer,height = dataConvert(height)
        
    return weight, height #Cuando la altura y el peso sean validos los devuelvo

def imcCal(height,weight):
    #Calculo el IMC y muestro el mensaje correspondiente
    indexIMC = weight/height**2
    print("Calculando el IMC...")
    if indexIMC < 18.5: 
        return print("Low peso")
    elif indexIMC > 18.5 and indexIMC < 24.9:
        return print("normal")
    elif indexIMC > 25 and indexIMC < 29.9:
        return print("high peso")
    else:
        return print("super high peso")    

def getData():
    data = {}
    mask = ["height","weight","email"] #Creo un array que contiene los datos que quiero pedirle al usuario
    
    for p in mask: 
        data[p] = input(f"Ingrese su {p}: ") #Pido los datos y los guardo en el diccionario
    
    data["email"] = emailVerify(data["email"]) #Verifico que el email sea valido, y si lo es lo guardo
    data["weight"], data["height"] = intVerify(data["weight"],data["height"]) #Verifico que el peso y la altura sean 
                                                                              #validos y si los son los guardo

    return data["height"], data["weight"] #Devuelvo el peso y la altura ya verificados

def init():
    print("-------bienvenido a la calculadora de IMC--------")
    print("Porfavor ingrese el peso en kg y la altura en m")
    
    height,weight = getData() #Guardo los datos necesarios ya verificados

    imcCal(height,weight) #Calculo el IMC pasandole la altura y el peso ya verificados
        
init() #Inicio el programa


