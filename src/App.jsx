import { Route, Routes } from 'react-router-dom';

import BookDetail from 'pages/BookDetail/BookDetail';
import Home from 'pages/Home/Home.jsx';
import Layout from './components/Layout/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":bookId/:authorName" element={<BookDetail />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    </>
  );
};
