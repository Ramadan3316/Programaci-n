# from sys import path
# path.append("..\\extra")
from extra.good.alpha import FunA

def Alpha():
    return FunA()

def strVerify(verify,contain):
    if verify.__contains__(contain):
        return True
    else:
        return False

def floatVer(data):
    try:
        data = float(data)
    except:
        data = 0;
        return data 
    return data

