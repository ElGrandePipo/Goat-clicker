/**
 * Created by Damien on 6/10/14.
 */
// les compétences contiennent des souscompetences
// pour l'instant pas introduit mais niveau de compétences avec image et description etc associés.
function Competence(nom, description, image, effet, competences, prix){
    this.Texte = description;
    this.Illustration = image;
    this.Effet = effet;
    this.SousCompetences = competences;
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
	var chaine ='<div class="competence" disabled="disabled" position="'+ position + '" id="goat'+ competence.Nom + '"><h3>' + competence.Nom + '</h3><div class="col-md-3"><img style="width:50px;" src="' + competence.Image +'" alt="store"/></div><div class="col-md-9">' + competence.Description + '</div><br/><span style="float:right;text-align:right;">COST : <label id="goat' + position + '_cost">' + competence.Prix +'</label> GOAT$$    -    GAIN : <label id="goat' + position + '_gain">' + competence.Gain +'</label></span></div>';

    return chaine;
}
