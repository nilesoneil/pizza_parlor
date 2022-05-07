function Pizza (size,toppings) {
  this.size = size;
  this.toppings = toppings;
}


$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    

    event.preventDefault();
  });
});