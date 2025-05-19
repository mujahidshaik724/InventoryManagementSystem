import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Card.css';

interface Props {
  id: string;
  name: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string) => void;
}

const CategoryCard = ({ id, name, onDelete, onEdit }: Props) => {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  return (
    <div className="card">
      {editing ? (
        <>
          <input value={newName} onChange={e => setNewName(e.target.value)} />
          <button onClick={() => { onEdit(id, newName); setEditing(false); }}>Save</button>
        </>
      ) : (
        <>
          <h3 onClick={() => navigate(`/category/${id}`)}>{name}</h3>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default CategoryCard;