function Goat(ratioProductionLait, qualiteLait, espaceConsomme, typeGoat) {
    this.ratioProductionLait = ratioProductionLait;
    this.qualiteLait = qualiteLait;
    this.espaceConsomme = espaceConsomme;
    //introduire type pour bonus qque (chèvre spatiale ? , etc)
    this.Type = typeGoat;
}

var EGoatType = {"basicGoat":1, "holyGoat":2, "damnedGoat":3, "superGoat":4, "spaceGoat":5};
Object.freeze(EGoatType);

function FabricGoat(){
    this.GetBasicGoatForType = function(typeGoat) {
        if (typeGoat == EGoatType.basicGoat){
            return new Goat(0.2, 1, 1, EGoatType.basicGoat);
        }

        if (typeGoat == EGoatType.holyGoat){
            return new Goat(0.4, 2, 0.9, EGoatType.holyGoat);
        }

        if (typeGoat == EGoatType.damnedGoat){
            return new Goat(0.8, 0.9, 0.8, EGoatType.damnedGoat);
        }

        if (typeGoat == EGoatType.superGoat){
            return new Goat(0.6, 1.4, 1, EGoatType.superGoat);
        }

        if (typeGoat == EGoatType.spaceGoat){
            return new Goat(0.2, 0.7, 0, EGoatType.spaceGoat);
        }
    }
}
