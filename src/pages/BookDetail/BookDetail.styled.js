import styled from 'styled-components';

export const Title = styled.h2`
  color: var(--gray-400);
  font-size: 22px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h3`
  color: var(--gray-400);
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  color: var(--gray-300);
  background: var(--white);
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 176%;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const BookImg = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1240px) {
    width: 300px;
    height: 500px;
    float: left;
  }
`;

export const ContainerBookDetaile = styled.div`
  @media screen and (min-width: 1240px) {
    display: flex;
    justify-content: center;
  }
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
  margin: 0 auto;
  @media screen and (max-width: 375px) {
    width: 300px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1240px) {
    width: 1140px;
  }
`;

export const MoreBooksByAuthorList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  max-width: 300px;
  overflow: hidden;
  background: var(--white);
  border-radius: 6px;
  padding: 5px;
  position: relative;
  border: 2px solid #743e3e;

  @media screen and (min-width: 768px) {
    height: 600px;
    width: 350px;
  }

  @media screen and (min-width: 1240px) {
    height: 300px;
    width: 200px;
  }
`;

export const TitleBook = styled.h6`
  color: var(--gray-50);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.24px;
  background: var(--gray-400);
  border-radius: 20px;
  padding: 8px;
  width: 269px;
  @media screen and (min-width: 425px) {
    font-size: 18px;

    width: 283px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 282px;
  }

  @media screen and (min-width: 1240px) {
    width: 182px;
    bottom: 5px;
  }
`;

export const BookImgByAuthor = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
