   // .replace


// var text = "The is The Way to write the";
// document.write(text + "<br />");
// document.write(text.replace(/The/, "It") + "<br />");
// document.write(text.replace(/The/i, "It") + "<br />");
// document.write(text.replace(/The/gi, "It") + "<br />");
// document.write(text.replace(/The/g, "It") + "<br />");


//------=------


var input = +prompt('How many times');
for (i = 0; i < input; i++) {
    for (j = i; j > 0; j--) {
        document.write("*");
    }
    document.write("<br />");
}
for (i = input; i > 0; i--) {
    for (j = i; j > 0; j--) {
        document.write("*");
    }
    document.write("<br />");
}


//-------=----


// for (i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write("Hello World" + "<br />");
//     }
//     else {
//         document.write(i + "<br />");
//     }
// }


//------=----


// for (i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         document.write("<b>" +i + " is a multiple of 5" + "<br />" + "</b>");
//     }
//     else {
//         document.write(i + "<br />");
//     }
// }

document.write ("<h3>" + 'Counting:' + "</h3>");
for (var i = 1; i <=15; i++){
    document.write(i + ", ");
}
document.write ("<h3>" + 'Reverse Counting:' + "</h3>");
for (var i = 10; i >=1; i--){
    document.write(i + ", ");
}
document.write ("<h3>" + 'Even:' + "</h3>");
for (var i = 0; i <=20; i++){
    if ( i % 2 == 0)
    document.write(i + ", ");
}
document.write ("<h3>" + 'Odd:' + "</h3>");
for (var i = 0; i <=20; i++){
    if ( i % 2 !== 0)
    document.write(i + ", ");
}
document.write ("<h3>" + 'Series:' + "</h3>");
for (var i = 1; i <=20; i++){
    if ( i % 2 == 0)
    document.write(i + "k, ");
}
