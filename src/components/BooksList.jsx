import { PropTypes } from 'prop-types';
import Books from './Books';

const BooksList = ({ booksProp }) => (
  <ul>
    {booksProp?.map((book) => (
      <Books
        key={book.id}
        books={book}
      />
    ))}
  </ul>
);

BooksList.propTypes = {
  booksProp: PropTypes.instanceOf({}).isRequired,
};

export default BooksList;
