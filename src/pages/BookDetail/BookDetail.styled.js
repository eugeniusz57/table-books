import styled from 'styled-components';

export const Title = styled.h2`
  color: var(--main-color);
  font-size: 32px;
`;

export const SubTitle = styled.h3`
  color: var(--main-color);
`;

export const Description = styled.p`
  color: var(--gray-300);
  background: var(--white);
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 176%;
  /* or 28px */
  letter-spacing: 0.04em;
`;

export const BookImg = styled.img`
  display: block;
  width: 300px;
  height: 500px;
  object-fit: contain;
  margin-right: 10px;
`;

export const ContainerBookDetaile = styled.div`
  display: flex;
  justify-content: center;
`;

export const BookInformation = styled.div`
  display: block;
`;

export const ContainerMoreBooksByAuthor = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  padding: 5px;
  gap: 5px;
`;

export const MoreBooksByAuthorList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 200px;
  overflow: hidden;
  background: var(--white);
  border-radius: 6px;
  padding: 5px;
  position: relative;
  border: 1px solid red;
`;

export const TitleBook = styled.h6`
  color: var(--gray-50);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;

  background: var(--gray-400);
  border-radius: 20px;
  padding: 16px;
  width: 190px;
`;

export const BookImgByAuthor = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
