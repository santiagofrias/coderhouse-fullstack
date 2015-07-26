function suma(){
	var total=0;
	for(var i=2; i < process.argv.length; i++){
		console.log(total);
		total += Number(process.argv[i]);
	}
	return total;
}

console.log(suma());

//Este archivo lo que hace cuando ejecuto node es tomar 
//los parametros devolverme la suma de los mismos
//lo ejecuto con node suma param1 param2 param3

