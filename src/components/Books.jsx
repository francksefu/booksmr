import '../styles/app.css';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook, getbook } from '../redux/books/booksSlice';
import roulo from '../roulo.png';

const Books = ({ books }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getbook);
  }, [dispatch]);
  return (
    <li className="Lesson-Panel">
      <div className="classons">
        <div className="enc-1">
          <div>
            <h4 className="School-of">{books.category}</h4>
            <h2 className="Title">{books.title}</h2>
            <small className="auteur">{books.author}</small>
          </div>
          <div>
            <span type="button" className="Comments">Comments</span>
            <span className="Line-2">{}</span>
            <span>
              <button
                type="button"
                onClick={async () => {
                  await dispatch(deleteBook(books.itemId));
                  await dispatch(getbook());
                }}
                className="Remove"
              >
                Remove
              </button>
            </span>
            <span className="Line-22">{}</span>
            <span type="button" className="Edit">Edit</span>
          </div>
        </div>
        <div className="enc-2">
          <img src={roulo} alt="contact" className="Oval-2" />
          <div className="chiffre">
            <span className="Percent-Complete"> 64% </span>
            <span className="Completed"> completed </span>
          </div>
        </div>
        <div className="Line-211">{}</div>
        <div className="enc-3">
          <span className="Current-Chapter">CURRENT CHAPTER</span>
          <br />
          <span className="Current-Lesson">Chapter 17</span>
          <br />
          <div className="Rectangle-2"><span className="Update-progress">UPDATE PROGRESS</span></div>
        </div>
      </div>
    </li>
  );
};

Books.propTypes = {
  books: PropTypes.instanceOf({}).isRequired,
};

export default Books;
