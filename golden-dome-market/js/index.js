function  handleNewProduct(){
    let productNumber = document.getElementById("product-number-input").value;
    let productName = document.getElementById("name-input").value;
    let unitPrice = document.getElementById("unit-price-input").value;
    let quantityInStock = document.getElementById("quantity-in-stock-input").value;
    let supplier = document.getElementById("supplier").value;
    let suppliedDate = document.getElementById("supplied-date").value;

    alert("productName: " + productName +"\nproductNumber: " + productNumber+
    "\nunitPrice: " + unitPrice +
    "\nquantityInStock: " + quantityInStock+
    "\nsupplier: " + supplier +
    "\nsuppliedDate: " + suppliedDate);
}