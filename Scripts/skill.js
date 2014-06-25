/**
 * Created by Damien on 6/10/14.
 */


function Position(x, y){
    this.X = x;
    this.Y = y;
}

// without any logic above being a skill
function BruteSkill(nom, description, image, effet, sousCompetencesBrutes, prix){
    this.Nom = nom;
    this.Texte = description;
    this.Illustration = image;
    this.Effet = effet;
    this.SousCompetences = sousCompetencesBrutes;
    this.Prix = prix;

}



function CompetenceBeginner(nom, description, image, prix, gain, levelstore, gainManuel)
{
    this.Nom = nom;
    this.Description = description;
    this.Image = image;
    this.Prix = prix;
    this.Gain = gain;
    this.LevelStore = levelstore;
    this.GainManuel  = gainManuel;
}

function competenceToHtml(competence, position)
{
	// TODO : Peut être donner un nom à la competence ??
	var chaine =
        '<div class="competence" disabled="disabled" position="'+ position + '" id="goat'+ competence.Nom + '"><h3>' + competence.Nom + '</h3><div class="col-md-3"><img style="width:50px;" src="' + competence.Image +'" alt="store"/></div><div class="col-md-9">' + competence.Description + '</div><br/><span style="float:right;text-align:right;">COST : <label id="goat' + position + '_cost">' + competence.Prix +'</label> GOAT$$    -    GAIN : <label id="goat' + position + '_gain">' + competence.Gain +'</label></span></div>';

    return chaine;
}

/*
 *  Skill: in work, should have one negative effect (buying it in some way) and a positive one (increase whatever)
 * */
function TBruteSkill(nom, description, image, effect, sousCompetencesBrutes, prix){
    this.Name = ko.observable(nom);

    // even though it's not relevant :p
    this.Description = ko.observable(description);
    this.Illustration = ko.observable(image);

    // actually maybe a skill should just be a collection of effects with an effect as a "type", a numeric variable operator, and a value
    this.Effect = ko.observableArray(effect);
    this.RelatedSkills = sousCompetencesBrutes;
    this.Price = ko.observable(prix);

    this.GainLevel = function(){
        // read into write
        this.Price(this.Price() *2);
    }
}