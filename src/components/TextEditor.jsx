import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const TextEditor = ({ onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (state) => {
    setEditorState(state);
    onChange(draftToHtml(convertToRaw(state.getCurrentContent())));
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
    />
  );
};

export default TextEditor;
