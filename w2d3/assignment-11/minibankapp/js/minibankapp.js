/**
 * minibankapp.js
 */
"use strict";
$(document).ready(function () {
    let currentRowId = 2;
    const formNewAccount = document.querySelector("#formNewAccount");
    $("#formNewAccount").submit(function (event) {
        event.preventDefault();
        const strAccountNo = $("#txtAccountNo");
        const strCustomerName = $("#txtCustomerName");
        const strAccountType = $("#ddlAccountType");

        console.log(strAccountNo.val());

        addNewAccountDataRow(strAccountNo.val(), strCustomerName.val(), strAccountType.val());
        strAccountNo.val("");
        strCustomerName.val("");
        strAccountType.val("");
        strAccountNo.focus();
    });

    const addNewAccountDataRow = function (accountNo, customerName, accountType) {
        const tblAccounts = document.querySelector("#tblAccounts");
        const newRow = tblAccounts.insertRow(-1);
        const newCellRowId = newRow.insertCell(0);
        const strNewRowId = document.createTextNode(`${++currentRowId}.`);
        newCellRowId.appendChild(strNewRowId);
        const newCellAccountNo = newRow.insertCell(1);
        const strNewRowAccountNo = document.createTextNode(`${accountNo}`);
        newCellAccountNo.appendChild(strNewRowAccountNo);
        const newCellCustomerName = newRow.insertCell(2);
        const strNewRowCustomerName = document.createTextNode(`${customerName}`);
        newCellCustomerName.appendChild(strNewRowCustomerName);
        const newCellAccountType = newRow.insertCell(3);
        const strNewRowAccountType = document.createTextNode(`${accountType}`);
        newCellAccountType.appendChild(strNewRowAccountType);
    }
    $("#saving-only").change(
        function () {
            if ($(this).is(':checked')) {
                $("#tblAccounts tbody tr").filter(function () {
                    $(this).toggle($(this).text().indexOf("Savings") > -1)
                });
            } else {
                $("#tblAccounts tbody tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf("") > -1)
                });

            }
        });
});