var cityToCheck = prompt("Enter any fruit name? \n cake, apple pie, cookie, chips, patties");
cityToCheck = cityToCheck.toLowerCase(); 
var cleanestCities = ["cake", "apple pie", "cookie", "chips", "patties"];
var matchFound = false;
for (var i = 0; i < cleanestCities.length; i++) {
 if (cityToCheck === cleanestCities[i]) {
 matchFound = true;
 alert(cityToCheck + " is avalaible in our List at index " + i);
 }
 }
 if (matchFound === false) {
alert("OPPPS!! We are Sorry! " + cityToCheck + " is not available in our bakery.");
 }
