from cryptography.fernet import Fernet

class User():
    def __init__(self,usern):
        self.usern = usern;
    
    def addPass(self):
        datos = open("datos.txt","bw");
        keyA = open("Keys.txt","bw");
        self.nPass = input("name de la contraseña que quiere ingresar: ");
        self.key = Fernet.generate_key();
        fernet = Fernet(self.key);
        self.encryptP = fernet.encrypt(self.nPass.encode())
        datos.write(self.encryptP);
        keyA.write(self.key)
    
    def readPass(self):
        datos = open("datos.txt","br");
        fernet = Fernet(self.key)
        self.passEn = datos.read();
        passDe = fernet.decrypt(self.passEn).decode();
        print("La pass encrypt:",self.passEn);
        print("la pass decrypt:",passDe);