var a = [12, 45, 3, 22, 34, 50];
var ask = +prompt("Choose a number from this index","12 , 45 , 3 , 22 , 34 , 50");
for (var i = 0; i <a.length; i++){
	if (ask == 12 ){
      document.write("[12]");
      break;
   }
else if (ask == 45 ){
      document.write("[12,45]");
      break;
   }
else if (ask == 3 ){
      document.write("[12,45,3]");
      break;
   }
else if (ask == 22 ){
      document.write("[12,45,3,22]");
      break;
   }
else if (ask == 34 ){
      document.write("[12,45,3,22,34]");
      break;
   }
    else if (ask == 50 ){
      document.write("[12,45,3,22,34,50]");
      break;
   }

   else {
   	document.write("Enter a Valid entry from the before shown index!!");
   break;
   }
}
