function calculate() {
    var tableItems = [
        "salesPrice",
        "postagePrice",
        "totalIncome",
        "fixed",
        "finalFee",
        "purchasePrice",
        "postPaid",
        "profit",
        "cash"
    ]
    var fixed = 0.36
    var rate = 11.9
    var vat = 1.2
    var sale = parseFloat(document.getElementById("sale").value);
    applyTable("salesPrice", parseFloat(sale).toFixed(2));
    var postPrice = parseFloat(document.getElementById("postPrice").value);
    applyTable("postagePrice", parseFloat(postPrice).toFixed(2));
    var income = sale + postPrice;
    applyTable("totalIncome", parseFloat(income).toFixed(2));
    var purchase = parseFloat(document.getElementById("purchase").value);
    applyTable("purchasePrice", parseFloat(purchase).toFixed(2));
    var postage = parseFloat(document.getElementById("postage").value);
    applyTable("postPaid", parseFloat(postage).toFixed(2));
    var rawExpense = purchase + postage;
    var rateApply = (( rate / 100) * income);
    var vatApply = rateApply * vat;
    applyTable("finalFee", parseFloat(vatApply).toFixed(2));
    var fixedApply = vatApply + fixed;
    applyTable("fixed", parseFloat(fixed).toFixed(2));
    var totalExpense = rawExpense + fixedApply;
    applyTable("totalExpense", parseFloat(totalExpense).toFixed(2));
    var profit = income - fixedApply - rawExpense;
    applyTable("profit", parseFloat(profit).toFixed(2));
    var cash = profit + purchase;
    applyTable("cash", parseFloat(cash).toFixed(2));
}
function applyTable(name, data) {
    console.log(name);
    console.log(data);
    var id = document.getElementById(name);
    var data = data;
    id.innerHTML = data;
}