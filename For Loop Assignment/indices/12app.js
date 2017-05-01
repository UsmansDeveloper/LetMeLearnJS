var ask= prompt("Type a Range for the multiples of 5 \n i.e 10 , 100, 15, 65, 22 etc.");
matchFound = false;
for(var i=1; i<=ask; i++){
    if(i % 5 == 0){
        matchFound = true;
        document.write(i + ", ");
}
}
if ( matchFound === false){
    alert("Please enter a valid numeric value!!!!");
}
