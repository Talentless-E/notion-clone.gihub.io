import React, { useMemo } from 'react';
import '../css/sidebar.css';
import add from '../img/add.svg';
import close from '../img/close.svg';
import { getNestedArray } from '../utils';

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const treeNotes = useMemo(() => getNestedArray(notes, -1), [notes]);

  const getList = (notes) => {
    return (
      <ul className='sidebar-notes'>
        {notes.map((note) => (
          <li key={note.id}>
            <div
              className={`sidebar-note ${
                note.id === activeNote?.id && 'active'
              }`}
              onClick={() => setActiveNote(note)}
            >
              <div className='sidebar-note__title'>
                <h3 className='note-title'>{note.title}</h3>
                <button
                  className='note-delete-btn'
                  onClick={() => onDeleteNote(note.id)}
                >
                  <img src={close} alt='' />
                </button>
              </div>
            </div>
            {note.children.length ? getList(note.children) : null}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h1>Notes</h1>
        <button className='sidebar-header-btn' onClick={onAddNote}>
          <img src={add} alt='' />
        </button>
      </div>
      {getList(treeNotes)}
    </div>
  );
};

export default Sidebar;
