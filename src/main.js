import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { getAllBooks, addBook } from "./FirebaseRequests.js";
import { Book } from "./Book.js";
import { createBookCard } from "./Render.js";

const form = document.querySelector("form");
const titelInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const readBox = document.querySelector("#readBox");

async function startApp() {
  
try{
const data = await getAllBooks();

if(data === null){
  return;
}

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
  catch(error){
    console.log(error);
  }
}
startApp();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = titelInput.value.trim();
  const author = authorInput.value.trim();
  const isRead = readBox.checked;

  if(title === "" || author === ""){
    return;
  }

  const newBook = {
    title: title,
    author: author,
    isRead: isRead,
  };
  try{
  const data = await addBook(newBook);
form.reset();
  const book = new Book(data.name, title, author, isRead, undefined);

  createBookCard(book);
  } catch(error){
    console.log(error);
  }


});
