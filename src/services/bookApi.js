import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchBookOfTheMonth = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?q=book-of-the-month`);
    return response.data.items[0];
  } catch (error) {
    console.error(error);
  }
};
