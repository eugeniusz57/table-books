import axios from 'axios';

export const getBooks = async () => {
  try {
    const res = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: 'subject:fiction',
        orderBy: 'relevance',
        maxResults: 30,
      },
    });

    return res.data.items;
  } catch (error) {
    throw error.message;
  }
};

export const getBookById = async bookId => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`
    );

    return res.data.volumeInfo;
  } catch (error) {
    throw error.message;
  }
};

export const searchBooksCurrentAuthor = async authorName => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(
        authorName
      )}`
    );

    return res.data.items;
  } catch (error) {
    throw error.message;
  }
};
