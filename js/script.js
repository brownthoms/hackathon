// je dessine la chaussée (rectangle grisé) dans le premier canevas
// au dessus du superbe ciel rosé
var canevas1 = document.querySelector('#canevas1');
var contexte1 = canevas1.getContext('2d');
var X = canevas1.width ;
// vaut 300 var Y= canevas1.height ;
// vaut 150 contexte1.fillStyle = "gray"; contexte1.fillRect(0,120,X,30) ;
// déplacement du camion dans troisième canevas
var canevas3 = document.querySelector('#canevas3');
var contexte3 = canevas3.getContext('2d');
var image = new Image(); image.src = '../images/camion.png';
var x = X; setInterval(animate,50);
//appel de la fonction animate 20 fois par seconde
function animate() { contexte3.clearRect(0, 0, X, Y);
// vider le canevas
if (x <= -75) x = X ; else x = x - 3 ;
contexte3.drawImage(image,x,100,75,50) ; } 
