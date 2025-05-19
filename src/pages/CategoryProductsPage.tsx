import { useParams } from 'react-router-dom';
import type { Product } from '../App';

interface Props {
  products: Product[];
}

const CategoryProductsPage = ({ products }: Props) => {
  const { id } = useParams();
  const filtered = products.filter(p => p.categoryId === id);

  return (
    <div className="page-container">
      <h2>Products in Category ID: {id}</h2>
      <ul>
        {filtered.map(p => (
          <li key={p.id}>{p.name}</li>
        ))}
        {filtered.length === 0 && <p>No products found in this category.</p>}
      </ul>
    </div>
  );
};

export default CategoryProductsPage;
