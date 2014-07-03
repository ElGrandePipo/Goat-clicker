/**
 * Created by Damien on 6/10/14.
 */


// if we follow Arnaud's idea, we won't anymore have only one product
// but some possible products with : a capacity to be stocked by the player, a price (might change with qty later), and fabrication requirements
// fabrication requirement will be a product and a qty
// the player should know that for each existing product, he has a maximum amount of owned, and should be able to buy capacity from the general store
// the player must be able to create products if he owns the prerequisites
// first: we get some products ok
// we add them to the market ok but no logic to retrieve onr anywhere yet (by name, at first (?))
// todo we create a capacity product(? maybe only for goats at least at first) and an owned products list for player for each existing product
// we show the reflect of the products existence in both ok for market but todo for player

function Requirement(productName, qty){
    this.ProductName = ko.observable(productName);
    this.Quantity = ko.observable(qty);
}

function Product(name, price, requirements){
    this.Name = ko.observable(name);
    this.Price = ko.observable(price);
    this.Requirements = ko.observableArray(requirements);
}

function ProductOwning(product, qty)
{
    this.Product = ko.observable(product);
    this.Quantity = ko.observable(qty);
}

function ProductsOwning(productsOwning){
    this.ProductsOwning = productsOwning;
}

ProductsOwning.prototype.ProductByName = function(name){
    var self = this;
    var po = self.ProductsOwning();
    for (var i = 0; i < po.length; i++){
        if (po[i].Product().Name() == name){
            return po[i];
        }
    }
}

// tocentralize
function findElement(arr, propName, propValue) {
    for (var i=0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
            return arr[i];

    // will return undefined if not found; you could return a default instead
}

function Products(products){
    this.Products = products;
}

Products.prototype.Init = function(){
    var milk = new Product("milk", 3,[]);
    var basicCheese = new Product("cheese", 10, [new Requirement("milk", 3)]);
    this.Products().push(milk);
    this.Products().push(basicCheese);
}

function SysInfos(){
    this.Products = ko.observable(
        new Products(
            ko.observableArray(
                [
                    new Product("milk", 3,[]),
                    new Product("cheese", 10, [new Requirement("milk", 3)])
                ]
            )
        )
    );

    this.Market = ko.observable(new Market(100, this.Products()));
    // à remplacer par tab de magasins
    this.Magasins = new MagasinNeutre();

    this.Player = ko.observable(new Player(this.Products()));


    this.DemonicStore = ko.observable(new DemonicStore());

    this.GenererProductionClic = function(){
        return this.Market().GenererProduction(this);
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

        this.Player().SellMilk(this.Market());
        this.Player().ProduceMilk();
        // todo: should not be done this way but right now is...
        // must be applied on Player.SommeDisponible() value changed
       // this.DemonicStore().UpdateAvalaibility(this.Player().SommeDisponible());
    }

    //todo
    this.ClickPlayerProduct = function(product){
        this.Player().CraftProduct(product);
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
