'use strict';

let VieJoueur = 100;
let VieMonstre = 100;
let JeuLancé = true;
const attaqueMin = 10 ;
const attaqueMax = 20;
const attaqueSpéciale = 25;
const attaqueSpécialMax = 50;
const soin = 20;

function genererNombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

    

    
