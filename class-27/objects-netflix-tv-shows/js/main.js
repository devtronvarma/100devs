//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
  constructor(genre, duration, episodes, title) {
    this.genre = genre;
    this.duration = duration;
    this.episodes = episodes;
    this.title = title;
  }
  play() {
    console.log(`Playing ${this.title}`);
  }
  stop() {
    console.log("Stopping . . .");
  }
  saveToList() {
    console.log("Saved to List");
  }
}
