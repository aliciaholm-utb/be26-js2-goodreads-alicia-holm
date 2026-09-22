const tbrList = document.querySelector("#tbrList");
const myBooksList = document.querySelector("#myBooksList");

export function createBookCard(newBook) {
  const liItem = document.createElement("li");
  liItem.classList.add("bookCard");
  const titleText = document.createElement("h3");
  titleText.classList.add("bookTitle");
  titleText.textContent = newBook.title;
  const authorText = document.createElement("p");
  authorText.classList.add("bookAuthor");
  authorText.textContent = newBook.author;
  const readButton = document.createElement("button");
  readButton.classList.add("readButton");
  const ratingContainer = document.createElement("div");
  const bookControls = document.createElement("div");
  bookControls.classList.add("bookControls");

  const starArray = [];
  function updateRatingdisplay() {
    starArray.forEach((ratingStarsButtons, index) => {
      if (index + 1 <= newBook.score) {
        ratingStarsButtons.textContent = "★";
      } else {
        ratingStarsButtons.textContent = "☆";
      }
    });
  }

  for (let i = 1; i <= 5; i++) {
    const ratingStarsButtons = document.createElement("button");
    ratingStarsButtons.classList.add("ratingStar");

    starArray.push(ratingStarsButtons);

    ratingContainer.appendChild(ratingStarsButtons);

    ratingStarsButtons.addEventListener("click", async () => {
      try {
        await newBook.updateScore(i);
        updateRatingdisplay();
      } catch (error) {
        console.log(error);
      }
    });
  }
  updateRatingdisplay();

  function isReadDisplay() {
    if (newBook.isRead) {
      readButton.textContent = "Markera som oläst";
      ratingContainer.style.display = "flex";
    } else {
      readButton.textContent = "Markera som läst";
      ratingContainer.style.display = "none";
    }
    if (newBook.isRead) {
      myBooksList.appendChild(liItem);
    } else {
      tbrList.appendChild(liItem);
    }
  }

  isReadDisplay();

  readButton.addEventListener("click", async () => {
    try {
      await newBook.updateIsRead();
      isReadDisplay();
      updateRatingdisplay();
    } catch (error) {
      console.log(error);
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.textContent = "Ta Bort";

  deleteButton.addEventListener("click", async () => {
    try {
      await newBook.deleteBook();
      liItem.remove();
    } catch (error) {
      console.log(error);
    }
  });

  bookControls.append(ratingContainer, readButton, deleteButton);
  liItem.append(titleText, authorText, bookControls);
}
