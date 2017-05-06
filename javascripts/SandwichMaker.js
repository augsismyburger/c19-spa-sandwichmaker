"use strict"

var Sandwich = (function(sammy) {

    var totalPrice = 0;
    sammy.addCost = function(price) {
        totalPrice += price;
        console.log(totalPrice);
        $('#finished-sandwich')[0].innerHTML = `<h4>The total cost of your goddamn sammich is $<em>${totalPrice}</em></h4>`;
    }
    sammy.writeBread = function(bread) {
         $('#bread-spot')[0].innerHTML = `<h5>Your sammich has ${bread} bread.</h5>`;
    }
    sammy.writeMeat = function(meats) {
         $('#meat-spot')[0].innerHTML = `<h5> It's stuffed with ${meats}.</h5>`;
    }
    sammy.writeCheese = function(cheeses) {
         $('#cheese-spot')[0].innerHTML = `<h5> It's layered with ${cheeses} cheese.</h5>`;
    }
    sammy.writeVeggies = function(veggies) {
         $('#veggie-spot')[0].innerHTML = `<h5> It's topped with ${veggies}.</h5>`;
    }
    sammy.writeCondys = function(condys) {
         $('#condy-spot')[0].innerHTML = `<h5> It's splattered with ${condys}. YUM YUM YUM.</h5>`;
    }

    return sammy;
})(Sandwich || {})
