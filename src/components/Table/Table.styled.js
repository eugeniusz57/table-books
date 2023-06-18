import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background: var(--gray-200);
`;

export const TableHeader = styled.thead`
  background: var(--gray-500);
  position: sticky;
  top: 0;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const TableHeaderTr = styled.tr``;

export const TableHeaderTh = styled.th`
  padding: 8px;
  text-align: left;
  border: 1px solid var(--gray-50);
  @media (max-width: 767px) {
    padding: 8px;
  }
`;

export const TableBody = styled.tbody``;

export const TableBodyTr = styled.tr`
  @media (max-width: 767px) {
    display: block;
    border: 2px solid var(--gray-500);
  }
  border: 1px solid var(--gray-50);
  transition: all, 0.5s, easy;
  &:hover {
    background-color: var(--gray-300);
    cursor: pointer;
  }
`;
export const TableBodyTd = styled.td`
  padding: 8px;
  text-align: center;
  border: 1px solid var(--gray-50);
  @media (max-width: 767px) {
    padding: 8px;
    text-align: right;
    display: block;
    border: 0.5px solid var(--gray-50);

    &::before {
      content: attr(data-title) ':';
      float: left;
    }
  }
`;

export const Caption = styled.caption`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding: 10px;
  color: var(--gray-400);
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;
