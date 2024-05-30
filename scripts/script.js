function afficherResultat(score, nbMotsProposes) {
  let spanScore = document.querySelector(".zoneScore span");
  let affichageScore = `${score} / ${nbMotsProposes}`;
  spanScore.innerText = affichageScore;
}

function choisirPhrasesOuMots() {
  let choix = prompt(
    "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
  );

  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt(
      "Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?"
    );
  }

  return choix;
}

function lancerBoucleDeJeu(listeProposition) {
  let score = 0;
  for (let i = 0; i < listeProposition.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listeProposition[i]);
    if (motUtilisateur === listeProposition[i]) {
      score++;
    }
  }

  return score;
}

function lancerJeu() {
  let choix = choisirPhrasesOuMots();
  let score = 0;
  let nbMotsProposes = 0;

  if (choix === "mots") {
    score = lancerBoucleDeJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else {
    score = lancerBoucleDeJeu(listePhrases);
    nbMotsProposes = listePhrases.length;
  }

  afficherResultat(score, nbMotsProposes);
}
