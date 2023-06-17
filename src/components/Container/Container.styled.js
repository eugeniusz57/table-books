import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 4px 8px;
  max-width: 375px;
  @media screen and (min-width: 768px) {
    padding: 12px 72px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px 100px;
    max-width: 1440px;
  }
`;
