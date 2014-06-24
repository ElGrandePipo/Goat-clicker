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

