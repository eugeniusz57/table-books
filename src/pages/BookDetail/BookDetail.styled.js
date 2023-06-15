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
  line-height: 1.5;
  background: var(--white);
  /* border: 1px solid red; */
  border-radius: 6px;
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
