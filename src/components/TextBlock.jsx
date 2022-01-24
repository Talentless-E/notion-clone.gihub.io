import React, { useState } from 'react';
import TextEditor from './TextEditor';

const TextBlock = ({ text, onSave, editing }) => {
  const [value, setValue] = useState('');

  if (text === null || editing) {
    return (
      <div>
        <TextEditor onChange={(value) => setValue(value)} />
        <button className="functional-btn" onClick={() => onSave(value)}>Сохранить изменения</button>
      </div>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

export default TextBlock;
