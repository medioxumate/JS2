/**
 * @author Brian Kiehn
 * @version 1.0
 * jsreview2.js - review from chapter 2
 * last edited: 4/10/2019
 */
document.open();

var output = "<p>";

for (let i = 1; i <= 100; i++) {
    if((i % 3 === 0) && (i % 5 ===0)){
        output += "Hee Haw!" + "<br>";
    }
    else if(i % 3 === 0){
        output += "Hee!" + "<br>";
    }
    else if(i % 5 === 0){
        output += "Haw!" + "<br>";
    }
    else{
        output += i + "<br>"
    }
}
output += "</p>";


document.write(output);
document.close();
