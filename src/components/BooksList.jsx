import { useSelector } from 'react-redux';
import Books from './Books';

const BooksList = () => {
  const { bookers } = useSelector((store) => store.booker);
  return (
    <ul>
      {bookers?.map((book) => (
        <Books
          key={book.item_id}
          books={book}
        />
      ))}
    </ul>
  );
};

export default BooksList;
