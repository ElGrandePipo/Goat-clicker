/**
 * Created by Damien on 6/10/14.
 */

// todo tomove
function AddToObservable(koObservable, number){
    koObservable(koObservable() + number);
}

function Player(products){
    // introduire enum moralité
    // this.morality = ;

    // tab to see if sacrifice taken into account
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

    // he's gonna have 1 ProductsOwning for what he has (milk, etc.)
    var productsOwning = ko.observableArray();

    var p = products.Products();
    for (var i = 0; i < p.length; i++){
        var productOwning = new ProductOwning(
            new Product(p[i].Name(), p[i].Price(), p[i].Img(), p[i].Requirements()), 0
        );

        productsOwning.push(productOwning);
    }

    this.ProductsOwning = ko.observable(new ProductsOwning(productsOwning));

    this.CommercantLevel = 0;

    // nombre de clics automatique (par sec)
    this.FrequenceAutomaticClic = 0;

    // max number of goats possible (depends on the space they consume)
    this.EspaceDisponible = 4;

    // if we don't sell right away the milk, more mechanics can be conceived
    this.LaitAccumule = 0;
    this.SommeDisponible = ko.observable(500);

    this.SellMilk = function(banque){
        this.SommeDisponible(this.SommeDisponible() + banque.GenererRevenu(this));
        this.LaitAccumule = 0;
    }

    this.ProduceMilk = function(){
        var qty = this.ProductsOwning().ProductByName("milk").Quantity();
        qty += 2;
        this.ProductsOwning().ProductByName("milk").Quantity(qty);
    }

    // todo
    this.CraftProduct = function(product){
        // for each requirement => reduce qty of product owned
        var self = this;
        var reqs = product.Product().Requirements();

        // no requirement, no craft
        if (reqs.length == 0) { return;}

        //todo torefactor
        for (var i = 0; i < reqs.length; i++){
            var qtyOwned = self.ProductsOwning().ProductByName(reqs[i].ProductName()).Quantity();
            var qtyRequired = reqs[i].Quantity();

            if (qtyOwned < qtyRequired){
                return;
            }
        }

        for (var i = 0; i < reqs.length; i++){
            AddToObservable(this.ProductsOwning().ProductByName(reqs[i].ProductName()).Quantity, -reqs[i].Quantity());
        }

            // for product => increase it by one
        AddToObservable(this.ProductsOwning().ProductByName(product.Product().Name()).Quantity, 1);
    }

    this.CanBuySkill = function(skill){
        return this.SommeDisponible() >= skill.Price();
    }

    this.BuySkill = function(skill){
        var reste = this.SommeDisponible() - skill.Price();
        this.SommeDisponible(reste);

        for(var x = 0; x < skill.Effects().length; x++){
            var effect = skill.Effects()[x];

            // todo would be nice to find a way to properly isolate all of this cause there will be many possible effects
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

                if (effect.Modificateur.Modif == EModificateur.plus){
                    if (effect.Modificateur.Valeur > 0){
                        // todo add goat (construction depends on the bonuses of the player)
                    }
                    else {
                        this.Goats().splice(this.Goats().length - effect.Modificateur.Valeur, effect.Modificateur.Valeur);
                    }
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
