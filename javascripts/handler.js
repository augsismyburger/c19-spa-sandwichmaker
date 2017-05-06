"use strict"
var Sandwich = (function(sammy) {

    sammy.handle = function() {
        // GATHERING EVENT HANDLERS

        $('#make-sandwich-button').click(function() {
            // BREAD STUFF
            var bread = $('#bread-choice')[0].value;
            Sandwich.addBread(bread);
            // MEAT STUFF
            var meats = $("input[name='meats']");
            var meatArray = [];
            meats.each(function(i) {
                if (meats[i].checked === true) {
                    meatArray.push(meats[i].value);
                }
            });
            Sandwich.addMeat(meatArray);
            // CHEESE STUFF
            var cheese = $("input[name='cheese']");
            var cheeseArray = [];
            cheese.each(function(i) {
                if (cheese[i].checked === true) {
                    cheeseArray.push(cheese[i].value);
                }
            });
            Sandwich.addCheese(cheeseArray);
            // VEGGIE STUFF
            var veggies = $("input[name='veggies']");
            var veggiesArray = [];
            meats.each(function(i) {
                if (veggies[i].checked === true) {
                    veggiesArray.push(veggies[i].value);
                }
            });
            Sandwich.addVeggies(veggiesArray);
            // CONDIMENT STUFFS
            var condys = $("input[name='condys']");
            var condyArray = [];
            condys.each(function(i) {
                if (condys[i].checked === true) {
                    condyArray.push(condys[i].value);
                }
            });
            Sandwich.addCondys(condyArray);
        });
    }


    return sammy;
})(Sandwich || {});
