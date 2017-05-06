"use strict"

var Sandwich = (function(sammy) {

    var veggieChoices = {
        "lettuce" : .50,
        "peppers" : 1.00,
        "onions" : .50,
        "tomato" : .50
    };

    var veggiePrice = 0;
    var veggieSelection = "";
    sammy.addVeggies = function(veggieArray) {
        for (let i = 0; i < veggieArray.length; i++) {
                veggieSelection += veggieArray[i] + " ";
                veggiePrice += veggieChoices[veggieArray[i]];


        }
        console.log(veggieSelection, veggiePrice);
        Sandwich.addCost(veggiePrice);
        Sandwich.writeVeggies(veggieSelection);
   }


    return sammy;
})(Sandwich || {});
