var inputArray = [];
var size = 7;

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

inputArray.sort();
console.log(inputArray);