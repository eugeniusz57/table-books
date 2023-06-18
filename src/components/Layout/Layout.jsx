// import { Suspense } from 'react';
import { Nav, Span } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Container } from '../Container/Container';
// import Breadcrumb from 'components/Breadcrumb/Breadcrumb';

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <Span>Books</Span>
        </Nav>
      </header>
      <Container>
        {/* <Breadcrumb /> */}
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Layout;
