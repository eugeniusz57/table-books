import styled from 'styled-components';
export const ButtonUp = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${p => (p.isButtonUp ? 1 : 0)};
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  background: transparent;
  border: 2px solid var(--gray-500);
  border-radius: 50%;
  font-size: 30px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${p => (p.isButtonUp ? 'auto' : 'none')};
  padding: 4px;

  &:hover {
    scale: 1.1;
    color: var(--gray-50);
    border: 2px solid transparent;
    background: var(--gray-500);
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    bottom: 70px;
    right: 70px;
    height: 70px;
    width: 70px;
    font-size: 50px;
  }
`;
