import React from 'react';
import uuid from 'react-uuid';
import '../css/main.css';
import Block from './Block';

const Main = ({ activeNote, onUpdateNote, setActiveNote, notes }) => {
  const onEditField = (key, value) => {
    setActiveNote({ ...activeNote, [key]: value });
  };

  const onEditParent = (parentId) => {
    setActiveNote({ ...activeNote, parentId });
  };

  const addBlock = (type) => {
    setActiveNote({
      ...activeNote,
      blocks: [...activeNote.blocks, { id: uuid(), type, data: null }],
    });
  };

  const saveBlock = (updatedBlock) => {
    const updatedBlocks = activeNote.blocks.map((block) =>
      block.id === updatedBlock.id ? updatedBlock : block
    );
    setActiveNote({ ...activeNote, blocks: updatedBlocks });
  };

  const deleteBlock = (id) => {
    const updatedBlocks = activeNote.blocks.filter((block) => block.id !== id);
    setActiveNote({ ...activeNote, blocks: updatedBlocks });
  };

  if (!activeNote)
    return (
      <div className='no-active-notes'>
        <p>no notes selected</p>
      </div>
    );

  return (
    <div className='main'>
      <div className='main-container'>
        <select
        className="main-select"
          value={activeNote.parentId}
          onChange={(e) => onEditParent(e.target.value)}
        >
          <option value={-1}>---</option>
          {notes.map((note) => (
            <option key={note.id} value={note.id}>
              {note.title}
            </option>
          ))}
        </select>
        <input
          type='text'
          id='title'
          className='main__note-title'
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
          placeholder='enter title'
        />
        <div className="line"></div>
        {activeNote.blocks.map((block) => (
          <Block key={block.id} block={block} onSave={saveBlock} onDelete={deleteBlock} />
        ))}
        <div className="line"></div>
        <div className="center">
          <button className="functional-btn" onClick={() => addBlock('TEXT')}>Текст</button>
          <button className="functional-btn" onClick={() => addBlock('IMAGE')}>Картинка</button>
          <button className="functional-btn" onClick={() => addBlock('VIDEO')}>Видео</button>
        </div>
        <button className="functional-btn center" onClick={() => onUpdateNote(activeNote)}>Сохранить заметку</button>
      </div>
    </div>
  );
};

export default Main;
