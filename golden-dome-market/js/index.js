/*function  handleNewProduct(){
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
}*/

// updated
// Using jquery

$(document).ready(function () {

    $("#reset-button").click(function (event) {
        event.preventDefault();
        const productNumber = $("#product-number-input").val("");
        const productName = $("#name-input").val("");
        const unitPrice = $("#unit-price-input").val(0.0);
        const quantityInStock = $("#quantity-in-stock-input").val(0.0);
        const supplier = $("#supplier").val("");
        const suppliedDate = $("#supplied-date").val(null);
    });

    $("#submit-button").click(function (event) {
        event.preventDefault();
        const productNumber = $("#product-number-input").val();
        const productName = $("#name-input").val();
        const unitPrice = $("#unit-price-input").val();
        const quantityInStock = $("#quantity-in-stock-input").val();
        const supplier = $("#supplier").val();
        const suppliedDate = $("#supplied-date").val();

        const newProduct = "\nproductName: " + productName +"\nproductNumber: " + productNumber+
            "\nunitPrice: " + unitPrice +
            "\nquantityInStock: " + quantityInStock+
            "\nsupplier: " + supplier +
            "\nsuppliedDate: " + suppliedDate+"<hr>";

        $("#product-list").append(newProduct);

    });
});