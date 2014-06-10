/**
 * Created by Damien on 6/10/14.
 */
var EVariableEffet = {"qualiteLait":1, "ratioProductionLait":2, "espaceConsomme":3, "niveauCommercant":4};
Object.freeze(EVariableEffet);

function Effet(enumEffet, modificateur){
    this.Effet = enumEffet;
    this.Modificateur = modificateur;
}

var EModificateur = {"plus":1, "fois":2};
Object.freeze(EModificateur);

function Modificateur(enumModif, valeur){
    this.Modif = enumModif;
    this.Valeur = valeur;
}
