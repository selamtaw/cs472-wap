"use strict";

$(document).ready(function (params) {
    const bookUrl = "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list";
    let bookList = [];
    $.ajax({
        url: bookUrl,
        success: function(result) {
            // console.log(result);
            bookList = result;
            updateTable();
        },
        error: function(error) {
            console.log(error);
            alert("There is a problem with connection, try again!")
        }
    });

    function updateTable(){
        let bookTable = $("#booksTable");
        for(let i = 0; i < bookList.length; i++){
            //bookId: 1628
            // datePublished: null
            // isbn: "123"
            // overdueFee: null
            // publisher: "234"
            // title: "asd"
            console.log(bookList[i]);
            let markup = "<tr><td>" + bookList[i].bookId +
                "</td><td>" + bookList[i].isbn +
                "</td><td>" + bookList[i].title +
                "</td><td>" +bookList[i].overdueFee +
                "</td><td>" + bookList[i].publisher +
                "</td><td>" + bookList[i].datePublished + "</td></tr>";
            $("table tbody").append(markup);
        }
    }
});