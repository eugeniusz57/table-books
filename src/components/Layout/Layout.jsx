import { Suspense, useEffect, useState } from 'react';
import { Nav, Span } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';
import { ButtonScrollUp } from 'components/Button/Button';

const Layout = () => {
  const [isButtonUp, setIsButtonUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsButtonUp(true);
        return;
      }
      setIsButtonUp(false);
    });
  }, []);

  const handleOnScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <header>
        <Nav>
          <Span>Books</Span>
        </Nav>
      </header>
      <Container>
        <Breadcrumb />
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
      <ButtonScrollUp isButtonUp={isButtonUp} onClick={handleOnScrollUp}>
        ^
      </ButtonScrollUp>
    </>
  );
};

export default Layout;
