##FUNCIONES##

alert
prompt

array.reverse
console.log

sacarImpares

function nombre(expr1, expr2)
statement

function prueba(mensaje){
    console.log(mensaje);
}
prueba("hola", "que", "tal");

function prueba(mensaje){
    mensaje.indexOf("hola")
}
    prueba();

    Va a dar un error. 
    Si definimos una funcion, esperamos que sea un string.

    Si mensaje no esta definido, podemos aprovechar lo de la conversion.

if(!mensaje){
    
}

Hago boolean de lo que esta ahi adentro.
Boolean(!mensaje)

!null
true
!undefined
true

El valor booleano de true mensaje es false?

if(!mensaje){
    //no esta definido
}
 
 El indexOf podemos preguntarlo tanto a un string, como a un array.
 


 Cada funcion recibe argumentos y puede tener un valor de retorno

 function buscarPares(arr){
        var res = [];
 }
        return res;

Que espera el operador retorno?
Aca no voy a poder poner un string, ya que lo que devuelve un statement es un undefined.
Vamos a tener un unico valor de retorno.
Que pasa si no pongo un valor de retorno, por defecto va a ser siempre undifined.

Invoco la funcion burcarPares



Ej
Crear una funcion buscarPares
Asume que le pasas un array
Que pasa si no le pasamos un array?
typeOf de array da object --> no se usa typeOf
Se usa un metodo que se llama .is array --> devuelve true or false
Podemos ver que tipo son la cosas, tanto con tipos primitivos como con array.

Cumplimos 2 roles, 
1 Persona que crea el programa
2 Persona que usa el programa

Como podemos marcarle al ususario que paso un error?
Puede ser un alert, pero es una forma muy violenta.
Deberia ser un mensaje de error que no bloquee la pagina.

Si la funcion devuelve un cierto conjunto de valores posibles.
En este caso buscarPares devuelve un array.
Podria devolver un valor que este por fuera de los valores posibles.

Cual es el criterio para agregar proteccion?
Una buena metrica es proteger a la otra persona (la API que expongo), y no proteger lo interno.

Para salir de una funcion salgo con un return.
Es distinto al break, que es una salida de un bucle(for, while, dowhile).

Array.isArray(); Esto devulve true or false
Array.isArray("sarlaga") --> false

typeof [] // object


fuction unaFuncion(arr){
    
    if(Array.isArray(arr)){
        arr.push("otro valor")
    }
    return;
    alert("hola");
}

No llega al alert, da undefined.

En ambos casos, defino undefined, como hago para especificar cada uno?

Comentar en javascript en multilineas --> jsdoc

Cuando paso un error, se sale del flujo normal de mi programa.

Como puedo ver que hay un error --> exceptions

Cual es la manera de frenar el programa --> disparo una excepcion = es una forma de frenar el programa. Se puede ignorar el error y se propaga para arriba, hasta que alguien lo ataje y el programa se termina.

throw "error1";

    if(! Array.isArray(arr)){
            throw "error1";               
                //return undefined;
            }

            if (typeof nbr !== "number"){
                throw "error1";
            }

            arr.push("otro valor");
            return 10;
        }

        var res;

        try{
            res = earlyReturnExample("lalala", true);
        }
        catch (e){

        }

e tal cual como los parametros, e va a hacer algo.

Para que sirve en la realidad?
Hacer conexiones a base de datos. 

Invocacion de funcion es una expresion o sucecion de expresiones
func invocation expression
<func_name>([expr1][,expr2][,...])
Necesito () si o si.


Como freno un error --> con try catch

Es preferible que el programa se rompa a que siga con algo invalido


Todas las varaibles se pasan por valor y ninguno por referencia.
No puedo cambiar el valor de la variable adentro de la funcion.

undefined
function cambiarVariable(myVar){
myVar = true;
}
var myOtherVar;
cambiarVariable(myOtherVar);
console.log(myOtherVar);
VM886:7 undefined
undefined

*Recordar que los tipos de datos primitivos son inmutables*

*En cambio, si se puede cambiar un array -->es mutable*

#Funciones con parametros#




Aridad de las funciones --> cantidad de parametros que tiene una funcion

Objeto argumentos: es una variable que existe dentro de las funciones. Contiene en cada indice una posicion.
Parece un array, pero no es un array.
Todos los objetos tienen un metodo que se llama tostring --> arguments.toString()

Method borrowing --> tomar prestado un metodo

Para ver de que tipo son las cosas puedo usar esta manera
Object.prototype.toString.call()

Los metodos son funciones 
Si bien las funciones no son un tipo de dato, le puedo hacer typeof y me da una funcion.

#Scope o ambito de las variables#

No importa en que lugar defina una variable. 

Hoisting

1-Declaracion de variable
2-Inicializacion de una variable

Las funciones definen los ambitos en javascript.
Valen para adentro y nunca para afuera.

Ejercicio:

Realizar una funcion que reciba un array y una funcion de filtrado y que mediante el uso explicito de forEach contabilice los elementos del array (o que devuelva pares) pasado que al aplicarle la funcion recibida por parametro al elemento actual del forEach esta devuelva true 




forEach

[3, 5, 9].forEach(function(curEl, curIndex, arr){
    console.log(curEl, curIndex, arr);
});

Es igual a:

var myArray = [3, 5, 9];
function hacerAlgo(curEl, curIndex, arr){
    console.log(curEl, curIndex, arr);
}
for(var i = 0; i < myArray.length; i++){
    hacerAlgo(myArray[i], i, myArray);
}





