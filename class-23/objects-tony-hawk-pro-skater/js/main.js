//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Skater(name, style, gender, favSong) {
  this.name = name;
  this.style = style;
  this.gender = gender;
  this.favSong = favSong;

  this.doTrick = (trick) => {
    console.log(`I'm doing a ${trick}`);
  };

  this.fallDown = () => {
    console.log(`Ouch. that hurt.`);
  };

  this.playFavSong = () => {
    console.log(`Oooh, ${this.favSong} is my jam.`);
  };
}

let kareemCampbell = new Skater(
  "Kareem",
  "goofy",
  "male",
  "Dylan Dylan Dylan Dylan Dylan"
);
