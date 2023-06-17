import { Loader } from 'components/Loader/Loader';
import {
  Table,
  TableBody,
  TableBodyTd,
  TableBodyTr,
  TableHeader,
  TableHeaderTh,
  TableHeaderTr,
} from './Table.styled';
import { AlertMessage } from 'components/AlertMessage/AlertMessage';

const TableBooks = ({ books, onClick, isLoading, error }) => {
  return (
    <>
      {error ? (
        <AlertMessage>
          Oops, something went wrong. Please try again later...
        </AlertMessage>
      ) : (
        <>
          {books.length === 0 && isLoading ? (
            <Loader />
          ) : (
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
                  <TableBodyTr
                    key={book.id}
                    onClick={() => onClick(book.id, book.volumeInfo.authors[0])}
                  >
                    <TableBodyTd data-title="ID">{book.id}</TableBodyTd>
                    <TableBodyTd data-title="Author">
                      {book.volumeInfo.authors[0]}
                    </TableBodyTd>
                    <TableBodyTd data-title="Title">
                      {book.volumeInfo.title}
                    </TableBodyTd>
                    <TableBodyTd data-title="Page Count">
                      {book.volumeInfo.pageCount
                        ? book.volumeInfo.pageCount
                        : 'Not found'}
                    </TableBodyTd>
                    <TableBodyTd data-title="Additional Data">
                      {book.volumeInfo.publishedDate}
                    </TableBodyTd>
                  </TableBodyTr>
                ))}
              </TableBody>
            </Table>
          )}
        </>
      )}
    </>
  );
};

export default TableBooks;
