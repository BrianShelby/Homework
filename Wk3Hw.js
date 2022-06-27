// #1 Create an array of pizzaToppings with at least four different toppings

const pizzaToppings = ['onion', 'bacon', 'mushroom', 'cheese' ];


// #2 Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings

function greetCustomer() {
  console.log("Welcome to Brian's Pizza! Here are our toppings:");
    for (let t of pizzaToppings) {
      console.log(t);
  };
};

// greetCustomer();

// #3 Create a getPizzaOrder function that has the parameters size, crust,
// and an indefinite amount of toppings as inputs. Prints the order,
// i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(size, crust, ...allToppings) {
  takeOrder = [size, crust, allToppings];
  console.log(`One ${takeOrder[0]} ${takeOrder[1]} crust pizza with ${takeOrder[2]} coming right up!`);
  return takeOrder;
};

// getPizzaOrder("large", "thin", "onion", " bacon", " mushroom", " cheese");

// #4 Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(makeParam){
  makeObject = {
  size: makeParam[0],
  crust: makeParam[1],
  toppings: makeParam[2],
}
console.log("...cooking pizza...");
return makeObject;
};

// preparePizza(['large'], ['thin'], ['onion','bacon','mushroom','cheese','sausage']);

// #5 Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizzaObj) {
  console.log(`Order up! Here's your ${pizzaObj.size} ${pizzaObj.crust} crust pizza with ${pizzaObj.toppings} ...enjoy!`);
  return pizzaObj;
};

// #6 Call each function and (starting with preparePizza) use the returned value from the previous function as its input

greetCustomer();
(servePizza(preparePizza(getPizzaOrder('large','thin','onion','bacon','mushroom','cheese','tomato'))));






