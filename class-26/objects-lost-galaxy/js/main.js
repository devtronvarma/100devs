//Create a dog object that has four properties and three methods
const pizza = {}

pizza.toppings = ['spinach', 'onions', 'banana peppers']
pizza.sauce = 'hearty marinara'
pizza.crust = 'hand-tossed'
pizza.size = 'large'

pizza.bake = function (temp) {
    console.log(`Baking the pizza at ${temp} degrees.`)
};

pizza.eat = () => console.log(`That was yummy!`);

pizza.burnMouth = () => console.log('AKJHDSLSKJHALJ!');
