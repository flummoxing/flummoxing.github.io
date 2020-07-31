var bases = ["White toast", "Omelette", "Scrambled eggs", "Cereal",
              "Oatmeal", "Waffles", "Pancakes", "French toast",
              "Grits", "White rice", "Brown rice", "Whole wheat toast",
              "Cinnamon raisin toast", "Everything bagel", "White bagel",
              "Whole wheat bagel", "Onion bagel", "Cinnamon raisin bagel",
              "English muffin", "Salad", "Cream of wheat", "Weetabix"];

var toppings = ["cream cheese", "ham", "a fried egg", "bacon", "avocado", "kimchi",
                "cinnamon", "raspberry jam", "orange marmalade", "grape jelly",
                "peanut butter", "banana slices", "strawberry slices", "almond slices",
                "crushed walnuts", "Hollandaise sauce", "dried apricots",
                "semisweet chocolate chips", "bittersweet chocolate chips",
                "goat cheese", "feta cheese", "spicy honey", "lavender honey",
                "asparagus", "spinach", "sliced mushrooms", "cilantro", "tarragon",
                "roasted peppers", "fried tomatoes", "arugula"];

document.addEventListener("DOMContentLoaded", bindButtons());

function bindButtons() {
  document.getElementById('generate').addEventListener('click', function(event) {
    event.preventDefault();
    var randomBase = bases[Math.floor(Math.random()*bases.length)]; // Get random food from bases list
    var randomIndex1 = Math.floor(Math.random()*toppings.length);
    var randomIndex2 = Math.floor(Math.random()*toppings.length);
    while (randomIndex1 === randomIndex2) { // prevent duplicate toppings
      var randomIndex2 = Math.floor(Math.random()*toppings.length);
    }
    var randomTopping1 = toppings[randomIndex1]; //Get a random topping
    var randomTopping2 = toppings[randomIndex2]; //Get another random topping
    var idea = randomBase + " with " + randomTopping1 + " and " + randomTopping2;

    document.getElementById('breakfast-idea').textContent = idea;
    document.getElementById('breakfast-idea').style.display = "inline-block";

  });

}
