/**
 * Created by Damien on 6/10/14.
 */


function Position(x, y){
    this.X = x;
    this.Y = y;
}

// les compétences contiennent des souscompetences
// pour l'instant pas introduit mais niveau de compétences avec image et description etc associés.
function Skill(nom, competenceBrute, sousCompetences,  position, visible){
    this.BruteSkill = competenceBrute;
    this.RelativeSkills = sousCompetences;
    this.Position = position;
    this.Html = "<div";
    this.Visible = visible;
}

function BruteSkill(nom, description, image, effet, sousCompetencesBrutes, prix){
    this.Nom = nom;
    this.Texte = description;
    this.Illustration = image;
    this.Effet = effet;
    this.SousCompetences = sousCompetencesBrutes;
    this.Prix = prix;
}

function FabricSkill(){
    this.GetSkillFromBruteSkill = function(bruteSkill){
        var skill;
        var tempBruteSkill = bruteSkill;

        while (bruteSkill.SousCompetences.length != 0){
            // todo 
        }

        return skill;
    }
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
