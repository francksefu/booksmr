import BooksForm from './BooksForm';
import BooksList from './BooksList';
import phot from '../phot.png';

const BooksRender = () => (
  <div className="bookstore-cms">
    <div className="panel-bg">
      <div className="panel">
        <div className="left">
          <h2>Bookstore CMS</h2>
          <h3 className="first">BOOKS</h3>
          <h3 className="seconde">CATEGORIES</h3>
        </div>
        <img src={phot} alt="contact" className="oval" />
      </div>
      <BooksList />
      <span className="line-long"> </span>
      <h2 className="add">ADD BOOKS</h2>
      <BooksForm />
    </div>
  </div>
);
export default BooksRender;
