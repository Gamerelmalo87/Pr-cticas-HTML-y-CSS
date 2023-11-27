//JAVA SCRIPT


/*
Por donde empezar:
    Al terminar de escribir no hace falta el ";"

    Variables: 
        Las variables se definen con "let":

        let myString = "Esto es una cadena de texto";
        let myNumber = 6;       (Numero entero)
        let myNumber1 = 1.5;    (Numero decimal)
        let myBool = true;

    Constantes:
        Las constantes se escriben con "const", las constantes no pueden cambiar de valor solo se puede operar con ellas:
        
        const My_Const = "Hola Mundo";

    Datos null (nulos):

        let myBool = null;

    Datos undefined:
        Son las variables que aun no han sido definidas:

        let myBool = undefined; (o si no estubiese definida): 
        let myBool

    Control de flujo de datos:

        if (myNumber == 10) {
            console.log("El valor es 10");
        }
        else if (myNumber == 11) {
            console.log("El valor es 11");
        }
        else {
            console.log("El valor no es 10");
        }

        Tambien podemos pedir que compruebe dos cosas con "&&" es como "y":

        if (myNumber == 10 && myBool == true) {
            console.log("La operación se realizo con exito");
        }

        De esta manera tambien podemos decirle que se ejecute si cumple una de las dos con "||" es como "o":

        if (myNumber == 11 || myBool == true){
            consola.log("Una de las operaciones se realizo de forma correcta");
        }

    Funciones:

        Para crear funciones utilizamos "function":

        function myFunction(){
            console.log("Pito pito pito pito!!!");
        }
        myFunction();

    Estructuras:

    Listas o Array:

        let myList = ["Mercedes", "Antonio", 12 , 0]; (Con esto creas una lista que puede contener de todo)
        (Para acceder a los valores de las listas empezamos contando desde el 0 que seria Mercedes hasta donde llegue nuestar lista que en este ejmeplo seria el 3)

    Set:
        En el set no se pueden repetir los elementos y no estan ordenados como en las listas del 0 al X:

        let mySet = new Set(["Hola", "Hola", 12, 20, 12]); (En este set solo habra 3 elementos porque "hola y 12" estan repetidos)
    
    Mapas o diccionarios:
        El nombre es la clave y el numero el valor que guarda
        El mapa o diccionario en globa cosas con [] y dentro de eso que seria el Map tenemos que poner []:

        let myMap = new Map([["Marco",12], ["Jesus", 36], ["Sara", 22]]);

        Podemos añadir valores con "nombremapa.set()"
        myMap.set("Jose", 25);

        Podemos acceder a el valor que queramos con "nombredemapa.get("nombreClave");

    Bucles:
        
        For:

            for(const value of myList){
                console.log(value);
            }

        while:

            let contador = 0;
            
            while(contador <= 100){
                contador ++;
                console.log(contador);
            }
        
    Clases:
        Sirve para defini un objeto muy concreto:

        class MyClass {
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
        }

        let myClass = MyClass
    
    Enum:
        
        const MyEnum = {
            Dart: "dart"
            Python: "python"
            Swift: "swift de apple"
            Java: "java"
        }
        let myEnum = MyEnum;
        console.log(myEnum.Swift)


*/
let myBool = true; 
console.log(typeof myBool); //typeof te dice el tipo de dato que es tu variable
console.log('Hello world!!!');
let mySet = new Set(["Hola", "Hola", 12, 20, 12]);
console.log(mySet);
let myMap = new Map([["Marco",12], ["Jesus", 36], ["Sara", 22]]);
myMap.set("Jose", 25);
console.log(myMap);
console.log(myMap.get("Marco")); //Esto te dara el valor de la clave seleccionada
for(const value of myMap){ //Imprime todos los valores del mapa
    console.log(value);
}
class MyClass {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let myClass = new MyClass("Brais", 12); //Para crear la clase tengo que poner "new" antes que el nombre de la clase
console.log(myClass);
console.log(myClass.name); //una vez creada la clase puedo acceder a cada uno de  sus paramaetros

const MyEnum = {
    Dart: "dart",
    Python: "python",
    Swift: "swift de apple",
    Java: "java"
}
let myEnum = MyEnum;
console.log(myEnum)//Si quiero elegir uno en especifico pongo el nombre de mi Enum mas ".nombre de la clave"
console.log(1+2)

