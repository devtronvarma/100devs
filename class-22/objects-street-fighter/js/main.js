//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, side, gender, color) {
  this.name = name;
  this.side = side;
  this.gender = gender;
  this.color = color;
  this.taunt = (message) => console.log(`${message}`);
  this.die = () => console.log("You killed me.");
  this.punch = () => console.log("Throw punch!");
}

let ryu = new StreetFighter("Ryu", "good", "male", "white");
ryu.taunt("Haydukken!");
