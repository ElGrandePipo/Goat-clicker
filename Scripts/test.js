// les compétences contiennent des souscompetences
// pour l'instant pas introduit mais niveau de compétences avec image et description etc associés.
function TSkill(nom, competenceBrute, sousCompetences,  position, visible){
    this.BruteSkill = competenceBrute;
    this.RelativeSkills = sousCompetences;
    this.Position = position;
    this.Html = "<div";
    this.Visible = visible;
}

function TBruteSkill(nom, description, image, effet, sousCompetencesBrutes, prix){
    var self = this;
    self.Name = nom;
    self.Description = description;
    self.Illustration = image;
    self.Effect = effet;
    self.RelatedSkills = sousCompetencesBrutes;
    self.Price = prix;
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


function BasicSkill(name, price, skills){
    var self = this;

    self.Name = name;
    self.Price = price;
    self.Skills = skills;
}

function BasicTreeSkill(){
    var self = this;

    var array = [];

    var bun = new BasicSkill("a","un");
    var bdeux = new BasicSkill("b","deux");


    array.push(bun);
    array.push(bdeux);

    self.Skills = ko.observableArray([
        //array
        //new BasicSkill("a","un", ko.observableArray([ { Name: "aa", Price: "100" } , { Name: "ab", Price: "100" }])),
        //new BasicSkill("b","deux", ko.observableArray([ { Name: "ba", Price: "100" } , { Name: "bb", Price: "100" }]))
        new BasicSkill("a","un", ko.observableArray([ new BasicSkill("aa", "100"), new BasicSkill("ab", "100")])),
        new BasicSkill("b","deux", ko.observableArray([ new BasicSkill("ba", "100"), new BasicSkill("bb", "100")]))
    ])
}

ko.applyBindings(new TreeSkillVm());