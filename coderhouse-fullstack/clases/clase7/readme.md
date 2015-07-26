#OBJETOS#

Hasta ahora ejectutabamos en serie.

Luego vamos a ver eventos.

Que es un objeto?

Todo lo que no es primitivo, es un objeto

function fn(){}
undifined
typeof fn
"function"

Puedo usar como un contenedor de valores.

Puedo referirme al objeto como una estructura de dato. Ej diccionario.
Le voy a decir con que key esta definida y dame este valor x.

var obj = {}; --> este es un objeto vacio
da undefined

var obj = {a: 1};
undefined
obj["a"]
1

Le pido que quiero leer.

Las key siempre van a ser string

Elemento = a     key = 1

o puede ser tambien

obj.a
1

Clase de valores que puedo poner en las keys: numero, string o un objeto.

Siempre que quiero acceder a un objeto, el valor de la llave siempre a ser un string.

Tengo un objeto vacio.

Nos va interesar recorrer un objeto.

Tengo un objeto que tiene valores y quiero saber cuales son pares o impares

Ejercicio 

var obj = {cuenta1: 1, cuenta2: 3, cuenta3: 50000}

var myKey = 'cuenta1';
undefined

obj.myKey

Ejercicio

Crear una funcion obtenerSuma que reciba un objeto y devuelva la suma de todos los valores de sus keys.

Resolucion

function obtenerSuma(obj){
    var keys = Object keys(obj);
    var resultado = 0;
    
    keys forEach(function(curElem){
        if(typeof obj[curElem] === 'number')
        resultado += obj[curElem];
        return false;
        } else{
            return true;
        }
        });

        if(corto){
            throw new Error('lalala');
        }

        return resultado;
}

Hace un mapeo de cantidad de elementos del array como keys del objeto

Esta logica me sirve para cambiar algo.

El DOM es una representacion de todos los objetos HTML que estan en nuestro sitio.

Cada uno de los elementos HTML tienen una representacion como objeto JAVA.
Me interesa cambiar el estado de mi sitio.
Ej cuando hago click en boton y hace algo.

La forma de darle una orden luego de hacer click es mediante javascript.
El atributo html onclick() me permite hacerlo mediante html, pero se puede hacer mediante javascript atraves de una funcion.

JQuery es una libreria de Javascript.
Una libreria es una funcion que hace algo.

Que me da JQuery?
$
jQuery

JQuery me permite acceder a elementos de mi DOM.
Si quiero acceder a id uso #, si quiero usar clases uso . (punto).
Ej.  $('#lst-ib')

typeof $('#lst-ib')
"object"
Array.isArray($('#lst-ib'))
false

$('#lst-ib')[0]
"object"
Object.prototype.toString.call($('#lst-ib')[0])
"[object HTMLInputElement"]

$('#lst-ib')[0]:value = ""
""

$('#lst-ib')[0].value
"esta es mi nueva busqueda"

$('#lst-ib').val()
"esta es mi nueva busqueda"


$(document)
Le paso un elemento del DOM y obtengo un metodo jquery ready.


#Ejercicio earthquakes#

1 parte
Recibo un array y el objetivo es devolver un objeto.
Por cada elemento del array que recibo, recorro el array y pregunto si el elemento despues de la primer coma, existe como key en mi resultado, entonces incremento su valor en 1. Si no existe, le creo una key con el valor del pais a mi objeto resultado, con un valor en 1. Por ultimo retorno el resultado.

Array
For que recorre mi array
Por cada elemento del array me quiero quedar con la parte de pais.


2 parte
por cada key de obj, creo un objeto nuevo, con las keys "name" y 
"value", siendo el valor de "name" la key actual y de value la ocurrencia
y agrego el objeto nuevo creado a resultado.









