/**
 * Created by Damien on 6/10/14.
 */
// magasin générique avec les fonctions de magasins
function Store(texte){
    var self = this;

    self.Texte = ko.observable(texte);
}


// Car c'est là que s'achètent les compétences brave gens!
// un arbre de compétences à imaginer avec des effets divers et variés... compliquer la gestion permettrait de plus varier : ajout d'une chèvre oui mais si espace suffisant ou compétences de nanochèvre
// ou chèvre de l'espace qui se nourrit de je ne sais quoi débile et ne prend plus d'espace, etc...
// un magasin par type ? (pour séparation logique && graphique) avec notamment une ptite image de fond et à terme un style ? (et un son de chèvre ?)
function MagasinNeutre(){
    this.Magasin = new Store("Magasin neutre");

    // pour test
    this.Competences = [];
    this.Competences.push(new CompetenceBeginner("Goat click", "This will help you to increase your click productivity.", "Content/img/store/hand.png", 10, 1, 0, true));
    this.Competences.push(new CompetenceBeginner("Goat Queen", "No more click again ! Thanks to this beautiful queen, no need to click again.", "Content/img/store/goat-queen.jpg", 100, 5, 0, false));
    this.Competences.push(new CompetenceBeginner("Lannister Goat", "A Lannister Goat always produce goat.", "Content/img/store/lannister-goat.jpg", 1000, 100, 0, false));
    this.Competences.push(new CompetenceBeginner("Viagra Goat", "If you're under age do not click here ! (Increase productivity and goat coït)", "Content/img/store/viagra-goat.jpg", 50000, 10000, 0, false));
    this.Competences.push(new CompetenceBeginner("Goat simulator", "Goats playing a goat increase goat productivity (inspired by The Sims)", "Content/img/store/goat-simulator.jpg", 5000000, 1000000, 0, false));

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

// magasin doit vendre des goats (1 goat de + = plus de lait consommé).
function FirstMagasin(){
    this.Magasin = new Magasin(premierMagasin);

    this.Competences = new Array();

    // arbre "qualiteLait"
    var compLevel3 = new BruteSkill("level 3",
                            "",
                            new Effet(EVariableEffet.qualiteLait,
                            new Modificateur(EModificateur.fois, 1.3)),
                            [],
                            1000
                            );
    var sousComps2 = [];
    sousComps2.push(compLevel3);

    var compLevel2 = new BruteSkill("level 2",
                            "",
                            new Effet(EVariableEffet.qualiteLait,
                                new Modificateur(EModificateur.fois, 1.2)),
                            sousComps2,
                            1000
                        );

    var sousComps1 = [];
    sousComps1.push(compLevel2);

    this.Competences.push(
        new BruteSkill("qualite",
            "image",
            new Effet(EVariableEffet.freqAutoClic,
                new Modificateur(EModificateur.fois, 1.1)),
            sousComps1,
            200)
    );

    // faut utiliser une fabrique pour calculer les positions quand construction arbo
    // arbre automatic clic
    var c3 = new BruteSkill("Trayeuse de compétition",
        "Best in the business",
        new Effet(EVariableEffet.freqAutoClic,
            new Modificateur(EModificateur.fois, 1.3)),
        [],
        10000
    );
    var s2 = [];
    s2.push(c3);

    var c2 = new BruteSkill("Trayeuse automatique moyen de gamme",
        "Still not as fast as wished ?",
        "image",
        new Effet(EVariableEffet.freqAutoClic,
            new Modificateur(EModificateur.fois, 1.2)),
        s2,
        1000
    );

    var s1= [];
    s1.push(c2);

    this.Competences.push(
        new BruteSkill("Traie manouelle",
            "G.Lutins : si vous n'êtes pas allergique, main d'oeuvre trèèès bon marché qui traiera même vos chèvres",
            "image",
            new Effet(EVariableEffet.qualiteLait,
                new Modificateur(EModificateur.fois, 1.1)),
            s1,
            200)
    );

    // arbre espace
    this.Competences.push(
        new BruteSkill("espace",
            "image",
            new Effet(EVariableEffet.espaceConsomme,
                new Modificateur(EModificateur.plus, 4)),
            [],
            200)
    );
}

function DemonicStore(){
    this.Store = ko.observable(new Store("Where the devil comes to drink..."));

    this.RelatedSkills = ko.observableArray([
        new TBruteSkill(
            "Goat Madness",
            "One night, drunk, you reach your home when a goat stands between you and the door of your sweet sweet home. "+
                "This should have ended here, but while you were trying to make her/it move her/its ass, you saw a dark look in his eyes."+
                "Frightened by the glooming look watching for your every move, the blood rushed to your brain, you rose high your" +
                "pocket-hatchet (yes you have one) and killed the foolish goat. Possessed, your fury could not end before sackaging half of" +
                "your goat cheptel." +
                "Oh, and for the bonus, the remaining goats are harder, better, faster, stronger, and you can sacrifice some to apply additional bonuses.",
            "Content/img/store/goat-queen.jpg",
            ko.observableArray([
                new Effet(EVariableEffet.goatSacrifice, new Modificateur(EModificateur.fois, 1/2)),
                new Effet(EVariableEffet.goatMilkProductivity, new Modificateur(EModificateur.fois, 1.5))
            ]),
            ko.observableArray([
                new TBruteSkill(
                    "S",
                    "",
                    "Content/img/store/lannister-goat.jpg",
                    ko.observableArray([
                        new Effet(EVariableEffet.goatSpace, new Modificateur(EModificateur.fois, 1/2)),
                        new Effet(EVariableEffet.goatMilkProductivity, new Modificateur(EModificateur.fois, 1.5))
                    ]),
                    ko.observableArray([]),
                    10
                ),new TBruteSkill(
                    "D",
                    "",
                    "Content/img/store/goat-queen.jpg",
                    ko.observableArray([
                        new Effet(EVariableEffet.goatSpace, new Modificateur(EModificateur.fois, 1/2)),
                        new Effet(EVariableEffet.goatMilkProductivity, new Modificateur(EModificateur.fois, 1.5))
                    ]),
                    ko.observableArray([]),
                    10
                ),new TBruteSkill(
                    "M",
                    "",
                    "Content/img/store/lannister-goat.jpg",
                    ko.observableArray([
                        new Effet(EVariableEffet.goatSpace, new Modificateur(EModificateur.fois, 1/2)),
                        new Effet(EVariableEffet.goatMilkProductivity, new Modificateur(EModificateur.fois, 1.5))
                    ]),
                    ko.observableArray([]),
                    10
                )
            ]),
            5
        )
    ]);

    // todo : only money but should introduce more requirements
    this.UpdateAvalaibility = function(playerMoney){
        for (var i = 0; i < this.RelatedSkills().length; i++){
            this.RelatedSkills()[i].UpdateAvalaibility(playerMoney);
        }
    }
}
