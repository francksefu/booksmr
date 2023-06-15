import {
  Routes, Route, Link,
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
      <h1>Awesome books</h1>
      <nav>
        <ul className="ligne">
          <li>
            <Link to="/">books |</Link>
          </li>
          <li>
            <Link to="/categories">Categories </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<BooksRender />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </>

  );
}
export default App;
