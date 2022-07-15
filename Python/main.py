#b n
# from cryptography.fernet import Fernet 
from functions import *
# key = Fernet.generate_key();

# Ffernet = Fernet(key)
# print("la key es:",key);
# crypted = Ffernet.encrypt(str1.encode())


User1 = User("Jorge");
User1.addPass();
User1.readPass();
for letras in User1.passEn:
    print(letras);



# key = readKey();
# Ffernet = Fernet(key);

# print("la key es: ",key);
# decryptR = Ffernet.decrypt(contentArchivo()).decode();

# print("String default: ", str1)
# #print("Encriptado ", crypted)
# #print("Lo que leo del archivo:",read);
# print("Lo que leo desencriptado: ", decryptR)
