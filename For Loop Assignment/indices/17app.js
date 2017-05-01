var ask = prompt("Enter a range to check the even and odd between it");
var matchFound = false;
for (var i = 1; i <= ask; i++){
	if (i % 2 == 0){
		matchFound = true;
		document.write(i  + " is even " + "<br />");
	}
else {
	document.write(i  + " is odd " + "<br />")
}
}
if (matchFound === false){
	document.write("Not a number!!!");
}

