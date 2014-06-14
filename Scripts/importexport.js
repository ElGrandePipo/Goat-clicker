function existenceSauvegarde()
{
	return localStorage.getItem('save') != null;
}

function getSauvegarde()
{
	if(existenceSauvegarde())
	{
		return localStorage.getItem('save');
	}
	else
	{
		return null;
	}
}

function setSauvegarde(sauvegarde)
{
	localStorage.setItem('save', JSON.stringify(sauvegarde));
}

function supprimerSauvegarde()
{
	localStorage.removeItem('save');
}

function getSauvegardeObject()
{
	// TODO : Par rapport au niveau store il faut plutôt faire une fonction qui va parcourir le store et récupérer le niveau du joueur mais là on est dans le cas du init
	var beginnerStore = generateBeginnerStore();
	var chaineNiveauStore;

	return { "nbClick" : 0, "goats" : 0.0, "niveauStore1" : 0, "niveauStore2" : 0 ,"niveauStore3" : 0 ,"niveauStore4" : 0, "productionManuelle" : 1,	"productionAutomatique" : 0};
}