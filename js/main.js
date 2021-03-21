//PERCENTAGES DECLARING
const ACper1 = 0,
    ACper2 = 0,
    ACper3 = 0.10,
    ACper4 = 0.20;
//PERCENTAGES DECLARING
const HDper1 = 0.09,
    HDper2 = 0.18,
    HDper3 = 0.27,
    HDper4 = 0.36;
//MOTHERS DAY SECTION INSTALLED
const MDper1 = 0,
    MDper2 = 0,
    MDper3 = 0.27,
    MDper4 = 0.36;

const deliveryCost = 0;

//INPUTS
var formOneDevicePrice = document.getElementById("formOneDevicePrice"),
    formOneDownPayment = document.getElementById("formOneDownPayment"),
    formTwoDevicePrice = document.getElementById("formTwoDevicePrice"),
    formTwoDownPayment = document.getElementById("formTwoDownPayment"),
    formThreeDevicePrice = document.getElementById("formThreeDevicePrice"),
    formThreeDownPayment = document.getElementById("formThreeDownPayment");

//Minimum Down Payment Declaring
var formOneMinimumDownPayment = document.getElementById("formOneMinimumDownPayment"),
    formTwoMinimumDownPayment = document.getElementById("formTwoMinimumDownPayment"),
    formThreeMinimumDownPayment = document.getElementById("formThreeMinimumDownPayment");


//FORM 1
var airResult1 = document.getElementById("airResult1"),
    airResult2 = document.getElementById("airResult2"),
    airResult3 = document.getElementById("airResult3"),
    airResult4 = document.getElementById("airResult4");

//FORM 2
var homeResult1 = document.getElementById("homeResult1"),
    homeResult2 = document.getElementById("homeResult2"),
    homeResult3 = document.getElementById("homeResult3"),
    homeResult4 = document.getElementById("homeResult4");

//FORM 3
var offerResult1 = document.getElementById("offerResult1"),
    offerResult2 = document.getElementById("offerResult2"),
    offerResult3 = document.getElementById("offerResult3"),
    offerResult4 = document.getElementById("offerResult4");


//PRINTING MINIMUM DOWN PAYMENT FUNCTIONS

function formOneMinimumDownPaymentCalc() {
    formOneMinimumDownPayment.innerHTML = Math.ceil(formOneDevicePrice.value * 0.10);
}

function formTwoMinimumDownPaymentCalc() {
    formTwoMinimumDownPayment.innerHTML = Math.ceil(formTwoDevicePrice.value * 0.10);
}

function formThreeMinimumDownPaymentCalc() {
    formThreeMinimumDownPayment.innerHTML = Math.ceil(formThreeDevicePrice.value * 0.10);
}

//PRINTING PERCENTAGES

document.getElementById("airPercentage1").innerHTML = ACper1 * 100 + " %";
document.getElementById("airPercentage2").innerHTML = ACper2 * 100 + " %";
document.getElementById("airPercentage3").innerHTML = ACper3 * 100 + " %";
document.getElementById("airPercentage4").innerHTML = ACper4 * 100 + " %";

document.getElementById("homePercentage1").innerHTML = HDper1 * 100 + " %";
document.getElementById("homePercentage2").innerHTML = HDper2 * 100 + " %";
document.getElementById("homePercentage3").innerHTML = HDper3 * 100 + " %";
document.getElementById("homePercentage4").innerHTML = HDper4 * 100 + " %";

document.getElementById("offerPercentage1").innerHTML = MDper1 * 100 + " %";
document.getElementById("offerPercentage2").innerHTML = MDper2 * 100 + " %";
document.getElementById("offerPercentage3").innerHTML = MDper3 * 100 + " %";
document.getElementById("offerPercentage4").innerHTML = MDper4 * 100 + " %";


//CALCULATING FUNCTIONS

function formOneCalc() {
    var remaindCost = formOneDevicePrice.value - formOneDownPayment.value;
    airResult1.innerHTML = Math.ceil(remaindCost / 6 + deliveryCost);
    airResult2.innerHTML = Math.ceil(remaindCost / 12 + deliveryCost);
    airResult3.innerHTML = Math.ceil((remaindCost * ACper3 + remaindCost) / 18 + deliveryCost);
    airResult4.innerHTML = Math.ceil((remaindCost * ACper4 + remaindCost) / 24 + deliveryCost);
}

function formTwoCalc() {
    var remaindCost = formTwoDevicePrice.value - formTwoDownPayment.value;
    homeResult1.innerHTML = Math.ceil((remaindCost * HDper1 + remaindCost) / 6 + deliveryCost);
    homeResult2.innerHTML = Math.ceil((remaindCost * HDper2 + remaindCost) / 12 + deliveryCost);
    homeResult3.innerHTML = Math.ceil((remaindCost * HDper3 + remaindCost) / 18 + deliveryCost);
    homeResult4.innerHTML = Math.ceil((remaindCost * HDper4 + remaindCost) / 24 + deliveryCost);
}

function formThreeCalc() {
    var remaindCost = formThreeDevicePrice.value - formThreeDownPayment.value;
    offerResult1.innerHTML = Math.ceil(remaindCost / 6 + deliveryCost);
    offerResult2.innerHTML = Math.ceil(remaindCost / 12 + deliveryCost);
    offerResult3.innerHTML = Math.ceil((remaindCost * MDper3 + remaindCost) / 18 + deliveryCost);
    offerResult4.innerHTML = Math.ceil((remaindCost * MDper4 + remaindCost) / 24 + deliveryCost);
}