import React, { useRef } from 'react';

const ImageBlock = ({ url, onSave, editing }) => {
  const ref = useRef(null);

  if (url === null || editing) {
    return (
      <div>
        <input className="custom-input" ref={ref} placeholder={'Введите URL картинки'} />
        <button className="functional-btn" onClick={() => onSave(ref.current.value)}>Сохранить</button>
      </div>
    );
  }

  return <img src={url} alt=''/>;
};

export default ImageBlock;
