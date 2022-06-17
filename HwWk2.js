// 4. Create two variables
// 5. Reference the name of your pizza place and the number of toppings

let pizzaPlace = "God Fathers Pizza";
let numberOfToppings = 4;

// 6. Print the variables and their types

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);
VM67:4 string
VM67:5 number

// 7. Print a template literal that uses both variables to construct a short sentence

console.log(`${pizzaPlace} is the best when you add ${numberOfToppings} toppings.`)
VM67:6 God Fathers Pizza is the best when you add 4 toppings.

// 8. Construct an if statement that prints "Quality, not quantity."
//    if you offer less than 10 toppings, or "A whole lot of pizza."
//    if you offer 10 or more toppings.

let toppings = 10;

if (toppings < 10) {
  console.log("Quality, not quantity.")
} else {
  console.log("A whole lot of toppings")
}

// Bonus Challenge
for (let i = 1; i <= 10; i++)
  if (i%2 !=1) {
  console.log(i)
  };
