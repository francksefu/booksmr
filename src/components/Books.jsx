import '../styles/app.css';
import { PropTypes } from 'prop-types';

const Books = ({ books }) => (
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
        <button type="button" className="Remove">Remove</button>
        {' '}
        |
        <button type="button" className="Edit">Edit</button>
      </div>
    </div>
  </li>
);

Books.propTypes = {
  books: PropTypes.instanceOf({}).isRequired,
};

export default Books;
