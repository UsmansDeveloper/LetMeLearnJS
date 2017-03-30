var fruits = ["Apple", " Mango", " Bananas", " Peaches"];
document.write("<h1>Simple: </h1>" + fruits);

var fruits = ["Apple", " Mango", " Bananas", " Peaches"];
fruits.push("<b> Papayas </b>");
document.write("<h2>Push: </h2>" + fruits);

var fruits = ["Apple", " Mango", " Bananas", " Peaches"];
fruits.pop( );
document.write("<h2>Pop: </h2>" + "<br />" + fruits);

var fruits = ["Apple", " Mango", " Bananas", " Peaches"];
fruits.shift( );
document.write("<h2>Shift: </h2>" + "<br />" + fruits);

var fruits = ["Apple", " Mango", " Bananas", " Peaches"];
fruits.unshift("<b> Papayas </b>");
document.write("<h2>Unshift: </h2>" + "<br />" + fruits);

var fruits = ["Apple", " Mango", " Bananas", " Peaches"];
var last =  fruits[fruits.length - 1];
document.write("<br />" +last);

var fruits = ["Apple", " Mango", " Bananas", " Peaches"];
fruits.splice(1 , 2);
document.write("<h2>Splice: </h2>" + "<br />" + fruits);

var fruits = ["Apple", " Mango", " Bananas", " Peaches"];
newValue = fruits.slice(0 , 3)
document.write("<h2>Slice: </h2>" + "<br />" + newValue);


for (var num = 1; num <= 10; num++)
{
    document.write("<br >" +"2 x " + num + "=" + num*2)
}

document.write("<br >")
