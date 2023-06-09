import BooksForm from './BooksForm';
import BooksList from './BooksList';

const BooksRender = () => {
  const books = [
    {
      id: 1, title: 'book1', author: 'author1', completed: false, type: 'action',
    },
    {
      id: 2, title: 'book2', author: 'author2', completed: false, type: 'action',
    },
    {
      id: 3, title: 'book3', author: 'author3', completed: false, type: 'action',
    },
    {
      id: 4, title: 'book4', author: 'author4', completed: false, type: 'action',
    },
  ];

  return (
    <>
      <BooksList booksProp={books} />
      <div className="Line" />
      <BooksForm />
    </>
  );
};

export default BooksRender;
