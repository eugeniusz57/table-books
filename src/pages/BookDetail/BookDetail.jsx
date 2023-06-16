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

function stripHtmlTags(htmlString) {
  const purifiedText = DOMPurify.sanitize(htmlString, { ALLOWED_TAGS: [] });
  return purifiedText;
}

const BookDetail = () => {
  const { bookId, authorName } = useParams();
  const [book, setBook] = useState();
  const [authorBooks, setAuthorBooks] = useState();
  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const data = await getBookById(bookId);
        setBook(data);
        const authorsDate = await searchBooksCurrentAuthor(authorName);

        setAuthorBooks(authorsDate);
      } catch (error) {}
    };
    fetchBookById();
  }, [bookId, authorName]);
  const htmlString = book?.description;
  const text = stripHtmlTags(htmlString);

  console.log(authorBooks);

  return (
    <>
      <Section>
        <Title>Title: {book?.title}</Title>
        <ContainerBookDetaile>
          <BookImg src={book?.imageLinks?.large} alt="foto" />
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
          {authorBooks &&
            authorBooks.map(book => (
              <MoreBooksByAuthorList key={book.id}>
                <BookImgByAuthor
                  src={book?.volumeInfo?.imageLinks?.smallThumbnail}
                  alt={'foto'}
                />
                <TitleBook> {book?.volumeInfo?.title}</TitleBook>
              </MoreBooksByAuthorList>
            ))}
        </ContainerMoreBooksByAuthor>
      </Section>
    </>
  );
};

export default BookDetail;
