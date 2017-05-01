var numtoPrint = +prompt("Enter the table # you want to print!");
var tableLength = +prompt("Enter the length of Table!");

document.write("<b>" + "Table of " + numtoPrint + " goes here:" + "</b>" + "<br />" + "<br />");

for (i = 1; i <= tableLength; i++) {
    document.write(numtoPrint + " x " + i + " = " + numtoPrint * i + "<br />");
}
