import React, { useState } from 'react';
import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';
import VideoBlock from './VideoBlock';

const Block = ({ block, onSave, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const { type, data } = block;

  const onBlockSave = (value) => {
    setEditing(false);
    onSave({ ...block, data: value });
  };

  let blockForRender;

  switch (type) {
    case 'TEXT':
      blockForRender = (
        <TextBlock text={data} onSave={onBlockSave} editing={editing} />
      );
      break;
    case 'IMAGE':
      blockForRender = (
        <ImageBlock url={data} onSave={onBlockSave} editing={editing} />
      );
      break;
    case 'VIDEO':
      blockForRender = (
        <VideoBlock url={data} onSave={onBlockSave} editing={editing} />
      );
      break;
    default:
      blockForRender = null;
  }

  return (
    <div>
      {blockForRender}
      
      <button className="functional-btn" onClick={() => onDelete(block.id)}>удалить</button>
      {!editing && <button className="functional-btn" onClick={() => setEditing(true)}>изменить</button>}
    </div>
  );
};

export default Block;
