"use strict"

var Sandwich = (function(sammy) {

    var cheeseChoices = {
        "cheddar" : 2.25,
        "provalone" : 3.25,
        "pepper jack" : 2.50,
        "american" : 1.50
    };

    var cheesePrice = 0;
    var cheeseSelection = "";
    sammy.addCheese = function(cheeseArray) {
        for (let i = 0; i < cheeseArray.length; i++) {
                cheeseSelection += cheeseArray[i] + " ";
                cheesePrice += cheeseChoices[cheeseArray[i]];


        }
        console.log(cheeseSelection, cheesePrice);
        Sandwich.addCost(cheesePrice);
        Sandwich.writeCheese(cheeseSelection);
   }


    return sammy;
})(Sandwich || {});
