const tbrList = document.querySelector("#tbrList");
const myBooksList = document.querySelector("#myBooksList");

export function createBookCard(newBook) {
  const liItem = document.createElement("li");
  const titleText = document.createElement("h3");
  titleText.textContent = newBook.title;
  const authorText = document.createElement("p");
  authorText.textContent = newBook.author;

  liItem.append(titleText, authorText);

  if (newBook.isRead) {
    myBooksList.appendChild(liItem);
  } else {
    tbrList.appendChild(liItem);
  }
}
