import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getbook, sendbook } from '../redux/books/booksSlice';

const BooksForm = () => {
  const dispatch = useDispatch();
  let title = '';
  const author = 'franck';
  let message = '';
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      let obj = {
        item_id: uuidv4(), title, author, completed: false, category: 'action',
      };
      await dispatch(sendbook(obj));
      document.getElementById('title').value = '';
      obj = {};
      await dispatch(getbook());
    } else {
      message = 'nothing';
    }
  };

  const handleChange1 = (e) => {
    title = (e.target.value);
  };

  return (
    <form>
      <h3 className="Title-addbook">ADD NEW BOOK</h3>
      <input
        type="text"
        placeholder="Book Title"
        className="Lesson-Panel-Book"
        onChange={handleChange1}
        id="title"
      />
      <select className="Lesson-Panel-select">
        <option value="Categories">Categories</option>
      </select>

      <small>{message}</small>
      <button type="button" className="Rectangle-2-sub" onClick={handleSubmit}><span className="Add-B">ADD BOOK</span></button>
    </form>
  );
};

export default BooksForm;
