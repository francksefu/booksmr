import '../styles/app.css';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook, getbook } from '../redux/books/booksSlice';
import phot from '../phot2.png';

const Books = ({ books }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getbook);
  }, [dispatch]);
  return (
    <div className="lesson">
      <div className="encad-one">
        <span className="action">Action</span>
        <span className="title">
          { books.title }
        </span>
        <span className="author">
          { books.author }
        </span>
        <span className="but">Comments</span>
        <span className="line"> </span>
        <buton
          type="button"
          className="but"
          onClick={async () => {
            await dispatch(deleteBook(books.itemId));
            await dispatch(getbook());
          }}
        >
          Remove
        </buton>
        <span className="line"> </span>
        <span className="but">Edit</span>
      </div>
      <div className="encad-2">
        <img src={phot} alt="contact" className="oval-2" />
        <div className="chiffre">
          <span className="percent"> 64% </span>
          <span className="complete"> completed </span>
        </div>
      </div>
      <div className="line-big"> </div>
      <div className="encad-3">
        <span className="current"> CURRENT CHAPTER</span>
        <span className="current-lesson"> Chap3:&quot;A lesson Learned&quot;</span>
        <div className="rectangle">
          <span className="update">UPDATE PROGRESS</span>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.instanceOf({}).isRequired,
};

export default Books;
