import React from 'react';

const Input = (props: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}) => {
  const { placeholder, value, onChange } = props;
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
