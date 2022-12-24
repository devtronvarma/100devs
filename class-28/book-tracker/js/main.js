// fetch books on click of button
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  const url = `https://openlibrary.org/isbn/${choice}.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const title = data.title;

      // add book choice title to localStorage
      if (!localStorage.getItem("books")) {
        localStorage.setItem("books", title);
      } else {
        let books = localStorage.getItem("books") + " ; " + title;
        localStorage.setItem("books", books);
      }

      // add book titles to list in DOM
      let booksArray = localStorage.getItem("books").split(" ; ");

      // loop through each book element in books localStorage
      booksArray.forEach((book) => {
        let li = document.createElement("li");
        let ul = document.querySelector("ul");
        li.innerText = book;
        ul.appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
