import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getbook, sendbook } from '../redux/books/booksSlice';

const BooksForm = () => {
  const dispatch = useDispatch();
  let title = '';
  const author = 'franck';
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
    }
  };

  const handleChange1 = (e) => {
    title = (e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add books title"
        className="I-Lesson-Panel"
        onChange={handleChange1}
        id="title"
      />

      <select className="select">
        <option selected>Category</option>
      </select>
      <button className="send" type="submit"><span className="inner">ADD BOOK</span></button>
    </form>
  );
};

export default BooksForm;
