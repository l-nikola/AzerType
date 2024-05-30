function afficherResultat(score, nbMotsProposes) {
  let spanScore = document.querySelector(".zoneScore span");
  let affichageScore = `${score} / ${nbMotsProposes}`;
  spanScore.innerText = affichageScore;
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}

function lancerJeu() {
  let score = 0;
  let i = 0;

  let inputEcriture = document.getElementById("inputEcriture");
  let btnValiderMot = document.getElementById("btnValiderMot");

  afficherProposition(listeMots[i]);

  btnValiderMot.addEventListener("click", () => {
    if (inputEcriture.value === listeMots[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    inputEcriture.value = "";

    if (listeMots[i] === undefined) {
      afficherProposition("Le jeu est fini");
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listeMots[i]);
    }
  });
  afficherResultat(score, i);
}
