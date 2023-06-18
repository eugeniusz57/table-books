import { getBooks } from 'APIService/getBooks';
import { Section } from '../../components/Section/Section.styled';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import TableBooks from 'components/Table/Table';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRowClick = (id, authorName) => {
    navigate(`/${id}/${authorName}`);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Section>
      {error ? (
        <AlertMessage>
          Oops, something went wrong. Please try again later...
        </AlertMessage>
      ) : (
        <TableBooks
          books={books}
          onClick={handleRowClick}
          isLoading={isLoading}
        />
      )}
    </Section>
  );
};

export default Home;
