/**
 * Created in PhpStorm
 * @author Brian Kiehn
 * @date 1/10/2020
 * @version 2.0
 * jsreview2.js
 * GreenRiverDev
 */
document.open();

let output = "<p>";

for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0){
        output += "Hee! ";
    }
    if(i % 5 === 0){
        output += "Haw!";
    }
    else{
        output += i;
    }
    output += "<br>";
}
output += "</p>";


document.write(output);
document.close();
