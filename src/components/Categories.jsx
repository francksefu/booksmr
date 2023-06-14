import { useSelector } from 'react-redux';

function Categories() {
  const categories = useSelector((store) => store.categories);
  return (
    <>
      <h2 className="range">Categories</h2>
      <p>This is categorie of books ...coming soon...</p>
      <button type="button">check status</button>
      <p>{categories.status}</p>
    </>
  );
}

export default Categories;
