//Create a constructor with 4 properties and 3 methods
const Pizza = (toppings, crust, size, sauce) => {
    this.toppings = toppings;
    this.crust = crust;
    this.size = size;
    this.sauce = sauce;
    this.burnMouth = () => console.log('Ouch!');
    this.deliverPizza = () => console.log('Delivering your pizza!');
    this.bakePizza = (temp) => console.log(`Baking your pizza at ${temp} degrees.`)
}
