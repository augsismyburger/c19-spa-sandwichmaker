"use strict"

var Sandwich = (function(sammy) {

    var meatChoices = {
        "turkey" : 3.00,
        "capicolla" : 4.00,
        "lamb" : 3.50,
        "pancetta" : 4.00
    };
    var meatPrice = 0;
    var meatSelection = "";
    sammy.addMeat = function(meatsArray) {
        for (let i = 0; i < meatsArray.length; i++) {
                meatSelection += meatsArray[i] + " ";
                meatPrice += meatChoices[meatsArray[i]];

        }
        console.log(meatSelection, meatPrice);
        Sandwich.addCost(meatPrice);
        Sandwich.writeMeat(meatSelection);
   }


    return sammy;
})(Sandwich || {});
