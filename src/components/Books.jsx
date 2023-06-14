import '../styles/app.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removes } from '../redux/books/booksSlice';

const Books = ({ books }) => {
  const dispatch = useDispatch();
  return (
    <li className="Lesson-Panel">
      <div>
        <div>
          <h4 className="School-of">{books.type}</h4>
          <h2 className="Title">{books.title}</h2>
          <small className="Suzanne-Collins">{books.author}</small>
        </div>
        <div>
          <button type="button" className="Comments">Comments</button>
          {' '}
          |
          <button type="button" onClick={() => dispatch(removes(books.id))} className="Remove">Remove</button>
          {' '}
          |
          <button type="button" className="Edit">Edit</button>
        </div>
      </div>
    </li>
  );
};

Books.propTypes = {
  books: PropTypes.instanceOf({}).isRequired,
};

export default Books;
