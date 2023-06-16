import BooksForm from './BooksForm';
import BooksList from './BooksList';
import imagete from '../imagete.png';

const BooksRender = () => (
  <>
    <div className="panel-bg">
      <div className="bar-panel-bg">
        <div>
          <span><h2 className="titre">Bookstore CMS</h2></span>
          <span className="books">BOOKS</span>
          <span className="categorie">CATEGORIES</span>
        </div>
        <div>
          <img src={imagete} alt="person" className="Oval-tete" />
        </div>
      </div>
      <BooksList />
      <div className="Line-bas" />
      <BooksForm />
    </div>
  </>
);
export default BooksRender;
