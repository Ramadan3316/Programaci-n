#b n 
from cryptography.fernet import Fernet

# key = Fernet.generate_key();

# Ffernet = Fernet(key)
# print("la key es:",key);
# crypted = Ffernet.encrypt(str1.encode())
#
class User():
    def __init__(self,usern):
        self.usern = usern;
    def addPass(self):
        self.nPass = input("name de la contraseña que quiere ingresar");
        self.Pass = input("Ingrese la contra");

User1 = User("Jorge");
User1.addPass()

# key = readKey();
# Ffernet = Fernet(key);

# print("la key es: ",key);
# decryptR = Ffernet.decrypt(contentArchivo()).decode();

# print("String default: ", str1)
# #print("Encriptado ", crypted)
# #print("Lo que leo del archivo:",read);
# print("Lo que leo desencriptado: ", decryptR)
