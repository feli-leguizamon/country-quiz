// Loading.tsx
import React from 'react';

//css
import './loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading__container">
      <div className="loading__spinner"></div>
      <p className="loading__text">Loading...</p>
    </div>
  );
};

export default Loading;
