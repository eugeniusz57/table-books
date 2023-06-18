import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 4px 8px;
  max-width: 375px;
  @media screen and (min-width: 768px) {
    padding: 12px 36px;
    max-width: 768px;
  }

  @media screen and (min-width: 1240px) {
    padding: 20px 50px;
    max-width: 1240px;
  }
`;
