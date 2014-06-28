/**
 * Created by Damien on 6/10/14.
 */
function SysInfos(){

    this.Banque = ko.observable(new Banque(20));
    // à remplacer par tab de magasins
    this.Magasins = new MagasinNeutre();

    this.Player = ko.observable(new Player());


    this.DemonicStore = ko.observable(new DemonicStore());

    this.GenererProductionClic = function(){
        return this.Banque.GenererProduction(this);
    }

    // TODO prendre timestamp derniere sauvegarde pour différentiel lorsque reprise
    // if elements lazy (G.Lutins), alors on peut appliquer un coefficient réducteur (voir si on le met pas dans la compétence) en mode "non connecté)
    this.LastTime = 0;

    this.TimeDiff = function(){
        // return dateTime.Now - this.LastTime;
    }

    // applique le différentiel de temps * la production par seconde
    this.ApplyAutoClics  = function(){
        this.Player.LaitAccumule += this.TimeDiff() * this.GenererProductionClic();
    }

    this.SkillBought = function(skill){
        if (this.Player().CanBuySkill(skill)){
            // player achat
            this.Player().BuySkill(skill);
            // competence "level-up"
            skill.GainLevel();
        }

        // todo: update Stores and avalaibilities
        this.UpdateAllInfos();
    }

    this.ClickMainGoat = function(){
        // find a way to get a notion of acceleration in clicks so as there is an "interest" at brutalizing its mouse...

        this.Player().SommeDisponible(this.Player().SommeDisponible() + 20);
        // todo: should not be done this way but right now is...
        // must be applied on Player.SommeDisponible() value changed
       // this.DemonicStore().UpdateAvalaibility(this.Player().SommeDisponible());
    }

    this.UpdateAllInfos = function(){
        this.DemonicStore().UpdateAvalaibility(this.Player().SommeDisponible());
    }

    this.Test = function(){
        alert("à malibouuuuu");
    }

}

var sysInfos = new SysInfos();
//if working to do with skill
var subscriptionOnSommePlayerChanged = sysInfos.Player().SommeDisponible.subscribe(function(newValue){
    sysInfos.DemonicStore().UpdateAvalaibility(newValue);
});


ko.applyBindings(sysInfos);

// commercant : dans un premier temps simple niveau

// evt démonic : production augmentée, population doublée, évolution techno ou particulière, etc
