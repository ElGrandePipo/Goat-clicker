/**
 * Created by Damien on 6/10/14.
 */
function Player(){
    // introduire enum moralité
    // this.morality = ;

    this.Goats = ko.observableArray([
        new Goat(1, 1, 1),
        new Goat(1, 1, 1),
        new Goat(1, 1, 1),
        new Goat(1, 1, 1),
        new Goat(1, 1, 1),
        new Goat(1, 1, 1),
        new Goat(1, 1, 1),
        new Goat(1, 1, 1)
    ]);

    this.GoatsNumber =  ko.observable(this.Goats().length);

    this.CommercantLevel = 0;

    // nombre de clics automatique (par sec)
    this.FrequenceAutomaticClic = 0;

    // en nombre de chèvres
    this.EspaceDisponible = 4;

    // litres // stockage ?
    this.LaitAccumule = 0;
    this.SommeDisponible = ko.observable(500);

    this.SellMilk = function(banque){
        this.SommeDisponible(this.SommeDisponible() + banque.GenererRevenu(this));
        this.LaitAccumule = 0;
    }

    this.CanBuySkill = function(skill){
        return this.SommeDisponible() >= skill.Price();
    }

    this.BuySkill = function(skill){
        var reste = this.SommeDisponible() - skill.Price();
        this.SommeDisponible(reste);

        for(var x = 0; x < skill.Effects().length; x++){
            var effect = skill.Effects()[x];

            if (effect.Effet == EVariableEffet.goatMilkProductivity){
                for (var i = 0; i < this.Goats().length; i++){
                    // déplacer la mécanique de calcul mais flemme
                    if (effect.Modificateur.Modif == EModificateur.fois){
                        this.Goats()[i].ratioProductionLait *= effect.Modificateur.Valeur;
                    }

                    if (effect.Modificateur.Modif == EModificateur.plus){
                        this.Goats()[i].ratioProductionLait += effect.Modificateur.Valeur;
                    }
                }
            }

            if (effect.Effet == EVariableEffet.goatSacrifice){
                if (effect.Modificateur.Modif == EModificateur.fois){
                    var nbRemaining = this.Goats().length * effect.Modificateur.Valeur;

                    this.Goats().splice(nbRemaining, this.Goats().length - nbRemaining);
                    this.GoatsNumber(this.Goats().length);
                }
            }
        }



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
        for (var i = 0; i < this.Goats().length; i++){
            space += this.Goats()[i].espaceConsomme;
        }

        return space;
    }
    this.GoatSpace = this.GetGoatSpace();

    this.CanBuyGoat= function(goat, price){
        return (goat.espaceConsomme + this.GetGoatSpace()) < this.EspaceDisponible && this.SommeDisponible >= price;
    }

    this.BuyGoat = function(goat, price){
        this.SommeDisponible -= price;
        this.Goats().push(goat);
    }

    this.Personality = new PluriMoralities();
}
