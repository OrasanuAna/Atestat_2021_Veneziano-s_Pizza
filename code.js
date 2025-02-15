var myCosArray = []; 
let cosValue = 0;

export function mySelectChangeFunction( pizzaSelectField, pizzaPrice) {
    try {
        var d = document.getElementById(pizzaSelectField).value;
        if( d =="mica" ) {
            document.getElementById(pizzaPrice).innerHTML = 'Pret: 30RON';
        }
        if( d =="medie" ) {
            document.getElementById(pizzaPrice).innerHTML = 'Pret: 40RON';
        }
        if( d =="mare" ) {
            document.getElementById(pizzaPrice).innerHTML = 'Pret: 50RON';
        }
    }
    catch (err) {
        alert(err);
    }
}

export function cumparaCos() {

    if (cosValue > 0) {

        var stringCos = "Cosul contine: \n";

        stringCos = stringCos + myCosArray.join('\n') + "\nDoriti sa platiti?";

        if( confirm(stringCos)) {
            alert("Plata a fost efectuata cu success!");
            cosValue = 0;
            myCosArray = [];
            document.getElementById('cos_value').innerHTML = cosValue + ' RON';     
            document.cookie = "cosValue="+cosValue;  
            document.cookie = "cosArray=";
        }
        else {
            alert("Produsele nu au fost cumparate!");
        }
    }
    else {
        alert("Cosul este gol!");
    }
}

export function addPizzaToCart( pizzaName, pizzaSelectField) {

    var d = document.getElementById(pizzaSelectField).value;
    var pizzaPret = 0;
    var pizzaSize = d;
     if( d =="mica" ) {
         cosValue = cosValue + 30;
         pizzaPret = 30;
     }
     if( d =="medie" ) {
         cosValue = cosValue + 40;
         pizzaPret = 40;
     }
     if( d =="mare" ) {
         cosValue = cosValue + 50;
         pizzaPret = 50;
     }
    document.getElementById('cos_value').innerHTML = cosValue + ' RON';

    myCosArray.push("Pizza " + d + " " + pizzaName + " in valoare de " + pizzaPret + "RON");

    document.cookie = "cosValue="+cosValue;
    document.cookie = "cosArray="+myCosArray.join('|');

    alert("Pizza " + d + " " + pizzaName + " in valoare de " + pizzaPret + "RON a fost adaugata in cos!")
 }

 window.getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }

 export function SetCosValue( ) {
    cosValue = Number(getCookie('cosValue'));

    var array = getCookie('cosArray');
    if( array )
        myCosArray = getCookie('cosArray').split('|');
    else
        myCosArray = [];
 }

 export function addProductToCart( product, price) {

    cosValue = Number(cosValue) + Number(price);

    document.getElementById('cos_value').innerHTML = cosValue + ' RON';

    myCosArray.push( product + " in valoare de " + price + "RON");

    document.cookie = "cosValue="+cosValue;
    document.cookie = "cosArray="+myCosArray.join('|');

    alert( product + " in valoare de " + price + "RON a fost adaugat(a) in cos!");
 }

 export { cosValue} ;

