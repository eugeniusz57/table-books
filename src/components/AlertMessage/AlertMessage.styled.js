import styled from 'styled-components';

export const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const Message = styled.p`
  display: inline-block;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: var(--gray-500);

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
    line-height: 44px;
  }
`;
