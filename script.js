/*******************************
 * If Else Statements
 */

/*
var voorNaam = 'frederik';
var statusSamenleving = 'single';
if (statusSamenleving === 'getrouwd'){
    console.log(voorNaam + ' is getrouwd');
} else {
    console.log(voorNaam + ' is misschien binnenkort getrouwd')
}

var isGetrouwd = true;
if (isGetrouwd){
    console.log(voorNaam + ' is getrouwd');
} else {
    console.log(voorNaam + ' is misschien binnenkort getrouwd')
}

var gewichtFrederik = 83;
var lengteFrederik = 1.83;

var gewichtNoortje = 50;
var lengteNoortje = 1.60;

var BMIFrederik = gewichtFrederik / (lengteFrederik * lengteFrederik);
var BMINoortje = gewichtNoortje / (lengteNoortje * lengteNoortje);

if (BMIFrederik > BMINoortje) {
    console.log('Frederik\'s BMI is hoger dan dat van Noortje');
} else {
    console.log('Noortje\'s BMI is hoger dan dat van Frederik');
}
*/

/*******************************
 * Boolean Logic
 */

var voorNaam = 'frederik'
var leeftijd = 22

if (leeftijd < 13){
    console.log(voorNaam + ' is een kind')
} 
else if (leeftijd >= 13 && leeftijd <18){
    console.log(voorNaam + ' is een jongen')
} 
else if (leeftijd >= 18 && leeftijd <=23){
    console.log(voorNaam + ' is een jong volwassene')
}
else {
    console.log(voorNaam + ' is een man')
}
