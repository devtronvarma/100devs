//Create a mouse object that has four properties and three methods

// Using object literal
let mouse = {};

mouse.brand = "Logitech";
mouse.color = "black";
mouse.model = "MX Ergo";
mouse.wireless = true;

mouse.leftClick = () => console.log("You clicked the left button.");
mouse.rightClick = () => console.log("You clicked the right button.");
mouse.scroll = (direction) => console.log(`You scrolled ${direction}.`);
