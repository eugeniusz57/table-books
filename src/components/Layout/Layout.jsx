import { Suspense } from 'react';
import { Nav, Span } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';

const Layout = () => {
  return (
    <>
      <Container>
        <header>
          <Nav>
            <Span>Books</Span>
          </Nav>
        </header>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
