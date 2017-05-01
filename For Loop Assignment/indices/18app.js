var pro = 1;
var ask = prompt("Enter Initial Number");
var ask1 = prompt("Enter Last Number \n i.e last number > first number")
for (var i = ask; i <= ask1; i++){
	if (i % 2 == 1){
		var pro = pro * i; 		
	}
}
document.write("The Product of odd numbers Between " + ask + " and " + ask1 + " goes here: ");
document.write(pro);
