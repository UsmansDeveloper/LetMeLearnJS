var ask = prompt("Enter any Range!!!")

for (var i=0; i < ask; i++){
	for (j=i; j > 0; j--){
		document.write("*");
	}
	document.write("<br />");
}
for (var i=ask; i > 0; i--){
	for (j=i; j > 0; j--){
		document.write("*");
	}
	document.write("<br />");
}
