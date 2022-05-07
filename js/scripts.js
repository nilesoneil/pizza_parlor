function Pizza (size,toppings) {
  this.size = size;
  this.toppings = toppings;
  this.toppingPrice;
  this.sizePrice;
  this.price;
}

Pizza.prototype.calcToppingsCost = function() {
  if (this.toppings === "pineapple") {
    this.price += 1;
  } else if (this.toppings === "jalapeno") {
    this.price += 1.5;
  } else if (this.toppings === "pepperoni") {
    this.price += 2;
  }
}

Pizza.prototype.calcSizeCost = function() {
  if (this.size === "small") {
    this.sizePrice += 12;
  } else if (this.size === "medium") {
    this.sizePrice += 15;
  } else if (this.size === "large") {
    this.sizePrice += 18;
  }
}

let personalPizza = new Pizza

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

  });
});