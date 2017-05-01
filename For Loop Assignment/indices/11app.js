arr = [24, 53, 78, 91, 12];
newValue = Math.max.apply(null, arr);
document.write("Array Items: " + "[" + arr + "]");
document.write("<br />");
document.write("The largest number in the above array is: " + newValue);
document.write("<br />");

document.write("<br />");
var arr = [24, 53, 78, 91, 12];
newValue = Math.min.apply(null, arr);
document.write("Array Items: " + "[" + arr + "]");
document.write("<br />");
document.write("The smallest number in the above array is: " + newValue);
