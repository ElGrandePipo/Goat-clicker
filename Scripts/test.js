/*
*  Skill: in work, should have one negative effect (buying it in some way) and a positive one (increase whatever)
* */
function TBruteSkill(nom, description, image, effect, sousCompetencesBrutes, prix){
    var self = this;
    self.Name = ko.observable(nom);

    // even though it's not relevant :p
    self.Description = ko.observable(description);
    self.Illustration = ko.observable(image);
    self.Effect = ko.observable(effect);
    self.RelatedSkills = sousCompetencesBrutes;
    self.Price = ko.observable(prix);

    this.GainLevel = function(){
        var self = this;

        // read into write
        self.Price(self.Price() *2);
    }
}

function TreeSkillVm(){
    var self = this;

    var sacrifice = new TBruteSkill(
        "S",
        "",
        "...jpg",
        EVariableEffet.espaceConsomme,
        [],
        10
    )

    var damnation = new TBruteSkill(
        "D",
        "",
        "...jpg",
        EVariableEffet.espaceConsomme,
        [],
        10
    )

    var mesmerism = new TBruteSkill(
        "M",
        "",
        "...jpg",
        EVariableEffet.espaceConsomme,
        [],
        10
    )

    var arrayComp = [];
    arrayComp.push(sacrifice);
    arrayComp.push(damnation);
    arrayComp.push(mesmerism);

    var goatMadness = new TBruteSkill(
        "Goat Madness",
        "One night, drunk, you reach your home when a goat stands between you and the door of your sweet sweet home. "+
    "This should have ended here, but while you were trying to make her/it move her/its ass, you saw a dark look in his eyes."+
        "Frightened by the glooming look watching for your every move, the blood rushed to your brain, you rose high your" +
    "pocket-hatchet (yes you have one) and killed the foolish goat. Possessed, your fury could not end before sackaging half of" +
    "your goat cheptel." +
        "Oh, and for the bonus, the remaining goats are harder, better, faster, stronger, and you can sacrifice some to apply additional bonuses.",
        "...jpg",
        EVariableEffet.niveauCommercant,
        arrayComp,
        5
    );

    self.RelatedSkills = ko.observableArray([
        new TBruteSkill(
            "Goat Madness",
            "One night, drunk, you reach your home when a goat stands between you and the door of your sweet sweet home. "+
                "This should have ended here, but while you were trying to make her/it move her/its ass, you saw a dark look in his eyes."+
                "Frightened by the glooming look watching for your every move, the blood rushed to your brain, you rose high your" +
                "pocket-hatchet (yes you have one) and killed the foolish goat. Possessed, your fury could not end before sackaging half of" +
                "your goat cheptel." +
                "Oh, and for the bonus, the remaining goats are harder, better, faster, stronger, and you can sacrifice some to apply additional bonuses.",
            "...jpg",
            EVariableEffet.niveauCommercant,
            ko.observableArray([
                new TBruteSkill(
                    "S",
                    "",
                    "...jpg",
                    EVariableEffet.espaceConsomme,
                    [],
                    10
                ),new TBruteSkill(
                "D",
                "",
                "...jpg",
                EVariableEffet.espaceConsomme,
                [],
                10),
                new TBruteSkill(
                    "M",
                    "",
                    "...jpg",
                    EVariableEffet.espaceConsomme,
                    [],
                    10
                )
            ]),
            5
        )
    ]);
}
