//Inputs Declaring
var hdDevicePrice = document.getElementById("hdDevicePrice"), //Home Devices -> Device Price
    hdDownPayment = document.getElementById("hdDownPayment"), //Home Devices -> Down Payment
    acDevicePrice = document.getElementById("acDevicePrice"), //Air Conditioner -> Device Price
    acDownPayment = document.getElementById("acDownPayment"); //Air Conditioner -> Down Payment

//Minimum Down Payment Declaring
var hDMinimumDownPayment = document.getElementById("hDMinimumDownPayment"), //Home Devices -> Minimum Down Payment
    aCMinimumDownPayment = document.getElementById("aCMinimumDownPayment"); //Air Conditioners -> Minimum Down Payment


//Homa Applaince Outputs Declarations
var hdOption1 = document.getElementById("hdOption1"),
    hdOption2 = document.getElementById("hdOption2"),
    hdOption3 = document.getElementById("hdOption3"),
    hdOption4 = document.getElementById("hdOption4");

//Air Conditioner Outputs Declarations
var acOption1 = document.getElementById("acOption1"),
    acOption2 = document.getElementById("acOption2"),
    acOption3 = document.getElementById("acOption3"),
    acOption4 = document.getElementById("acOption4");

//Installment Percentage Declaring
const HDper1 =0.09,
    HDper2 =0.18,
    HDper3 =0.27,
    HDper4 =0.36;

const deliveryCost = 40;

document.getElementById("HDper1").innerHTML = HDper1;
document.getElementById("HDper2").innerHTML = HDper2;
document.getElementById("HDper3").innerHTML = HDper3;
document.getElementById("HDper4").innerHTML = HDper4;

//Home Devices Function
function homeApplainceCalc() {
    var remaindCost = hdDevicePrice.value - hdDownPayment.value;
    hdOption1.innerHTML = Math.ceil((remaindCost * HDper1 + remaindCost) / 6 + deliveryCost);
    hdOption2.innerHTML = Math.ceil((remaindCost * HDper2 + remaindCost) / 12 + deliveryCost);
    hdOption3.innerHTML = Math.ceil((remaindCost * HDper3 + remaindCost) / 18 + deliveryCost);
    hdOption4.innerHTML = Math.ceil((remaindCost * HDper4 + remaindCost) / 24 + deliveryCost);
}

//Air Conditioners Function
function airConditionerCalc() {
    var remaindCost = acDevicePrice.value - acDownPayment.value;
    acOption1.innerHTML = Math.ceil(remaindCost / 6 + deliveryCost);
    acOption2.innerHTML = Math.ceil(remaindCost / 12 + deliveryCost);
    acOption3.innerHTML = Math.ceil((remaindCost * 0.10 + remaindCost) / 18 + deliveryCost);
    acOption4.innerHTML = Math.ceil((remaindCost * 0.20 + remaindCost) / 24 + deliveryCost);
}

//Home Devices Minimum Down Payment Function
function hdMinimumCalc() {
    hDMinimumDownPayment.innerHTML = Math.ceil(hdDevicePrice.value * 0.10);
}

//Air Conditioners Minimum Down Payment Function
function acMinimumCalc() {
    aCMinimumDownPayment.innerHTML = Math.ceil(acDevicePrice.value * 0.10);
}
