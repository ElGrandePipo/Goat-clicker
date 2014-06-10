/**
 * Created by Damien on 6/10/14.
 */
function Player(){
    // introduire enum moralité
    // this.morality = ;

    this.goats = new Array();
    // la chèvre de base
    this.goats.push(new Goat(0.2, 1, 1));

    this.CommercantLevel = 0;

    // en nombre de chèvres
    this.EspaceDisponible = 4;

    // litres // stockage ?
    this.LaitAccumule = 0;
    this.SommeDisponible = 0;

    this.VendreLait = function(banque){
        this.SommeDisponible += banque.GenererRevenu(this);
        this.LaitAccumule = 0;
    }

    this.AcheterCompetence = function(competence){
        this.SommeDisponible -= competence.Prix;

        if (competence.Effet.Effet == EVariableEffet.espaceConsomme){
            for (var i = 0; i < this.goats.length; i++){
                // déplacer la mécanique de calcul mais flemme
                if (competence.Effet.Modificateur.Modif == EModificateur.fois){
                    this.goats[i].espaceConsomme *= competence.Effet.Modificateur.Valeur;
                }

                if (competence.Effet.Modificateur.Modif == EModificateur.plus){
                    this.goats[i].espaceConsomme += competence.Effet.Modificateur.Valeur;
                }
            }

            this.GoatSpace = this.GetGoatSpace();
        }

        if (competence.Effet.Effet == EVariableEffet.qualiteLait){
            for (var i = 0; i < this.goats.length; i++){
                // déplacer la mécanique de calcul mais flemme
                if (competence.Effet.Modificateur.Modif == EModificateur.fois){
                    this.goats[i].qualiteLait *= competence.Effet.Modificateur.Valeur;
                }

                if (competence.Effet.Modificateur.Modif == EModificateur.plus){
                    this.goats[i].qualiteLait += competence.Effet.Modificateur.Valeur;
                }
            }
        }

        if (competence.Effet.Effet == EVariableEffet.niveauCommercant){

        }

        if (competence.Effet.Effet == EVariableEffet.ratioProductionLait){

        }
    }

    this.GetGoatSpace= function(){
        var space = 0;
        for (var i = 0; i < this.goats.length; i++){
            space += this.goats[i].espaceConsomme;
        }

        return space;
    }
    this.GoatSpace = this.GetGoatSpace();

    this.CanBuyGoat= function(goat){
        return (goat.espaceConsomme + this.GetGoatSpace()) < this.EspaceDisponible;
    }

    this.Personality = new PluriMoralities();
}