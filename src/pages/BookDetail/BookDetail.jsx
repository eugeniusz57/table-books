import { useParams } from 'react-router-dom';
import { getBookById, searchBooksCurrentAuthor } from 'APIService/getBooks';
import { useEffect, useState } from 'react';
import React from 'react';
import DOMPurify from 'dompurify';
import { Section } from 'components/Section/Section.styled';
import {
  BookImg,
  BookImgByAuthor,
  BookInformation,
  ContainerBookDetaile,
  ContainerMoreBooksByAuthor,
  Description,
  MoreBooksByAuthorList,
  SubTitle,
  Title,
  TitleBook,
} from './BookDetail.styled';
import Not_Pictured from '../../images/not-pictured.png';

import { AlertMessage } from 'components/AlertMessage/AlertMessage';
import { Loader } from 'components/Loader/Loader';
import { shortTitle } from 'helpers/ShortTitle';

function stripHtmlTags(htmlString) {
  const purifiedText = DOMPurify.sanitize(htmlString, { ALLOWED_TAGS: [] });
  return purifiedText;
}

const BookDetail = () => {
  const { bookId, authorName } = useParams();
  const [book, setBook] = useState({});
  const [authorBooks, setAuthorBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchBookById = async () => {
      setIsLoading(true);
      try {
        const data = await getBookById(bookId);
        setBook(data);
        const authorsDate = await searchBooksCurrentAuthor(authorName);

        setAuthorBooks(authorsDate);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookById();
  }, [bookId, authorName]);
  const htmlString = book?.description;
  const text = stripHtmlTags(htmlString);

  return (
    <>
      {error ? (
        <AlertMessage>
          Oops, something went wrong. Please try again later...
        </AlertMessage>
      ) : (
        <>
          {authorBooks.length > 0 && !isLoading && book ? (
            <>
              <Section>
                <Title>Title: {book?.title}</Title>
                <ContainerBookDetaile>
                  <BookImg
                    src={
                      book?.imageLinks?.large
                        ? book?.imageLinks?.large
                        : Not_Pictured
                    }
                    alt="Big book foto"
                  />
                  <BookInformation>
                    <SubTitle>Author:</SubTitle>
                    <Description>{book?.authors}</Description>
                    <SubTitle>Categories:</SubTitle>
                    <Description>{book?.categories.join(', ')}</Description>
                    <SubTitle>Description:</SubTitle>
                    <Description>{text.trim()}</Description>
                  </BookInformation>
                </ContainerBookDetaile>
              </Section>
              <Section>
                <Title>More Books by the Same Author:</Title>

                <ContainerMoreBooksByAuthor>
                  {authorBooks.map(book => (
                    <MoreBooksByAuthorList key={book.id}>
                      <BookImgByAuthor
                        src={
                          book?.volumeInfo?.imageLinks?.smallThumbnail
                            ? book?.volumeInfo?.imageLinks?.smallThumbnail
                            : Not_Pictured
                        }
                        alt={'book foto'}
                      />
                      <TitleBook>
                        {shortTitle(book?.volumeInfo?.title)}
                      </TitleBook>
                    </MoreBooksByAuthorList>
                  ))}
                </ContainerMoreBooksByAuthor>
              </Section>
            </>
          ) : (
            <Loader />
          )}
        </>
      )}
    </>
  );
};

export default BookDetail;
