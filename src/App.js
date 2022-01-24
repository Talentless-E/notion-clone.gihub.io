import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main.jsx';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNote,
  deleteNote,
  updateNote,
  setActiveNote,
} from './store/slices/notesSlice';

function App() {
  const notes = useSelector((state) => state.notes.notes);
  const activeNote = useSelector((state) => state.notes.activeNote);

  const dispatch = useDispatch();

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'New note',
      parentId: '-1',
      blocks: [],
      children: [],
    };
    
    dispatch(addNote(newNote));
  };

  const onUpdateNote = (updatedNote) => {
    dispatch(updateNote(updatedNote));
  };

  const onDeleteNote = (idToDelete) => {
    dispatch(deleteNote(idToDelete));
  };

  return (
    <div className='layout'>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={(note) => dispatch(setActiveNote(note))}
      />
      <Main
        activeNote={activeNote}
        onUpdateNote={onUpdateNote}
        setActiveNote={(note) => dispatch(setActiveNote(note))}
        notes={notes}
      />
    </div>
  );
}

export default App;
