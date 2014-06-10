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
    this.Competences = new Array();
    this.Competences.push(
        new Competence("qualite",
            "image",
            new Effet(EVariableEffet.qualiteLait,
                new Modificateur(EModificateur.fois, 1.1)),
            new Array(),
            200)
    );

    this.Competences.push(
        new Competence("espace",
            "image",
            new Effet(EVariableEffet.espaceConsomme,
                new Modificateur(EModificateur.plus, 4)),
            new Array(),
            200)
    );
}

function MagasinDémonique(){
    this.Magasin = new Magasin("Magasin démoniaque");
}
