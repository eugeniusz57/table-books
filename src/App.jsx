import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './components/Layout/Layout';
import NotFound from './pages/NotFound/NotFound';

const Home = lazy(() => import('./pages/Home/Home'));
const BookDetail = lazy(() => import('./pages/BookDetail/BookDetail'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":bookId/:authorName" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
