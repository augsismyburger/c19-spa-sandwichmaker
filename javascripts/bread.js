"use strict"

var Sandwich = (function(sammy) {

    var breadChoices = {
        "wheat" : 3.00,
        "rye" : 3.00,
        "cheesy" : 3.00,
        "italian" : 3.00
    };
    var breadPrice = 0;
    var breadType = "";
    sammy.addBread = function(bread) {
        breadType = bread;
        breadPrice = breadChoices[bread];
        console.log(breadType, breadPrice);
        Sandwich.addCost(breadPrice);
        Sandwich.writeBread(breadType);
    }


    return sammy;
})(Sandwich || {});
