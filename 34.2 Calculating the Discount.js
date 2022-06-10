function main() {
    var prodID = prompt("Enter your Product ID: "(process.argv()));
    var price = prompt("Enter your Price: ");
    var discount = prompt("Enter your Discount: ");
    
    var prod1= new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);
    
    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) {
        
    this.discount = discount;
    this.price = this.price - (this.discount/100 * this.price);
        
    }
}