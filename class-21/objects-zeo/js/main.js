//Create a stopwatch object that has four properties and three methods
const stopwatch = {
  currentTime: 12,
  timeOfDay: "PM",
  color: "black",
  brand: "Nike",
  start: function () {
    console.log("STARTING...");
  },
  stop: function () {
    console.log("STOPPPP!");
  },
  tellTime: function () {
    console.log(`The current time is ${this.currentTime} ${this.timeOfDay}.`);
  },
};
