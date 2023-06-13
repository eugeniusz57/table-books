import axios from 'axios';
// const KEY = 'AIzaSyDa9pA6aHUzQXqtlA93XzBtf82pJ502jm';

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
    console.error(error);
  }
};

export const getBookById = async bookId => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
