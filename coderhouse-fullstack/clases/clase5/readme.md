REPASO CLASE 4

Tipos de datos

+Number
+String
+Boolean
+Null
+Undefined

val1 === val2

var str2= "bar";
var str1= "foo";

var str3= str1+str2;

Number(str1)-Number(str2)

me fijo si strl empieza con "f" o "b"
console.log(str1[0] === "f" || str1[0] === "b")


#CLASE 5#

Statements 
-Conditionals
    if
    switch    
-Looping
    while
    do while
    for
-Declaration
    var 
    function
-Error handling
-Others

Expression produce valores, mientras que Statement no produce valores.


While (expr) stmt;
Mientras esta expresion se evalua a true, ejecuta el bloque de codigo entre {}

Boolean(1)===true
Boolean("")===true
Boolean(0)===false
Boolean(cualquier otro num)===true

Boolean(cualquier cosa que evalue a true)===true

var i = 0;
while (i < 10){
    console.log(i);
    i++;
}

var i = 10;
do{
    console.log(i);
    i++;
}
while(i < 10);


i=10;
i++;
10

##For##

for(ini_stmt; cond_expr; post_expr) stmt;

ini_stml se ejecuta antes de que empiece el for
cond_expr la condicion que se evalua a true

var i;
for(i = 0; i < 10; i++) {
cosole.log(i);
console.log(i * 2);

For se utiliza cuando hay algo que tiene que ser incrementado

var i=0;
while (1 < 10){
    console.log(i);
    i++
}

Esto es igual a:

for (i=0; i < 10; i++){
    console.log(i)
}

Que pasa si hay que cumplir una condicion 

var i = 0
for (i=0; i < 10; i++){
    if (i * 2 === 10){
    break;
}
console.log(i)
}

No se llego a ejecutar el i++
break corta abruptamente el ciclo. Corta el for, el while y el do while

##Continue##

var i = 0
while(i < 10){
    if(i * 2 === 10){
    continue;
}
console.log(i);
i++
}

No hay que abusar del continue

##.length##
Da la longitud de un string

var cadena = "str";
cadena.length
3

i = 0
cadena [i] // cadena [0]

A la variable le asigno un valor numerico

var i
var str = "cadena";
i = 0
cadena[i];
i++;
0

Ej1. Hacer un programa que mediante un prompt obtenga una cadena de texto, y luego imprima por consola la posicion de la primera vocal.

Tengo que imrpimir algo

var cadenaDeTexto = prompt("Ingresa la cadena de texto:")
var letra;
var posLetra = 0;

while (posLetra < cadenaDeTexto.length){
    letra = cadenaDeTexto[posLetra];
if
(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ||)
console.log(posLetra);
break;
}
posLetra++;


Imprimir algo
Usar if por condicion
Dada una palabra, obtener cada letra de la palabra
Construir while o do

Ej2. Hacer un programa que mediante un prompt obtenga una cadena de texto, y luego imprima por consola la cantidad de vocales que esta cadena de texto contiene.

Ej3. Dada una cadena de carecteres hacer un programa que cuente todos los caracteres numericos mayores a un numero ingresado mediante un prompt.


str.toUpperCase()
str.toLowerCase()
str.indexOf()
str.lastIndexOf()
str.length()
str.substr()
str.substring()

Ej4. Mediante 2 prompts, recibir dos cadenas de texto e imprimir la posicion en la cual ocurre la 2 en la primera, o imprimir "no se encontro ocurrencia", en caso contrario. Se pide la resolucion mediante el uso de indexOf

##Switch##

switch(expr) {
  case expr1:
    stmtA;
    break;

  case expr2:
    stmtB;
    break;

// ...

  default:
    stmtC;
// opcional
    break;
}



##Array##

Contienen elementos de cualquier tipo (numericos, string, boolean, undefined, null).

Como se declara?

Array ("test", "pepepe");
[ 'test', 'pepepe' ]
Array("test")
[ 'test' ]
Array(2)
[ ,  ]


> var arr = new Array("elem1", "elem2");                                                                                                                                                        
undefined                                                                                                                                                                                       
> var arr = Array("elem1", "elem2");                                                                                                                                                            
undefined                                                                                                                                                                                       
> var arr = [ "elem1", "elem2" ]                                                                                                                                                                
undefined                                                                                                                                                                                       
> arr.length                                                                                                                                                                                    
2                                                                                                                                                                                               
> arr[0]                                                                                                                                                                                        
'elem1'                                                                                                                                                                                         
> arr[1]                                                                                                                                                                                        
'elem2'                                                                                                                                                                                         
> Array con huecos, se llaman valores dispersos.
> Metodos que modifican el array (ej push agrega elementos. Lo contrario de agregar es eliminar elementos).
> push agrego al final
> pop elimino ultimo elemento
> Ambos metodos estan modificando el mismo Array
> Metodos que no modifican el array
> 
> Shift vs Unshift


Ej7. Ingresar N prompt hasta la palabra basta, y mostrar por consola.