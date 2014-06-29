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

    // todo: put it in a better place and better way
    var description = "None";
    if (this.Effet == EVariableEffet.goatSacrifice){
        if (this.Modificateur.Modif == EModificateur.fois){
            description = "Effect: your number of goats will be set to " + this.Modificateur.Valeur.toString() + " its current value.";
        }

        if (this.Modificateur.Modif == EModificateur.plus){
            if (this.Modificateur.Valeur > 0){
                description = "Effect: your number of goats will be raised by " + this.Modificateur.Valeur.toString();
            }
            else {
                description = "Effect: your number of goats will be reduced by " + this.Modificateur.Valeur.toString() + " its current value."
            }
        }
    }

    if (this.Effet == EVariableEffet.goatMilkProductivity){
        if (this.Modificateur.Modif == EModificateur.fois){
            description = "Effect: the productivity of your goats will be set to " + this.Modificateur.Valeur.toString() + " its current value.";
        }

        if (this.Modificateur.Modif == EModificateur.plus){
            if (this.Modificateur.Valeur > 0){
                description = "Effect: the productivity of your goats will be increased by " + this.Modificateur.Valeur.toString();
            }
            else {
                description = "Effect: the productivity of your goats will be decreased by " + this.Modificateur.Valeur.toString();
            }
        }
    }

    this.Description = ko.observable(description);
}

var EModificateur = {"plus":1, "fois":2};
Object.freeze(EModificateur);

function Modificateur(enumModif, valeur){
    this.Modif = enumModif;
    this.Valeur = valeur;
}
