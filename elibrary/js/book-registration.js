"use strict"

$(document).ready(function (params) {
    const bookUrl = "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add";

    $("#newBookForm").submit(function (event) {
        event.preventDefault();

        let bookTitle = $("#bookTitle").val();
        let isbn = $("#isbn").val();
        let overdueFee = $("#overdue").val();
        let publisher = $("#publisher").val();
        let datePublished = $("#datePublished").val();

        console.log(bookTitle);
        console.log(isbn);
        console.log(overdueFee);
        console.log(bookTitle);
        console.log(datePublished);

        $.ajax({
            url: bookUrl,
            contentType: "application/json; charset=utf-8",
            type: "POST",
            data: JSON.stringify({
                title: bookTitle,
                isbn: isbn,
                overdueFee: overdueFee,
                publisher: publisher,
                datePublished: datePublished,

            }),
            success: function(result) {
                console.log(result);
                window.location.href ="./books.html";
            },
            error: function(error) {
                alert("connection problem, please try again");
                console.log(error)
            }
        });
    });
});