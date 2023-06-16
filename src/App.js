import {
  Routes, Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getbook } from './redux/books/booksSlice';
import BooksRender from './components/BooksRender';
import Categories from './components/Categories';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getbook());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<BooksRender />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </>

  );
}
export default App;
