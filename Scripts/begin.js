// Va servir au début, je vais créer des choses à débloquer pour bien débuter l'aventure et surtout partir sur une production autonome.

// On fait du cookie clicker like au début

function generateBeginnerStore()
{
	var tab = [];

	// La valeur entiere designe le prix de base niveau 1 d'un élément du store, la dernière design le gain de productivité
	tab.push({"Nom" : "Automatic click", "Description" : "This will help you to increase your click productivity", "Image" : "src image", "Prix" : "10", "Gain" : "0.1"});
	tab.push({"Nom" : "Goat Queen", "Description" : "No more click again ! Thanks to this beatiful queen, no need to click again.", "Image" : "src image", "Prix" : "100", "Gain" : "5"});
	tab.push({"Nom" : "Competence 3","Description" : "Description 3", "Image" : "src image", "Prix" : "1000", "Gain" : "20"});
	tab.push({"Nom" : "Competence 4","Description" : "Description 4", "Image" : "src image", "Prix" : "5000", "Gain" : "80"});

	return tab;
}