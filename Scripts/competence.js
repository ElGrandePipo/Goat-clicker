/**
 * Created by Damien on 6/10/14.
 */
// les compétences contiennent des souscompetences
// pour l'instant pas introduit mais niveau de compétences avec image et description etc associés.
function Competence(description, image, effet, competences, prix){
    this.Texte = description;
    this.Illustration = image;
    this.Effet = effet;
    this.SousCompetences = competences;
    this.Prix = prix;
}

function competenceToHtml(competence)
{
	// TODO : Peut être donner un nom à la competence ??
	var chaine ='<div class="competence" id="goatclickproducer">' + competence.Texte + '
                    <br/>
                    COST : <label id="goatclickproducer_cost"></label> ' + competence.Prix +' GOAT$$</div>';

    return chaine;
}
