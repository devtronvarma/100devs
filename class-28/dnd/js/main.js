//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      document.querySelector("h3").innerText = data.classes[0].name;
      data.subclasses.map((i) => {
        const subclassList = document.querySelector("ul");
        const subclass = document.createElement("li");
        subclass.innerText = i.name;
        subclassList.appendChild(subclass);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
