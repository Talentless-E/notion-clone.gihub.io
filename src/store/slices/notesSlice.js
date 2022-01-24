import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: JSON.parse(localStorage.notes || '[]'),
  activeNote: null,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? { ...note, ...action.payload } : note
      );
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
    },
  },
});

export const { addNote, deleteNote, updateNote, setActiveNote } =
  notesSlice.actions;

export default notesSlice.reducer;
