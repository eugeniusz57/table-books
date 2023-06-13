import { getBooks } from 'APIService/getBooks';
import { Section } from '../../components/Section/Section.styled';
import { useEffect, useState } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {}
    };
    fetchBooks();
  }, []);
  console.log(books.map(book => book.volumeInfo.title));
  return (
    <Section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Title</th>
            <th>Page Count</th>
            <th>Additional Data</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.volumeInfo.authors[0]}</td>
              <td>{book.volumeInfo.title}</td>
              <td>{book.volumeInfo.pageCount}</td>
              <td>{book.volumeInfo.publishedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
};

export default Home;
