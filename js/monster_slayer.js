'use strict';

let VieJoueur = 100;
let VieMonstre = 100;
let JeuLancé = true;
const attaqueMin = 10;
const attaqueMax = 20;
const attaqueSpécialeMin = 25;
const attaqueSpécialMax = 50;
const soin = 20;

// Fonction utilitaire pour générer un nombre aléatoire entre min et max
function genererNombreAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fonction pour ajouter un message dans le journal du combat
function ajouterLog(message, type = "joueur") {
  const log = document.getElementById("log");
  const nouvelElement = document.createElement("li");
  nouvelElement.textContent = message;
  nouvelElement.classList.add("log-item", type); // utile pour le style CSS
  log.prepend(nouvelElement); // ajoute au début de la liste
}

// Fonction abandonner
function abandonner() {
  if (!JeuLancé) return;
  JeuLancé = false;
  alert("Tu as abandonné le combat !");
  ajouterLog("😢 Tu as abandonné le combat.");
}
document.getElementById('btn-abandon').addEventListener('click', abandonner);

// Attaque normale
function attaquer() {
  if (!JeuLancé) {
    alert("Le jeu est terminé");
    return;
  }

  const degats = genererNombreAleatoire(attaqueMin, attaqueMax);
  VieMonstre -= degats;
  if (VieMonstre < 0) VieMonstre = 0;
  const pourcentage = (VieMonstre / 100) * 100;
  document.getElementById('vie-monstre').style.width = pourcentage + '%';

  ajouterLog(`🗡️ Tu attaques et infliges ${degats} points de dégâts au monstre.`, "joueur");

  if (VieMonstre === 0) {
    alert("Le monstre est vaincu !");
    JeuLancé = false;
    ajouterLog("🎉 Tu as vaincu le monstre !");
    return;
  }

  attaqueMonstre();
}
document.getElementById('btn-attaque').addEventListener('click', attaquer);

// Attaque spéciale
function attaqueSpéciale() {
  if (!JeuLancé) {
    alert("Le jeu est terminé");
    return;
  }

  const degats = genererNombreAleatoire(attaqueSpécialeMin, attaqueSpécialMax);
  VieMonstre -= degats;
  if (VieMonstre < 0) VieMonstre = 0;
  const pourcentage = (VieMonstre / 100) * 100;
  document.getElementById('vie-monstre').style.width = pourcentage + '%';

  ajouterLog(`💥 Attaque spéciale ! Tu infliges ${degats} dégâts au monstre.`, "joueur");

  if (VieMonstre === 0) {
    alert("Le monstre est vaincu !");
    JeuLancé = false;
    ajouterLog("🎉 Tu as vaincu le monstre avec une attaque spéciale !");
    return;
  }

  attaqueMonstre();
}
document.getElementById('btn-special').addEventListener('click', attaqueSpéciale);

// Soins
function soigner() {
  if (!JeuLancé) {
    alert("Le jeu est terminé");
    return;
  }

  VieJoueur += soin;
  if (VieJoueur > 100) VieJoueur = 100;

  const pourcentage = (VieJoueur / 100) * 100;
  document.getElementById('vie-joueur').style.width = pourcentage + '%';

  ajouterLog(`🧪 Tu te soignes de ${soin} points.`, "joueur");

  attaqueMonstre();
}
document.getElementById('btn-soin').addEventListener('click', soigner);

// Attaque du monstre
function attaqueMonstre() {
  const degats = genererNombreAleatoire(5, 15);
  VieJoueur -= degats;
  if (VieJoueur < 0) VieJoueur = 0;

  const pourcentage = (VieJoueur / 100) * 100;
  document.getElementById('vie-joueur').style.width = pourcentage + '%';

  ajouterLog(`👹 Le monstre t’attaque et inflige ${degats} points de dégâts.`, "monstre");

  if (VieJoueur === 0) {
    alert("Tu as été vaincu !");
    JeuLancé = false;
    ajouterLog("☠️ Tu as été vaincu par le monstre...");
  } else {
    alert(`Le monstre t’a attaqué ! Il te reste ${pourcentage}% de vie`);
  }
}
