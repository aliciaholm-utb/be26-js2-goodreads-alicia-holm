const baseURL =
  "https://goodreads-be26-default-rtdb.europe-west1.firebasedatabase.app/books.json";

export async function getAllBooks() {
  try {
    const response = await fetch(baseURL);
    if (!response.ok) {
      throw new Error("Something went wrong fetching the books");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addBook(newBook) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(baseURL, options);
    if (!response.ok) {
      throw new Error("Something went wrong with adding the book!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
