'use strict';

let VieJoueur = 100;
let VieMonstre = 100;
let JeuLancé = true;
const attaqueMin = 10 ;
const attaqueMax = 20;
const attaqueSpéciale = 25;
const attaqueSpécialMax = 50;
const soin = 20;
const abandon = JeuLancé = false;

function abandonner() {
    if (!JeuLancé) return;
    JeuLancé = false;
    alert("Tu as abandonné le combat !");
}
  
function genererNombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function attaquer(){
    if (JeuLancé === true){

}
if (JeuLancé === false){
    alert("Le jeu est terminé")
    return
}
}

    
