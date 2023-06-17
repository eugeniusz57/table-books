import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundImg = styled.img`
  width: 100%;
`;

export const LinkGoHome = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray-500);
  letter-spacing: 1px;
  line-height: 1.4;
  text-decoration: none;
  padding: 4px;
  width: 150px;
  transition: all 0.5s ease;
  :focus,
  :hover {
    color: var(--gray-50);
    background-color: var(--gray-200);
    border-radius: 4px;
  }
`;
