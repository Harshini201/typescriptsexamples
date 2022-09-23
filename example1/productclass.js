var Products = /** @class */ (function () {
    function Products(code, name) {
        this.pid = 0;
        this.pname = "";
        this.price = 200;
        this.pid = code;
        this.pname = name;
    }
    Products.prototype.display = function () {
        var qty = 1;
        console.log("bill=" + this.price * qty);
    };
    return Products;
}());
var prod = new Products(1, 'Bag');
prod.display();
