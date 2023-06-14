import { useParams } from 'react-router-dom';
import { getBookById } from 'APIService/getBooks';
import { useEffect, useState } from 'react';
import React from 'react';
import { Section } from 'components/Section/Section.styled';

const BookDetail = () => {
  const { authorName } = useParams();
  const [book, setBook] = useState();
  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const data = await getBookById(authorName);
        setBook(data);
        console.log('Fetch id');
      } catch (error) {}
    };
    fetchBookById();
  }, [authorName]);

  console.log('id', authorName);
  console.log('Book=', book?.description);
  const htmlString = book?.description;

  return (
    <Section>
      <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
    </Section>
  );
};

export default BookDetail;
