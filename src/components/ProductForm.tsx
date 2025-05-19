import { useState } from 'react';
import '../styles/Form.css';

interface Props {
  onAdd: (name: string, categoryId: string) => void;
}

const ProductForm = ({ onAdd }: Props) => {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !categoryId.trim()) return;
    onAdd(name, categoryId);
    setName('');
    setCategoryId('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Product Name" />
      <input value={categoryId} onChange={e => setCategoryId(e.target.value)} placeholder="Category ID" />
      <button type="submit">Add</button>
    </form>
  );
};

export default ProductForm;