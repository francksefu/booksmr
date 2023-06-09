import {
  Routes, Route, Link,
} from 'react-router-dom';
import BooksRender from './components/BooksRender';
import Categories from './components/Categories';

function App() {
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
