let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
	let regex = new RegExp(`/${process.argv[3]}/g`);
	let result = data.replace(regex, `"_id":`);
	let newFileTemp = process.argv[2].split(".json");
	let newFileName = newFileTemp[0]+"_fixed.json";
	fs.open(newFileName, 'a', function(err, fd){
		if(err){
			console.log("write failed: "+err);
		}else{
			fs.write(fd, result, (err, bytes) => {
				if(err){
					console.log("write failed: "+err);
				}else{
					console.log("success");
				}
			}); 
		}
	});
});
