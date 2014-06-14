/**
 * Created by Damien on 6/10/14.
 */
// magasin générique avec les fonctions de magasins
function Magasin(texte){
    this.Texte = texte;
}


// Car c'est là que s'achètent les compétences brave gens!
// un arbre de compétences à imaginer avec des effets divers et variés... compliquer la gestion permettrait de plus varier : ajout d'une chèvre oui mais si espace suffisant ou compétences de nanochèvre
// ou chèvre de l'espace qui se nourrit de je ne sais quoi débile et ne prend plus d'espace, etc...
// un magasin par type ? (pour séparation logique && graphique) avec notamment une ptite image de fond et à terme un style ? (et un son de chèvre ?)
function MagasinNeutre(){
    this.Magasin = new Magasin("Magasin neutre");

    // pour test
    this.Competences = [];
    this.Competences.push(new CompetenceBeginner("Automatic click", "This will help you to increase your click productivity.", "Content/img/store/hand.png", 10, 1, 0, true));
    this.Competences.push(new CompetenceBeginner("Goat Queen", "No more click again ! Thanks to this beautiful queen, no need to click again.", "Content/img/store/goat-queen.jpg", 100, 5, 0, false));
    this.Competences.push(new CompetenceBeginner("Lannister Goat", "A Lannister Goat always produce goat.", "Content/img/store/lannister-goat.jpg", 1000, 100, 0, false));
    this.Competences.push(new CompetenceBeginner("Viagra Goat", "If you're under age do not click here ! (Increase productivity and goat coït)", "Content/img/store/viagra-goat.jpg", 5000, 1000, 0, false));

   /* this.Competences = [];
    this.Competences.push(
        new Competence("qualite",
            "image",
            new Effet(EVariableEffet.qualiteLait,
                new Modificateur(EModificateur.fois, 1.1)),
            [],
            200)
    );

    this.Competences.push(
        new Competence("espace",
            "image",
            new Effet(EVariableEffet.espaceConsomme,
                new Modificateur(EModificateur.plus, 4)),
            [],
            200)
    );*/
}

function MagasinDemonique(){
    this.Magasin = new Magasin("Magasin démoniaque");
}
