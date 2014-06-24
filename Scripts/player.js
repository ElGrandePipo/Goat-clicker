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

    // nombre de clics automatique (par sec)
    this.FrequenceAutomaticClic = 0;

    // en nombre de chèvres
    this.EspaceDisponible = 4;

    // litres // stockage ?
    this.LaitAccumule = 0;
    this.SommeDisponible = ko.observable(500);

    this.VendreLait = function(banque){
        this.SommeDisponible(SommeDisponible() + banque.GenererRevenu(this));
        this.LaitAccumule = 0;
    }

    this.CanBuySkill = function(skill){
        return this.SommeDisponible() >= skill.Prix;
    }

    this.BuySkill = function(skill){
        var reste = this.SommeDisponible() - skill.Price();
        this.SommeDisponible(reste);

        /*
        if (skill.Effet.Effet == EVariableEffet.espaceConsomme){
            for (var i = 0; i < this.goats.length; i++){
                // déplacer la mécanique de calcul mais flemme
                if (skill.Effet.Modificateur.Modif == EModificateur.fois){
                    this.goats[i].espaceConsomme *= skill.Effet.Modificateur.Valeur;
                }

                if (skill.Effet.Modificateur.Modif == EModificateur.plus){
                    this.goats[i].espaceConsomme += skill.Effet.Modificateur.Valeur;
                }
            }

            // rafraichissement espace
            this.GoatSpace = this.GetGoatSpace();
        }

        if (skill.Effet.Effet == EVariableEffet.qualiteLait){
            for (var i = 0; i < this.goats.length; i++){
                // déplacer la mécanique de calcul mais flemme
                if (skill.Effet.Modificateur.Modif == EModificateur.fois){
                    this.goats[i].qualiteLait *= skill.Effet.Modificateur.Valeur;
                }

                if (skill.Effet.Modificateur.Modif == EModificateur.plus){
                    this.goats[i].qualiteLait += skill.Effet.Modificateur.Valeur;
                }
            }
        }

        if (skill.Effet.Effet == EVariableEffet.freqAutoClic){
            if (skill.Effet.Modificateur.Modif == EModificateur.fois){
                this.FrequenceAutomaticClic *= skill.Effet.Modificateur.Valeur;
            }

            if (skill.Effet.Modificateur.Modif == EModificateur.plus){
                this.FrequenceAutomaticClic += skill.Effet.Modificateur.Valeur;
            }
        }


        if (skill.Effet.Effet == EVariableEffet.niveauCommercant){

        }

        if (skill.Effet.Effet == EVariableEffet.ratioProductionLait){

        }*/
    }

    this.GetGoatSpace= function(){
        var space = 0;
        for (var i = 0; i < this.goats.length; i++){
            space += this.goats[i].espaceConsomme;
        }

        return space;
    }
    this.GoatSpace = this.GetGoatSpace();

    this.CanBuyGoat= function(goat, price){
        return (goat.espaceConsomme + this.GetGoatSpace()) < this.EspaceDisponible && this.SommeDisponible >= price;
    }

    this.BuyGoat = function(goat, price){
        this.SommeDisponible -= price;
        this.goats.push(goat);
    }

    this.Personality = new PluriMoralities();
}
