import { useState } from 'react';
import '../styles/Card.css';

interface Product {
  id: string;
  name: string;
  categoryId: string;
}

interface Props {
  product: Product;
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string, categoryId: string) => void;
}

const ProductCard = ({ product, onDelete, onEdit }: Props) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(product.name);
  const [newCategoryId, setNewCategoryId] = useState(product.categoryId);

  return (
    <div className="card">
      {editing ? (
        <>
          <input value={newName} onChange={e => setNewName(e.target.value)} />
          <input
            value={newCategoryId}
            onChange={e => setNewCategoryId(e.target.value)}
            placeholder="Category ID"
          />
          <button onClick={() => { onEdit(product.id, newName, newCategoryId); setEditing(false); }}>Save</button>
        </>
      ) : (
        <>
          <h3>{product.name}</h3>
          <p>Category ID: {product.categoryId}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ProductCard;