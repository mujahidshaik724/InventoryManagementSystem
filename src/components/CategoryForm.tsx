import { useState } from 'react';
import '../styles/Form.css';

interface Props {
  onAdd: (name: string) => void;
}

const CategoryForm = ({ onAdd }: Props) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="New Category" />
      <button type="submit">Add</button>
    </form>
  );
};

export default CategoryForm;