import React from 'react';

export const Button = ({ children, primary }) => (
  <button
    style={{
      display: 'inline-block',
      padding: '0 3em',
      height: 50,
      borderRadius: 50,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: primary ? '#00c4a7' : '#adadad',
      background: primary ? '#00c4a7' : '#fff',
      color: primary ? '#fff' : '#363636',
      font: 'normal 14px/50px sans-serif',
      textRendering: 'optimizeLegibility',
    }}
  >
    Lol
    {children}
  </button>
);
