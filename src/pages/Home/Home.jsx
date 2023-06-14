import { getBooks } from 'APIService/getBooks';
import { Section } from '../../components/Section/Section.styled';
import { useEffect, useState } from 'react';
import {
  LinkRow,
  Table,
  TableBody,
  TableBodyTd,
  TableBodyTr,
  TableHeader,
  TableHeaderTh,
  TableHeaderTr,
} from './Home.styled';
// import { useParams } from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);
  // const { authorName } = useParams();
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {}
    };
    fetchBooks();
  }, []);

  return (
    <Section>
      <Table>
        <TableHeader>
          <TableHeaderTr>
            <TableHeaderTh>ID</TableHeaderTh>
            <TableHeaderTh>Author</TableHeaderTh>
            <TableHeaderTh>Title</TableHeaderTh>
            <TableHeaderTh>Page Count</TableHeaderTh>
            <TableHeaderTh>Additional Data</TableHeaderTh>
          </TableHeaderTr>
        </TableHeader>
        <TableBody>
          {books.map(book => (
            <LinkRow key={book.id} to={book.id}>
              <TableBodyTr>
                <TableBodyTd>{book.id}</TableBodyTd>
                <TableBodyTd>{book.volumeInfo.authors[0]}</TableBodyTd>
                <TableBodyTd>{book.volumeInfo.title}</TableBodyTd>
                <TableBodyTd>
                  {book.volumeInfo.pageCount
                    ? book.volumeInfo.pageCount
                    : 'Not found'}
                </TableBodyTd>
                <TableBodyTd>{book.volumeInfo.publishedDate}</TableBodyTd>
              </TableBodyTr>
            </LinkRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
};

export default Home;
