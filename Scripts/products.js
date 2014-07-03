/**
 * Created by Damien on 7/3/14.
 */

function Requirement(productName, qty){
    this.ProductName = ko.observable(productName);
    this.Quantity = ko.observable(qty);
}

function Product(name, price, image, requirements){
    this.Name = ko.observable(name);
    this.Price = ko.observable(price);
    this.Img = ko.observable(image);
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

Products.prototype.ProductByName = function(name){
    var self = this;
    var po = self.Products();
    for (var i = 0; i < po.length; i++){
        if (po[i].Name() == name){
            return po[i];
        }
    }
}

Products.prototype.Init = function(){
    var milk = new Product("milk", 3, "Content/img/store/milk.jpg",[]);
    var basicCheese = new Product("cheese", 10, "Content/img/store/goat-cheese.jpg", [new Requirement("milk", 3)]);
    this.Products().push(milk);
    this.Products().push(basicCheese);
}
