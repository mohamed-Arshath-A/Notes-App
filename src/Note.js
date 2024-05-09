import React from 'react';

const Note = ({ text, onDelete, onSave}) => {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-actions">
        <button onClick={onDelete} className="delete-button">-</button>
        <button onClick={onSave}className="save-button">&#10003;</button>
      </div>
    </div>
  );
};

export default Note;
