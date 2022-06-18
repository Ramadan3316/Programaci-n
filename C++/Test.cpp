#include <iostream>
#include <fstream>
#include <stdlib.h>

using namespace std;


void escribirDatos(string);
ofstream archivo;

string var;

int main(){
    archivo.open("datos.txt");

    cout<<"Ingrese un numero ";
    cin>>var;
    archivo << var  << endl;
    archivo.close();
    return 0;
}


