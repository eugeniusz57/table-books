import { ButtonUp } from './Button.styled';

export const ButtonScrollUp = ({
  type = 'button',
  onClick,
  children,
  isButtonUp,
}) => {
  return (
    <ButtonUp type={type} onClick={onClick} isButtonUp={isButtonUp}>
      {children}
    </ButtonUp>
  );
};
