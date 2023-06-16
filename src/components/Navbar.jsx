import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <h1>Awesome books</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Add of books | </Link>
          </li>
          <li>
            <Link to="/categories"> Categories  </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
