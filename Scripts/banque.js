/**
 * Created by Damien on 6/10/14.
 */
function Banque(prixDuLitre){
    // voir si fluctuation avec evenements krach laitier ...
    this.prixDuLitre = prixDuLitre;

    this.GenererRevenu = function (player){
        // les ratios bien au pif
        return this.GenererProduction(player.LaitAccumule)*(this.prixDuLitre * (1 + player.CommercantLevel * 0.5));
    }

    this.GenererProduction = function(goats){
        var total = 0;

        for (var i = 0; i < goats.length; i++){
            // qualite Lait devrait pas être là mais dans un premier temps si
            total += goats[i].ratioProductionLait * goat[i].qualiteLait;
        }

        return total;
    }

}
