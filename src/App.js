import React, { useState, useEffect } from 'react';
import './App.css';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load notes from local storage when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleSaveNotes = () => {
    // Save notes to local storage
    localStorage.setItem('notes', JSON.stringify(notes));
    alert('Notes saved successfully!');
  };

  return (
    <div className="app">
      <h1 className="title">My Note App</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your note"
        />
        <button className="icon-button" onClick={handleAddNote}>
          +
        </button>
      </div>
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            text={note}
            onDelete={() => handleDeleteNote(index)}
            onSave={() => handleSaveNotes(index)}
           
          />
          
        ))}
         
      </div>
     
    </div>
  );
}

export default App;
