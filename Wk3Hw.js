// #1 Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = [' cheese', ' ham', ' pineapple', ' bacon '];


// #2 Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {
  console.log("Welcome to God Father's Pizza! These are our topping choices:")
}
greetCustomer();

for (let topping of pizzaToppings) {
  console.log(topping);
 }

// #3 Create a getPizzaOrder function that has the parameters size, crust,
// and an indefinite amount of toppings as inputs. Prints the order,
// i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

let pizzaSize = 'large';
let pizzaCrust = 'thin';
let repeatOrder;

function getPizzaOrder(){

  repeatOrder = `One ${pizzaSize} ${pizzaCrust} crust pizza with`;
  return repeatOrder;
}

getPizzaOrder();
console.log(repeatOrder + pizzaToppings + "coming right up!");








// #4 Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

// #5 Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

// #6 Call each function and (starting with preparePizza) use the returned value from the previous function as its input

// An example output for this assignment is:
// Welcome to The Pizza House, our toppings are: pepperoni, sausage, onions, peppers,
// One large thin crust pizza with sausage, onions, peppers, .
// Coming up! ...your pizza is cooking... Order up!
// Here's your large thin crust pizza with sausage, onions, peppers, . Enjoy!

