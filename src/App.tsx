import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import CategoryProductsPage from './pages/CategoryProductsPage';

export interface Product {
  id: string;
  name: string;
  categoryId: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 'p1', name: 'TV', categoryId: '1' },
    { id: 'p2', name: 'Shirt', categoryId: '2' },
  ]);

  const handleAdd = (name: string, categoryId: string) => {
    const newProduct = { id: Date.now().toString(), name, categoryId };
    setProducts([...products, newProduct]);
  };

  const handleDelete = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEdit = (id: string, name: string, categoryId: string) => {
    setProducts(products.map(p => (p.id === id ? { ...p, name, categoryId } : p)));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoriesPage />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              products={products}
              onAdd={handleAdd}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          }
        />
        <Route
          path="/category/:id"
          element={<CategoryProductsPage products={products} />}
        />
      </Routes>
    </>
  );
};

export default App;
