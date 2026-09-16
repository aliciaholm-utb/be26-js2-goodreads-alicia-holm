export class Book {
  #id;
  #title;
  #author;
  #isRead;
  #score;

  constructor(id, title, author, isRead, score) {
    this.#id = id;
    this.#title = title;
    this.#author = author;
    this.#isRead = isRead;
    this.#score = score;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }
  get author() {
    return this.#author;
  }
  get isRead() {
    return this.#isRead;
  }
  get score() {
    return this.#score;
  }
  async updateIsRead() {
    try {
      const URL = `https://goodreads-be26-default-rtdb.europe-west1.firebasedatabase.app/books/${this.id}.json`;
      const updatedIsRead = {
        isRead: !this.isRead,
      };
      if (updatedIsRead.isRead === false) {
        updatedIsRead.score = null;
      }

      const options = {
        method: "PATCH",
        body: JSON.stringify(updatedIsRead),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(URL, options);
      if (!response.ok) {
        throw new Error("Something went wrong with updating isRead");
      }
      this.#isRead = updatedIsRead.isRead;
      if (updatedIsRead.isRead === false) {
        this.#score = undefined;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateScore(newScore) {
    if (!this.#isRead) {
      throw new Error("You can only rate books that you have read");
    }
    if (typeof newScore !== "number" || newScore < 1 || newScore > 5) {
      throw new Error("You can only set a rating between 1-5");
    }
    try {
      const URL = `https://goodreads-be26-default-rtdb.europe-west1.firebasedatabase.app/books/${this.id}.json`;
      const updatedScore = {
        score: newScore,
      };
      const options = {
        method: "PATCH",
        body: JSON.stringify(updatedScore),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(URL, options);
      if (!response.ok) {
        throw new Error("Something went wrong with setting the score");
      }
      this.#score = updatedScore.score;
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteBook() {
    try {
      const URL = `https://goodreads-be26-default-rtdb.europe-west1.firebasedatabase.app/books/${this.id}.json`;

      const options = {
        method: "DELETE",
      };
      const response = await fetch(URL, options);
      if (!response.ok) {
        throw new Error("Something went wrong deleting the book");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
