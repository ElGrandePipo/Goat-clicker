/**
 * Created by Damien on 6/10/14.
 */
var EVariableEffet =
{
    "qualiteLait":1,
    "ratioProductionLait":2,
    "espaceConsomme":3,
    "niveauCommercant":4,
    "freqAutoClic":5,
    "goatSacrifice":6,
    "goatMilkQuality":7,
    "goatMilkProductivity":8,
    "goatSpace":9
};
Object.freeze(EVariableEffet);

// would be nice to have a description string at some time.
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
