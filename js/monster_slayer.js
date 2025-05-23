'use strict';

let VieJoueur = 100;
let VieMonstre = 100;
let JeuLancé = true;
const attaqueMin = 10 ;
const attaqueMax = 20;
const attaqueSpéciale = 25;
const attaqueSpécialMax = 50;
const soin = 20;

function abandonner() {
    if (!JeuLancé) return;
    JeuLancé = false;
    alert("Tu as abandonné le combat !");
}
document.getElementById('btn-abandon').addEventListener('click', abandonner);

function genererNombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function attaquer(){
    if (JeuLancé === true){
    const dégats = genererNombreAleatoire(attaqueMin, attaqueMax); 
    VieMonstre = VieMonstre - dégats;
}
if (JeuLancé === false){
    alert("Le jeu est terminé")
    return
}
if (VieMonstre < 0){
    VieMonstre = 0;
}
}

    
