import type { Product } from '../App';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';
import '../styles/App.css';

interface Props {
  products: Product[];
  onAdd: (name: string, categoryId: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string, categoryId: string) => void;
}

const ProductsPage = ({ products, onAdd, onDelete, onEdit }: Props) => {
  return (
    <div className="page-container">
      <h1>All Products</h1>
      <ProductForm onAdd={onAdd} />
      <div className="card-container">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
