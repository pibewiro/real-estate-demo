import React from 'react';

const Button = (props: {
  text?: string;
  type?: string;
  onClick: () => void;
}) => {
  const { text, type, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{ width: type === 'outline' ? '100%' : '' }}
    >
      {text}
    </button>
  );
};

export default Button;
