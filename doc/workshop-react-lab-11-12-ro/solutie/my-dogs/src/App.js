import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [formData, setFormData] = useState({ name: '', img: '' });
  const [editingDogId, setEditingDogId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:4000/dogs');
      const data = await response.json();
      setDogs(data);
    } catch (error) {
      console.error('Error fetching dogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDog = async (dogId) => {
    try {
      await fetch(`http://localhost:4000/dogs/${dogId}`, {
        method: 'DELETE',
      });
      fetchDogs();
    } catch (error) {
      console.error('Error deleting dog:', error);
    }
  };

  const handleAddDog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/dogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const newDog = await response.json();
      setDogs([...dogs, newDog]);
      setFormData({ name: '', img: '' });
    } catch (error) {
      console.error('Error adding dog:', error);
    }
  };

  const handleEditDog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/dogs/${editingDogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const updatedDog = await response.json();
      setDogs(dogs.map((dog) => (dog.id === editingDogId ? updatedDog : dog)));
      setFormData({ name: '', img: '' });
      setEditingDogId(null);
    } catch (error) {
      console.error('Error editing dog:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditButtonClick = (dog) => {
    setFormData({ name: dog.name, img: dog.img });
    setEditingDogId(dog.id);
  };

  const handleCancelEdit = () => {
    setFormData({ name: '', img: '' });
    setEditingDogId(null);
  };

  return (
    <main>
      <header>
        <h2>{editingDogId ? 'Edit Dog' : 'Add Dog'}</h2>
        <form onSubmit={editingDogId ? handleEditDog : handleAddDog}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={formData.img}
            onChange={handleInputChange}
          />
          {editingDogId ? (
            <div>
              <button type="submit">Save</button>
              <button type='button' onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <button type="submit">Add</button>
          )}
        </form>
      </header>
      {loading ? (
        <p>Loading dogs...</p>
      ) : (
        <ul>
          {dogs.map((dog) => (
            <li key={dog.id}>
              {dog.name} - <img src={dog.img} alt={dog.name} />
              <button type='button' onClick={() => handleEditButtonClick(dog)}>Edit</button>
              <button onClick={() => handleDeleteDog(dog.id)} type='button'>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default App;