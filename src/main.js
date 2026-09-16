import "bootstrap/dist/css/bootstrap.min.css";
import { getAllBooks, addBook } from "./FirebaseRequests.js";
import { Book } from "./Book.js";
import { createBookCard } from "./Render.js";

const form = document.querySelector("form");
const titelInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const readBox = document.querySelector("#readBox");

async function startApp() {
  const data = await getAllBooks();
  console.log(data);

  for (const key in data) {
    const bookData = data[key];

    const book = new Book(
      key,
      bookData.title,
      bookData.author,
      bookData.isRead,
      bookData.score,
    );
    createBookCard(book);
  }
}
startApp();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = titelInput.value;
  const author = authorInput.value;
  const isRead = readBox.checked;

  const newBook = {
    title: title,
    author: author,
    isRead: isRead,
  };

  const data = await addBook(newBook);

  const book = new Book(data.name, title, author, isRead, undefined);

  createBookCard(book);
});
