var  fs = requiere('fs');

var curFilename;
var filenames = process.argv.slice(2);
var filesContents = [];
var i;

function createReadHandler(pos){
	
	return function(error, content){
		if(error){
			console.log(error);
			return;
		}
		filesContents[pos] = content;
		if(processed === filenames.length){
			result = filesContents.reduce(function(prevContent, curContent){
				return prevContent + curContent;
			}, "");
			console.log(result);
		}
	};
}

for(var i = 0; i < filenames.length; i++){
	curFilename = filenames[i];
	fs.readFile(curFilename, 'UTF8', createReadHandler(i));
}



