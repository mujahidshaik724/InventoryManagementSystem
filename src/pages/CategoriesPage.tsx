import { useState } from 'react';
import CategoryCard from '../components/CategoryCard';
import CategoryForm from '../components/CategoryForm';
import '../styles/App.css';

interface Category {
  id: string;
  name: string;
}

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Clothing' },
  ]);

  const handleAdd = (name: string) => {
    const newCategory = { id: Date.now().toString(), name };
    setCategories([...categories, newCategory]);
  };

  const handleDelete = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  const handleEdit = (id: string, newName: string) => {
    setCategories(categories.map(c => (c.id === id ? { ...c, name: newName } : c)));
  };

  return (
    <div className="page-container">
      <h1>Categories</h1>
      <CategoryForm onAdd={handleAdd} />
      <div className="card-container">
        {categories.map(cat => (
          <CategoryCard key={cat.id} id={cat.id} name={cat.name} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;