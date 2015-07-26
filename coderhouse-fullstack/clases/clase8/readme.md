#NODE#

Conceptos:
Hilo
Memoria

Como funcionan los esquemas sincronicos

Si quiero instalar un paquete
$ npm install express
La instalacion es local al directorio en el que estoy

Hay una forma de instalacion global.
Sirven para paquetes como comandos.
Es decir que use express aca y haga algo.
No esta pensado para instalarse como comando sino como paquete.

Instalaciones locales vs Intalaciones globales

Existen varios nodulos incluidos en Node

Concepto de filesystem

Un sistema operativo esta compuesto por varias cosas, una es el filesystem que permite guardar carpetas, archivos, saber cuando se guardo, que tamaño tiene.

require es una palabra reservada en Node.

var fs = require('fs');

Ir a documentacion de Node y ver que necesito.

fs.readFile('textFilel.txt', function(){
    console.log('terminó')
)}
//setTimeout(function(){console.log('setTimeout');}, 5000);
console.log('hola');//


A ReadFile se le asignan parametros

fs.readFile('textFile1.txt', function(err, resultado){
    console.log('hola');
    console.log('error:')
})

hola
error: null

encoding: representa caracteres alfanumericos

#Procesos#
Todo lo que tenemos es procesos. Por ej cuando encendemos windows se ejecutan procesos.
Un proceso tiene un identificador --> numero unico
% de CPU 
Uso de memoria

Un programa no corre del disco

Se pasa a memoria y se ejecuta desde la memoria linea por linea
Ese pasaje a memoria tiene un identificador.

Todo el programa se carga a memoria, tanto el codigo como...

process.pid
19444

Hay algo que esta corriendo en la memoria.

Nosotros estamos en algo similar a una terminal

Node esta ejecutando la consola.
Node es un interprete.

ver directorio en windows --> dir
Como me muevo de directorio --> cd dir1
Como salir --> cd..

Ejercicio1
Escribir un programa que devuelva la suma de todos los parametros que recibe
el proceso node

Los parametros se separan por espacio y si un parametro esta separado se une como comillas. Ej params.js "param2 param3"


Ejercicio2
Se pide hacer un programa que imprima 
el resultado de haber concatenado el contenido de 
archivos especificados por parametro. Nota: el
resultado tiene que ser en el orden que se pasaron 
los nombres de archivos.

Ejercicio3
Hacer un programa que reciba una 


El primer parametro siempre va a ser node y el segundo params.js

Como hago para ingresar a la consola de node
Paso 1
cmd
"\Progam Files\nodejs\nodevars.bat"





