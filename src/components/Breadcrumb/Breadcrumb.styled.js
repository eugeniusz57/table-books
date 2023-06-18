import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BreadCrumbContainer = styled.div`
  color: red;
`;

export const LinkBreadCrumb = styled(Link)`
  font-size: 18px;
  color: var(--gray-400);
  padding: 4px;
  margin-right: 10px;
  transition: all, 0.5s, easy;

  &:hover,
  &:focus {
    color: var(--main-color-hover);
    padding: 4px;
  }
  &:not(:last-child)::after {
    content: '>';
    margin-left: 14px;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
