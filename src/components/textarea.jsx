// src/components/Textarea.jsx
import React from 'react';

const Textarea = ({ name, value, onChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="textarea"
  />
);

export default Textarea;
