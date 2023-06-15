import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background: var(--gray-200);
`;

export const TableHeader = styled.thead`
  background: var(--gray-500);
`;

export const TableHeaderTr = styled.tr``;

export const TableHeaderTh = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid var(--gray-50);
`;

export const TableBody = styled.tbody``;

export const TableBodyTr = styled.tr`
  border: 1px solid var(--gray-50);
  transition: all, 0.5s, easy;
  &:hover {
    background-color: var(--gray-300);
    cursor: pointer;
  }
`;
export const TableBodyTd = styled.td`
  padding: 8px;
  text-align: left;
  border: 1px solid var(--gray-50);
`;

export const LinkRow = styled(Link)`
  display: contents;
  color: var(--gray-50);
  text-decoration: none;
`;
