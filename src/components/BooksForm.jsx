import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { adding } from '../redux/books/booksSlice';

const BooksForm = () => {
  const dispatch = useDispatch();
  let title = '';
  let author = '';
  let message = '';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(adding({
        id: uuidv4, title, author, completed: false, type: 'action',
      }));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    } else {
      message = 'nothing';
    }
  };

  const handleChange1 = (e) => {
    title = (e.target.value);
  };

  const handleChange2 = (e) => {
    author = (e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add books title"
        className="I-Lesson-Panel"
        onChange={handleChange1}
        id="title"
      />

      <input
        type="text"
        placeholder="Add books author"
        className="I-Lesson-Panel"
        onChange={handleChange2}
        id="author"
      />
      <small>{message}</small>
      <button type="button" className="Rectangle-2" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default BooksForm;
