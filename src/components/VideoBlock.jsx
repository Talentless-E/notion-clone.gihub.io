import React, { useRef } from 'react';

const VideoBlock = ({ url, onSave, editing }) => {
  const ref = useRef(null);

  if (url === null || editing) {
    return (
      <div>
        <input className="custom-input" ref={ref} placeholder={'Введите URL YouTube Video'} />
        <button className="functional-btn" onClick={() => onSave(ref.current.value)}>Сохранить</button>
      </div>
    );
  }

  return <iframe title="Title" width='640' height='360' src={`https://www.youtube.com/embed/${url}`} frameBorder='0' />;
};

export default VideoBlock;
